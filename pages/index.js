import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FluffStats from '../components/browse/FluffStats'
import CurrentFavs from '../components/browse/CurrentFavs'
import MainFluffImage from '../components/browse/MainFluffImage'
import Name from '../components/browse/Name'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../pages/_app'
export default function Home() {

  // const [results, setResults] = useState(null);
  // const accessToken = useContext(AuthContext);

  // useEffect(() => {
  //   if (accessToken === null) return;
  //   const getPets = async () => {
  //     const results = await fetch('https://api.petfinder.com/v2/animals', {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     const json = await results.json();
  //     setResults(json.animals);
  //   }
  //   getPets();
  // }, [accessToken]);
  // if (results === null) return `<h1>Loading...</h1>`;

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
