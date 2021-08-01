import { Box, Wrap, WrapItem, Container, Center, Button, Image, IconButton } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { XCircleFill } from 'react-bootstrap-icons'
import Modal from './FavDeleteModal'

const CurrentFavs = ({ favorites, deleteFromFavorites }) => {
    useEffect(() => {

    }, [favorites]);
    return (
        <Wrap display="flex" justify="center" mb={5} mt={10} alignItems="flex-start" p="5" background="blackAlpha.50" boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)" w={{ base: "96vw", md: "88vw", lg: "82vw" }} border="2px" borderRadius="2xl" borderColor="blackAlpha.100">

            {favorites.length !== 0 ?
                favorites.map((favorite) => (
                    <WrapItem key={favorite.id}>
                        <Image
                            src={favorite.primary_photo_cropped.full} // Route of the image file
                            boxSize="175px"
                            objectFit="cover"
                            loading="lazy"
                            alt={favorite.name}
                            borderRadius={12}
                            fallbackSrc="https://via.placeholder.com/175"
                            boxShadow="md"
                        />

                        <IconButton id={favorite.id} onClick={deleteFromFavorites} colorScheme="blackAlpha" backgroundColor="blackAlpha.200" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0" aria-label="Remove Item" icon={<XCircleFill size={20} pointerEvents="none" />} />

                    </WrapItem>
                ))
                :
                <Center><Box fontSize="sm" fontWeight="bold" textTransform="uppercase" textAlign="center" color="blackAlpha.500" as="p">Add some favorites</Box></Center>
            }

        </Wrap>

    )
}

export default CurrentFavs
