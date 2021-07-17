import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FluffStats from '../components/browse/FluffStats'
import CurrentFavs from '../components/browse/CurrentFavs'
import MainFluffImage from '../components/browse/MainFluffImage'
import Name from '../components/browse/Name'
// import { useState, useEffect, useContext } from 'react'
// import { AuthContext } from './_app'
export default function Home() {

  // const [results, setResults] = useState(null);
  // const accessToken = useContext(AuthContext);

  // useEffect(() => {
  //   if (accessToken) {
  //     fetch('https://api.petfinder.com/v2/animals', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(json => setResults(json))
  //   }
  //   console.log(results)
  // }, [accessToken]);
  return (

    <Box backgroundColor="purple.50" p="2" height="100vh" className="container">
      <Head as="h1" size="2xl" mb="2">
        <title>Find a Floof</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Box className="browse" h="auto">
        <MainFluffImage />
        <Name animalName="Buddy" animalGender="male" />
        <FluffStats />
        <CurrentFavs />
      </Box>

      <Footer />
    </Box>
  )
}
