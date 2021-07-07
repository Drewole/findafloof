import { Heading, Text, Flex, Container, Box, Center } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {

  return (

    <Box height="100vh" alignItems="center" className="container">
      <Header />
      <Head as="h1" size="2xl" mb="2">
        <title>Find a Floof</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box border="1" borderColor="blackAlpha.100" bg="blackAlpha.50" m="6" p="6">
        <h1 className="title">

        </h1>
        <Text fontsize="l" mt="2">Etiam congue mattis ultricies. Aliquam ac dolor sit amet odio pretium facilisis sed quis felis. Maecenas porta, enim ut iaculis euismod, metus quam fringilla lacus, ut cursus tellus mi eu nunc.</Text>
      </Box>
      <div className="my-items">
        <Flex direction="column" border="6" borderColor="red.400" p="5" flexWrap="wrap" alignItems="left" justifyContent="center" maxW="800px" mt="10">
          <Heading as="h3" size="l" mb="3">Box Heading 1</Heading>
          <p>This is a box that is pretty flexible</p>
        </Flex>

      </div>
      <Center border="" borderRadius="4" m="6" bg="tomato" h="100px" color="white">
        This is the Center
      </Center>
    </Box>
  )
}
