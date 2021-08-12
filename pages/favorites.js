import { Flex, Container, Link, Box, Center, Button, AspectRatio } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import CurrentFavs from '../components/browse/CurrentFavs'
import Header from '../components/Header'
import store from 'store/dist/store.modern.min'
import Loading from '../components/Loading'
import { useRouter } from 'next/router'
import { ArrowLeftCircle } from 'react-bootstrap-icons'
import FluffPic from '../components/browse/FluffPic'
import Footer from '../components/Footer'

const favorites = () => {
    const router = useRouter()
    const [favorites, setFavorites] = useState([]);
    const [currentId, setCurrentId] = useState(router.query.id);
    const [currentFluff, setCurrentFluff] = useState([]);

    // console.log(router.query.id, "Query Value");
    console.log(favorites[0], "Highlight Fav");

    // router.query.id ? setCurrentId(router.query.id) : setCurrentId(favorites[0].id);

    //Get anything from local storage and set it to favs state when the component mounts
    useEffect(() => {
        setFavorites(store.get('favs'))
        const x = currentItem(currentId)
        setCurrentFluff(x)
        console.log(currentFluff, "Current fluff")

    }, [])
    //When the favs state changes, save it to local storage
    useEffect(() => {
        store.set('favs', favorites)
    }, [favorites])
    // When the currentId state changes, reload the component
    useEffect(() => {
        const item = currentItem(currentId)
        console.log(item, "Current Item");
    }, [currentId])

    const currentItem = (currId) => {
        const theItem = favorites.find(x => x.id === currId)
        return theItem;
    }

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

    return (
        <Box overflow="hidden" backgroundColor="purple.50" p="2" minHeight="100vh" className="container">
            <Head as="h1" size="2xl" mb="2">
                <title>Find a Floof | Your Favorites</title>
                <link rel="icon" href="/logoDog.svg" />
            </Head>
            <Header />
            <Box className="browse" minHeight="100vh">
                <Flex justifyContent="center" alignItems="center">
                    <Box className="picture">
                        {/* <FluffPic src={currentFluff.primary_photo_cropped.full} /> */}

                    </Box>
                    <Box className="info">
                        <p>This will be the information</p>
                    </Box>
                </Flex>
                <Flex flexDirection="column" alignItems="center">
                    <CurrentFavs key={favorites.id} deleteAllFavs={deleteAllFavs} setFavorites={setFavorites} deleteFromFavorites={deleteFromFavorites} favorites={favorites} />
                </Flex>
                <Center>

                    <Link display="flex" fontSize="sm" fontWeight="bold" padding={3} as="button" href="/" mt="24px" borderRadius={6} color="purple.700" backgroundColor="transparent"
                        _hover={{ backgroundColor: 'pink.500', transform: 'scale(1.08)', color: 'white', textDecoration: 'none', boxShadow: 'md' }}
                        textTransform="uppercase" size="sm" >
                        <Box as="span"><ArrowLeftCircle size={22} /></Box>&nbsp; Back to Browse
                    </Link>

                </Center>
            </Box>
            <Footer />
        </Box>
    )
}

export default favorites
