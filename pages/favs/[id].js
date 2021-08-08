import React, { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import store from 'store/dist/store.modern.min'
import CurrentFavs from '../../components/browse/CurrentFavs'
import Header from '../../components/Header'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Name from '../../components/browse/Name'

const SingleFav = () => {
    const [favorites, setFavorites] = useState(null);

    //Get anything from local storage and set it to favs state when the component mounts
    useEffect(() => {
        setFavorites(store.get('favs') || [])
    }, [])
    //When the favs state changes, save it to local storage
    useEffect(() => {
        store.set('favs', favorites)
    }, [favorites])

    return (
        <Box overflow="hidden" backgroundColor="purple.50" p="2" height="100%" className="container">
            <Head as="h1" size="2xl" mb="2">
                <title>Find a Floof | Favorite</title>
                <link rel="icon" href="/logoDog.svg" />
            </Head>
            <Header />
            <h1>Single Fav Page</h1>
            {/* <Name current={favorites} /> */}
            {/* <CurrentFavs /> */}
            <Footer />
        </Box>
    )
}

export default SingleFav
