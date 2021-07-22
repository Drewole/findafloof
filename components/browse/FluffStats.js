import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Box,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Collapse,
} from "@chakra-ui/react"
import { Search } from 'react-bootstrap-icons'

const FluffStats = (props) => {

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    // const children = (environment.children === 1) ? "Yes" : "No"
    // const cats = (environment.cats === 1) ? "Yes" : "No"
    // const dogs = (environment.dogs === 1) ? "Yes" : "No"
    return (

        <>
            <Collapse startingHeight={200} in={show}>
                <Table mt={5} mb={5} w={{ base: "90vw", md: "70vw", lg: "46vw" }} borderRadius="2xl" size="md" border="1px" borderColor="blackAlpha.200" variant="simple">
                    <TableCaption fontSize="md" textAlign="left" mb={10}>{props.description}</TableCaption>
                    <Thead>
                        <Tr backgroundColor="blackAlpha.100">
                            <Th>Quick Overview</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td fontWeight="600">Type</Td>
                            <Td>{props.type}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Age</Td>
                            <Td>{props.age}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Gender</Td>
                            <Td>{props.gender}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Size</Td>
                            <Td>{props.size}</Td>
                        </Tr>

                        <Tr>
                            <Td fontWeight="600">Distance</Td>
                            <Td>{props.distance}</Td>
                        </Tr>
                        {/* <Tr>
                            <Td fontWeight="600">Good with Children</Td>
                            <Td>{props.children}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Good with Cats</Td>
                            <Td>{props.cats}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Good with Dogs</Td>
                            <Td>{props.dogs}</Td>
                        </Tr> */}
                        <Tr>
                            <Td fontWeight="600">Petfinder ID</Td>
                            <Td>{props.id}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Petfinder Link</Td>
                            <Td>View on <a href={props.url}>Petfinder.com</a></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Collapse>
            <Button boxShadow="lg" colorScheme="pink" size="sm" onClick={handleToggle} mt="1rem">
                <Search color="white" />  <Box ml={1}>{show ? "Less" : "More"}</Box>
            </Button>

        </>
    )
}

export default FluffStats
