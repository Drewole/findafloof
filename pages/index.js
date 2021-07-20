import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FluffStats from '../components/browse/FluffStats'
import CurrentFavs from '../components/browse/CurrentFavs'
import MainFluffImage from '../components/browse/MainFluffImage'
import Name from '../components/browse/Name'
import React, { useState, useEffect, useContext } from 'react'
import { TokenContext } from './_app'

export default function Home() {

  const [results, setResults] = useState(null);
  const [currentSelection, setCurrentSelection] = useState(null);
  const accessToken = useContext(TokenContext);

  useEffect(() => {
    if (accessToken === null) return;
    const getPets = async () => {
      const results = await fetch('https://api.petfinder.com/v2/animals?location=55437&limit=100', {
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
        },
      })
      const json = await results.json();
      setResults(json.animals);
      console.log(await json.animals, "Results")
    }
    getPets();
  }, [accessToken]);
  if (results === null) return `<h1>Loading...</h1>`;

  return (

    <Box backgroundColor="purple.50" p="2" height="100%" className="container">
      <Head as="h1" size="2xl" mb="2">
        <title>Find a Floof</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Box className="browse" h="auto">
        <MainFluffImage />
        <Flex flexDirection="column" alignItems="center">
          <Name animalName="Buddy" animalGender="male" />
          <FluffStats />
          <CurrentFavs />
        </Flex>
      </Box>

      <Footer />
    </Box>
  )
}
