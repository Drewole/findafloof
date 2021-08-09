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

// 1. Create a custom motion component from Box
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export default function Home() {

  const [results, setResults] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const [direction, setDirection] = useState("");
  const accessToken = useContext(TokenContext);

  const getPets = async () => {
    if (results && results.length > 3) {
      return;
    } else {
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
    }

  }

  //Get anything from local storage and set it to favs state when the component mounts
  useEffect(() => {
    setFavorites(store.get('favs') || [])
  }, [])
  //When the favs state changes, save it to local storage
  useEffect(() => {
    store.set('favs', favorites)
  }, [favorites])

  useEffect(() => {
    // Making sure we have an api access token
    if (accessToken === null) return;
    console.log(accessToken, "Access Token")

    getPets();
  }, [accessToken]);
  if (results === null) return <Loading />;

  //Handle the choice of the user
  const handleChoice = (direction) => {
    if (direction === 'left') {
      console.log("left")
      setDirection("left")
      nextAnimal()
      results.length === 0 ? getPets() : null
    } else if (direction === "right") {
      console.log("right")
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
    newFavs.push(results[0])
    setFavorites(newFavs)
  }

  //TODO: Need to move these to a component
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
