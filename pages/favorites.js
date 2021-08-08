import { Heading, Text, Flex, Container, Box, Center } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import CurrentFavs from '../components/browse/CurrentFavs'
import Header from '../components/Header'
import store from 'store/dist/store.modern.min'
import Loading from '../components/Loading'
import { useRouter } from 'next/router'

const favorites = () => {
    const router = useRouter()
    console.log(router.query, "Query Value");

    const [favorites, setFavorites] = useState(null);

    //Get anything from local storage and set it to favs state when the component mounts
    useEffect(() => {
        setFavorites(store.get('favs'))
    }, [])
    //When the favs state changes, save it to local storage
    useEffect(() => {
        store.set('favs', favorites)
    }, [favorites])

    if (favorites === null) return <Loading />;
    return (
        <Box height="100vh" alignItems="center" className="container">
            <Header />
            <Head as="h1" size="2xl" mb="2">
                <title>Find a Floof | Your Favorites</title>
                <link rel="icon" href="/logoDog.svg" />
            </Head>
            <Flex flexDirection="column" alignItems="center">
                <CurrentFavs favorites={favorites} />
            </Flex>

        </Box>
    )
}

export default favorites
