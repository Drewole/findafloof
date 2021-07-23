import { Heading, Text, Flex, Container, Box, Center } from '@chakra-ui/react'
import Head from 'next/head'
import SortableTable from '../components/favorites/SortableTable'
import Header from '../components/Header'

const favorites = () => {
    return (
        <Box height="100vh" alignItems="center" className="container">
            <Header />
            <Head as="h1" size="2xl" mb="2">
                <title>Find a Floof | Your Favorites</title>
                <link rel="icon" href="/logoDog.svg" />
            </Head>
            <Center>
                <SortableTable />
            </Center>

        </Box>
    )
}

export default favorites
