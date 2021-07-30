import { Box, Wrap, WrapItem, Container, Center, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { XCircleFill } from 'react-bootstrap-icons'
import Modal from './FavDeleteModal'

const CurrentFavs = ({ favorites, deleteFromFavorites }) => {
    console.log(favorites)
    return (
        <Wrap display="flex" justify="center" mb={5} mt={10} alignItems="center" p="5" background="blackAlpha.50" boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)" w={{ base: "90vw", md: "80vw", lg: "66vw" }} border="2px" borderRadius="2xl" borderColor="blackAlpha.100">

            {favorites ?
                favorites.map((favorite) => (
                    <WrapItem key={favorite.id}>
                        <Image
                            src={favorite.primary_photo_cropped.full} // Route of the image file
                            boxSize="175px"
                            objectFit="cover"
                            alt=""
                            borderRadius={12}
                            fallbackSrc="https://via.placeholder.com/175"
                            boxShadow="md"
                        />
                        <Button id={favorite.id} onClick={() => { deleteFromFavorites(favorite.id) }} colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                            <XCircleFill size={16} />
                        </Button>
                    </WrapItem>
                ))
                :
                <Center><Box textAlign="center" color="blackAlpha.500" as="p">Add some favorites</Box></Center>
            }

        </Wrap>

    )
}

export default CurrentFavs
