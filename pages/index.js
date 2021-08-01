import { Box, Flex } from '@chakra-ui/react'
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

export default function Home() {
  let escapeKey = 27;
  let leftArrowKey = 37;
  let rightArrowKey = 37;

  const [results, setResults] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const accessToken = useContext(TokenContext);

  const getPets = async () => {

    // Search Params - separate with a &
    // type=dog,cat
    // location=55437
    // limit=100
    // status=adoptable
    // good_with_children=1 bool
    // good_with_cats=1 bool
    // good_with_dogs=1 bool
    // age=baby,young,adult,senior  

    //TODO: Need to make sure we fetch more results when the results are less than 5
    //Need to compare the results to the favorites and remove any that are already in the favorites
    //Need to make sure we are not fetching the same results over and over
    const apiResults = await fetch('https://api.petfinder.com/v2/animals?location=55437&limit=100&status=adoptable', {
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    })
    console.log("Just fetched")
    const json = await apiResults.json();
    const filtered = await json.animals.filter(animal => animal.primary_photo_cropped !== null);
    setResults(filtered);
    // console.log(filtered[0])
  }

  //Get anything from local storage and set it to favs state when the component mounts
  useEffect(() => {
    setFavorites(store.get('favs'))
  }, [])
  //When the favs state changes, save it to local storage
  useEffect(() => {
    store.set('favs', favorites)
  }, [favorites])

  useEffect(() => {
    // Making sure we have a token
    if (accessToken === null) return;
    console.log(accessToken, "Access Token")

    getPets();
  }, [accessToken]);
  if (results === null) return <Loading />;

  function searchDuplicate(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        return
      }
    }
  }

  //Handle the choice of the user
  const handleChoice = (direction) => {
    if (direction === 'left') {
      console.log("left")
      nextAnimal()
      results.length === 0 ? getPets() : null
    } else if (direction === "right") {
      console.log("right")
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
    newFavs.push(results[0])
    setFavorites(newFavs)
  }
  const deleteFromFavorites = (e) => {
    const selectedId = e.target.id
    console.log(selectedId, "selected ID")
    const filteredFavs = favorites.filter((favorite) => favorite.id != selectedId);
    console.log(filteredFavs)
    setFavorites(filteredFavs);
  }

  return (

    <Box overflow="hidden" backgroundColor="purple.50" p="2" height="100%" className="container">
      <Head as="h1" size="2xl" mb="2">
        <title>Find a Floof | Fun way to find your new pet.</title>
        <link rel="icon" href="/logoDog.svg" />
      </Head>
      <Header />

      <Box className="browse" h="auto">
        <Box p="2">
          <FilterForm />
        </Box>
        <MainFluffImage current={results[0]} handleChoice={handleChoice} />
        <Flex flexDirection="column" alignItems="center">
          <Name current={results[0]} />
          <FluffStats current={results[0]} />
          <CurrentFavs deleteFromFavorites={deleteFromFavorites} favorites={favorites} />
        </Flex>
      </Box>

      <Footer />
    </Box>
  )
}
