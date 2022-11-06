import { Box, Flex, Center } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import FluffStats from '../components/browse/FluffStats';
import CurrentFavs from '../components/browse/CurrentFavs';
import MainFluffImage from '../components/browse/MainFluffImage';
import Name from '../components/browse/Name';
import React, { useState, useEffect, useContext } from 'react';
import { TokenContext } from './_app';
import store from 'store/dist/store.modern.min';
// import FilterForm from '../components/browse/FilterForm';
import { AnimatePresence, motion } from 'framer-motion';
import { server } from '../components/utils/config';

// 1. Create a custom motion component from Box
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const SearchParams = store.get('searchPrefs');

export default function Home({ data }) {
  console.log('data', data);
  const [results, setResults] = useState(data);
  const [favorites, setFavorites] = useState(null);
  const [direction, setDirection] = useState('');

  //Get anything from local storage and set it to favs state when the component mounts
  useEffect(() => {
    setFavorites(store.get('favs') || []);
  }, []);
  //When the favs state changes, save it to local storage
  useEffect(() => {
    store.set('favs', favorites);
  }, [favorites]);

  //Handle the choice of the user
  const handleChoice = (direction) => {
    if (direction === 'left') {
      // console.log("left")
      setDirection('left');
      nextAnimal();
      results.length === 0 ? getPets() : null;
    } else {
      // console.log("right")
      setDirection('right');
      addToFavs();
      nextAnimal();
      results.length === 0 ? getPets() : null;
    }
  };
  // Delete first item from results array and display the next one
  const nextAnimal = () => {
    setResults(results.slice(1, results.length));
  };
  //Add current item to favs array
  const addToFavs = () => {
    const newFavs = store.get('favs') || [];
    const checkFavsForDups = newFavs.find((fav) => fav.id === results[0].id);
    checkFavsForDups ? nextAnimal() : newFavs.push(results[0]);
    setFavorites(newFavs);
  };
  const sPrefs = store.get('searchPrefs');
  console.log(sPrefs, 'Search Prefs');

  //TODO: Need to move these to a component as they are being repeated
  // Remove fav when user clicks small circle
  const deleteFromFavorites = (e) => {
    const selectedId = parseInt(e.target.id, 10);
    const itemRemoved = favorites.filter(
      (favorite) => favorite.id !== selectedId
    );
    setFavorites(itemRemoved);
  };
  // Delete all the favorites
  const deleteAllFavs = () => {
    setFavorites([]);
  };

  return (
    <div className="container">
      <Head as="h1" size="2xl" mb="2">
        <title>Find a Floof | Fun way to find your new pet.</title>
        <link rel="icon" href="/logoDog.svg" />
      </Head>
      <Header />

      <div className="browse">
        <div>{/* <FilterForm /> */}</div>
        <AnimatePresence>
          <div className="animation-wrapper">
            <MainFluffImage current={results[0]} handleChoice={handleChoice} />
            <Name current={results[0]} />
          </div>
        </AnimatePresence>

        <div className="stats-wrapper">
          <FluffStats current={results[0]} />
        </div>
        <div className="favorites-wrapper">
          <CurrentFavs
            deleteAllFavs={deleteAllFavs}
            setFavorites={setFavorites}
            deleteFromFavorites={deleteFromFavorites}
            favorites={favorites}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const fetchAccessToken = async () => {
    const dev = process.env.NODE_ENV !== 'production';
    const res = await fetch(
      dev === 'production'
        ? `http://localhost:3000/api/oauth-token`
        : `https://findafloof.com/api/oauth-token`
    );
    const json = await res.json();
    return json;
  };
  // Search Params - separate with a &

  // const searchPrefs = await store.get('searchPrefs');
  // let searchString = "";
  // let animalType = "";
  // let animalAges = "";

  // searchPrefs.dog ? animalType += `dog` : null;
  // searchPrefs.cat && animalType.length > 0 ? animalType += `,cat` : animalType += `cat`;

  // searchPrefs.baby && animalAges.length > 0 ? animalAges += `,baby` : animalAges += `baby`;
  // searchPrefs.young && animalAges.length > 0 ? animalAges += `,young` : animalAges += `young`;
  // searchPrefs.adult && animalAges.length > 0 ? animalAges += `,adult` : animalAges += `adult`;
  // searchPrefs.senior && animalAges.length > 0 ? animalAges += `,senior` : animalAges += `senior`;

  // searchPrefs.location ? searchString += `&location=${location}` : null;
  // searchPrefs.good_with_children ? searchString += `&good_with_children=1` : null;
  // searchPrefs.good_with_cats ? searchString += `&good_with_cats=1` : null;
  // searchPrefs.good_with_dogs ? searchString += `&good_with_dogs=1` : null;
  // animalAges.length > 0 ? searchString += `&age=${animalAges}` : null;
  // animalType.length > 0 ? searchString += `&type=${animalType}` : null;

  // console.log(searchString, 'search string')

  const accessToken = await fetchAccessToken();

  const apiResults = await fetch(
    `https://api.petfinder.com/v2/animals?limit=100&status=adoptable&${SearchParams}`,

    {
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    }
  );
  if (apiResults === null) return <Loading />;
  console.log('Just fetched');
  const json = await apiResults.json();
  const data = await json.animals.filter(
    (animal) => animal.primary_photo_cropped !== null
  );
  // console.log(data, 'data');

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 30, // will revalidate the page every 300 seconds
  };
}
