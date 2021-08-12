import { Box, Wrap, WrapItem, Center, AspectRatio, Image, IconButton, transition } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { XCircleFill } from 'react-bootstrap-icons'
import DeleteModal from './DeleteModal'
const CurrentFavs = ({ setFavorites, favorites, deleteFromFavorites, deleteAllFavs }) => {
    // useEffect(() => {

    // }, [favorites]);
    return (

        <Wrap justify="center" p={5} mb={5} mt={10} alignItems="flex-start" spacing="20px" background="blackAlpha.50" boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)" w={{ base: "96vw", md: "88vw", lg: "82vw" }} border="2px" borderRadius="2xl" borderColor="blackAlpha.100">

            {favorites.length !== 0 ?
                favorites.map((favorite) => (

                    <WrapItem key={favorite.id}>
                        <Link
                            href={{
                                pathname: '/favorites',
                                query: { id: favorite.id },
                            }}
                        >
                            <a>
                                <AspectRatio minW={210} maxW={250} ratio="1">
                                    <Image
                                        src={favorite.primary_photo_cropped.full}
                                        transform="scale(1)"
                                        transition="transform 0.2s"
                                        objectFit="cover"
                                        loading="lazy"
                                        alt={favorite.name}
                                        borderRadius={12}
                                        fallbackSrc="https://via.placeholder.com/175"
                                        boxShadow="lg"
                                        _hover={{ transform: 'scale(1.1)', }}
                                    />
                                </AspectRatio>
                            </a>
                        </Link>

                        <IconButton id={favorite.id} onClick={deleteFromFavorites} colorScheme="blackAlpha" backgroundColor="blackAlpha.500" padding="sm" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0" aria-label="Remove Item" icon={<XCircleFill size={20} pointerEvents="none" />} />

                    </WrapItem>

                ))

                :
                <Center><Box fontSize="sm" fontWeight="bold" textTransform="uppercase" textAlign="center" color="blackAlpha.500" as="p">Add some favorites</Box></Center>
            }
            {
                favorites.length !== 0 ?
                    <Box flexBasis="100%">
                        <Center><DeleteModal deleteAllFavs={deleteAllFavs} /></Center>
                    </Box>
                    :
                    null
            }
        </Wrap >

    )
}

export default CurrentFavs
