import { Box, Flex, Center } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
import FluffStats from '../components/browse/FluffStats'
import CurrentFavs from '../components/browse/CurrentFavs'
import MainFluffImage from '../components/browse/MainFluffImage'
import Name from '../components/browse/Name'
import React, { useState, useEffect, useContext } from 'react'
import { TokenContext } from './_app'
import store from 'store/dist/store.modern.min'
import FilterForm from '../components/browse/FilterForm'
import { AnimatePresence, motion } from 'framer-motion'
import { server } from '../components/utils'

// 1. Create a custom motion component from Box
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export default function Home({ data }) {
  const [results, setResults] = useState(data);
  const [favorites, setFavorites] = useState(null);
  const [direction, setDirection] = useState("");

  //Get anything from local storage and set it to favs state when the component mounts
  useEffect(() => {
    setFavorites(store.get('favs') || [])
  }, [])
  //When the favs state changes, save it to local storage
  useEffect(() => {
    store.set('favs', favorites)
  }, [favorites])

  //Handle the choice of the user
  const handleChoice = (direction) => {
    if (direction === 'left') {
      // console.log("left")
      setDirection("left")
      nextAnimal()
      results.length === 0 ? getPets() : null
    } else if (direction === "right") {
      // console.log("right")
      setDirection("right")
      addToFavs()
      nextAnimal()
      results.length === 0 ? getPets() : null
    }
  }
  // Delete first item from results array and display the next one
  const nextAnimal = () => {
    setResults(results.slice(1, results.length));
  }
  //Add current item to favs array
  const addToFavs = () => {
    const newFavs = store.get('favs') || []
    const checkFavsForDups = newFavs.find(fav => fav.id === results[0].id)
    checkFavsForDups ? nextAnimal() : newFavs.push(results[0])
    setFavorites(newFavs)
  }
  const sPrefs = store.get('searchPrefs');
  console.log(sPrefs, "Search Prefs")

  //TODO: Need to move these to a component as they are being repeated
  // Remove fav when user clicks small circle
  const deleteFromFavorites = (e) => {
    const selectedId = parseInt(e.target.id, 10)
    const itemRemoved = favorites.filter((favorite) => favorite.id !== selectedId);
    setFavorites(itemRemoved);
  }
  // Delete all the favorites
  const deleteAllFavs = () => {
    setFavorites([]);
  }

  return (

    <Box overflow="hidden" backgroundColor="purple.50" p="2" height="100%" className="container">
      <Head as="h1" size="2xl" mb="2">
        <title>Find a Floof | Fun way to find your new pet.</title>
        <link rel="icon" href="/logoDog.svg" />
      </Head>
      <Header />

      <Box className="browse" minHeight="100vh">

        <Box p="2">
          <FilterForm />
        </Box>
        <AnimatePresence>
          <MotionBox
            key={results[0].id}
            initial={{ scale: .8, opacity: 0, y: -100 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition: { delay: .5 } }}
            exit={{ scale: .8, opacity: 0 }}
            overflow="hidden"
          >
            <MainFluffImage current={results[0]} handleChoice={handleChoice} />
            <Name current={results[0]} />
          </MotionBox>
        </AnimatePresence>

        <Flex flexDirection="column" alignItems="center">
          <FluffStats current={results[0]} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <CurrentFavs deleteAllFavs={deleteAllFavs} setFavorites={setFavorites} deleteFromFavorites={deleteFromFavorites} favorites={favorites} />
        </Flex>

      </Box>

      <Footer />
    </Box>
  )
}

export async function getStaticProps(context) {

  const fetchAccessToken = async () => {
    const dev = process.env.NODE_ENV !== 'production';
    const res = await fetch(dev === 'production' ? `http://localhost:3000/api/oauth-token` : `https://findafloof.com/api/oauth-token`);
    const json = await res.json();
    return json
  };
  // Search Params - separate with a &
  // type=dog,cat
  // location=55437
  // limit=100
  // status=adoptable
  // good_with_children=1 bool
  // good_with_cats=1 bool
  // good_with_dogs=1 bool
  // age=baby,young,adult,senior
  // const initialState = {
  //   dog: true,
  //   cat: true,
  //   location: "",
  //   good_with_children: false,
  //   good_with_dogs: false,
  //   good_with_cats: false,
  //   baby: true,
  //   young: true,
  //   adult: true,
  //   senior: true
  // }
  const sPrefs = store.get('searchPrefs');
  console.log(sPrefs)
  let searchString = "boo";
  let animalType = "";
  let animalAges = "";

  // sPrefs.dog ? animalType += `dog` : null;
  // sPrefs.cat && animalType.length > 0 ? animalType += `,cat` : animalType += `cat`;

  // sPrefs.baby && animalAges.length > 0 ? animalAges += `,baby` : animalAges += `baby`;
  // sPrefs.young && animalAges.length > 0 ? animalAges += `,young` : animalAges += `young`;
  // sPrefs.adult && animalAges.length > 0 ? animalAges += `,adult` : animalAges += `adult`;
  // sPrefs.senior && animalAges.length > 0 ? animalAges += `,senior` : animalAges += `senior`;

  // sPrefs.location ? searchString += `&location=${location}` : null;
  // sPrefs.good_with_children ? searchString += `&good_with_children=1` : null;
  // sPrefs.good_with_cats ? searchString += `&good_with_cats=1` : null;
  // sPrefs.good_with_dogs ? searchString += `&good_with_dogs=1` : null;
  // animalAges.length > 0 ? searchString += `&age=${animalAges}` : null;
  // animalType.length > 0 ? searchString += `&type=${animalType}` : null;

  // console.log(searchString, 'search string')

  const accessToken = await fetchAccessToken()

  const apiResults = await fetch('https://api.petfinder.com/v2/animals?limit=50&status=adoptable&location=55437',

    {
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    })
  if (apiResults === null) return <Loading />;
  console.log("Just fetched")
  const json = await apiResults.json();
  const data = await json.animals.filter(animal => animal.primary_photo_cropped !== null);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 30, // will revalidate the page every 300 seconds
  }
}
