import { Heading, Text, Flex, Container, Box, Center } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FluffStats from '../components/browse/FluffStats'
import CurrentFavs from '../components/browse/CurrentFavs'
import MainFluffImage from '../components/browse/MainFluffImage'
import Name from '../components/browse/Name'

export default function Home() {

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
