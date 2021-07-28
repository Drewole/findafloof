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

export default function Home() {

  const [results, setResults] = useState(null);
  const accessToken = useContext(TokenContext);

  useEffect(() => {
    if (accessToken === null) return;
    console.log(accessToken)
    const getPets = async () => {
      const apiResults = await fetch('https://api.petfinder.com/v2/animals?location=55437&limit=100&status=adoptable&good_with_children=1&age=baby,young,adult,senior&good_with_cats=1&good_with_dogs=1', {
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
        },
      })
      const json = await apiResults.json();
      const filtered = await json.animals.filter(animal => animal.primary_photo_cropped !== null);
      setResults(filtered);
      console.log(filtered[0])
    }
    getPets();
  }, [accessToken]);
  if (results === null) return <Loading />;

  return (

    <Box backgroundColor="purple.50" p="2" height="100%" className="container">
      <Head as="h1" size="2xl" mb="2">
        <title>Find a Floof</title>
        <link rel="icon" href="/logoDog.svg" />
      </Head>
      <Header />

      <Box className="browse" h="auto">
        <MainFluffImage props={results[0]} />
        <Flex flexDirection="column" alignItems="center">
          <Name props={results[0]} />
          <FluffStats props={results[0]} />
          <CurrentFavs />
        </Flex>
      </Box>

      <Footer />
    </Box>
  )
}
