import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from "@chakra-ui/react"
import store from 'store/dist/store.modern.min'
import { Trash } from 'react-bootstrap-icons'

function DeleteModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button fontSize="sm" color="blackAlpha.500" fontWeight="bold" textTransform="uppercase" onClick={onOpen}> <Trash /> Remove All</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Remove All Favorites?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure you want to remove all favorites?
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="pink" onClick={store.clearAll, onClose}><Trash /> Remove All</Button>
                        <Button onClick={onClose}><Trash /> Remove All</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteModal
