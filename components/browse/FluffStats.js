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
    Link,
    Button,
    Collapse,
} from "@chakra-ui/react"
import { Search } from 'react-bootstrap-icons'

const FluffStats = (props) => {

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    const children = (props.props.environment.children === true) ? "Yes" : "No"
    const cats = (props.props.environment.cats === true) ? "Yes" : "No"
    const dogs = (props.props.environment.dogs === true) ? "Yes" : "No"
    return (

        <>
            <Collapse border="0px" startingHeight={220} className={show} in={show}>
                <Table overflow="hidden" backgroundColor="whiteAlpha.600" mt={5} mb={5} w={{ base: "90vw", md: "70vw", lg: "54vw" }} borderRadius="2xl" size="md" variant="simple">
                    <TableCaption fontSize="md" textAlign="left" mb={10}>{props.props.description} <Box as="span"><Link color="pink.700" fontWeight="extrabold" textTransform="uppercase" href={props.props.url} isExternal>
                        View More
                    </Link></Box></TableCaption>
                    <Thead >
                        <Tr backgroundColor="blackAlpha.100">
                            <Th>Overview</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td fontWeight="600">Type</Td>
                            <Td>{props.props.type}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Age</Td>
                            <Td>{props.props.age}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Gender</Td>
                            <Td>{props.props.gender}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Size</Td>
                            <Td>{props.props.size}</Td>
                        </Tr>

                        <Tr>
                            <Td fontWeight="600">Distance (Miles)</Td>
                            <Td>{props.props.distance}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Good with Children</Td>
                            <Td>{children}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Good with Cats</Td>
                            <Td>{cats}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Good with Dogs</Td>
                            <Td>{dogs}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Petfinder ID</Td>
                            <Td>{props.props.id}</Td>
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
