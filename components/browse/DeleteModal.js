import React, { useEffect } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    ModalBody,
    ModalCloseButton,
    Button
} from "@chakra-ui/react"
import store from 'store/dist/store.modern.min'
import { Trash } from 'react-bootstrap-icons'

function DeleteModal({ favorites, setFavorites }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {

    }, [favorites]);
    // When the remove all button is clicked, need to set the state to remove all
    const handleRemoveAll = () => {
        const removeAll = []
        store.set('favs', removeAll)
        setFavorites(removeAll)
        console.log(favorites)

    }

    return (
        <>
            <Button size="sm" backgroundColor="transparent" fontSize="sm" color="blackAlpha.500" fontWeight="bold" textTransform="uppercase" onClick={onOpen}> <Trash /> &nbsp;Remove All</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Remove All Favorites?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure you want to remove all favorites?
                    </ModalBody>
                    <ModalFooter d="flex" justifyContent="space-evenly">
                        <Button colorScheme="pink" onClick={() => handleRemoveAll, onClose}><Trash color="white" />&nbsp; Remove All</Button>
                        <Button onClick={onClose}> No Thanks</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteModal
