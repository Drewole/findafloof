import { Flex, Container, Link, Box, Center, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import CurrentFavs from '../components/browse/CurrentFavs'
import Header from '../components/Header'
import store from 'store/dist/store.modern.min'
import Loading from '../components/Loading'
import { useRouter } from 'next/router'
import { ArrowLeftCircle } from 'react-bootstrap-icons'

const favorites = () => {
    const router = useRouter()
    console.log(router.query.id, "Query Value");

    const [favorites, setFavorites] = useState(null);

    //Get anything from local storage and set it to favs state when the component mounts
    useEffect(() => {
        setFavorites(store.get('favs'))
    }, [])
    //When the favs state changes, save it to local storage
    useEffect(() => {
        store.set('favs', favorites)
    }, [favorites])

    //TODO: Need to move these to a component as they are being repeated
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

    if (favorites === null) return <Loading />;
    return (
        <Box height="100vh" alignItems="center" className="container">
            <Header />
            <Head as="h1" size="2xl" mb="2">
                <title>Find a Floof | Your Favorites</title>
                <link rel="icon" href="/logoDog.svg" />
            </Head>
            <Flex flexDirection="column" alignItems="center">
                <CurrentFavs deleteAllFavs={deleteAllFavs} setFavorites={setFavorites} deleteFromFavorites={deleteFromFavorites} favorites={favorites} />
            </Flex>
            <Center>
                <Link href="/" >
                    {/* //TODO: Need to fix the underline on hover, textDecoration isn't working */}
                    <Button mt="24px" color="purple.700" backgroundColor="transparent"
                        _hover={{ backgroundColor: 'pink.500', transform: 'scale(1.08)', color: 'white', textDecoration: 'none' }}
                        textTransform="uppercase" size="sm">
                        <ArrowLeftCircle />&nbsp; <a>Back to Browse</a>
                    </Button>

                </Link>
            </Center>

        </Box >
    )
}

export default favorites
