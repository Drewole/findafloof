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
import { ChevronExpand } from 'react-bootstrap-icons'

const FluffStats = (props) => {
    const replaceWithPlus = (str) => {
        if (str === null) {
            return
        } else { return str.replace(/\s/g, '+') }
    }
    const address1 = replaceWithPlus(props.props.contact.address.address1) + ',';
    const address2 = replaceWithPlus(props.props.contact.address.address2) + ',';
    const city = replaceWithPlus(props.props.contact.address.city);
    const state = replaceWithPlus(props.props.contact.address.state);
    const zip = replaceWithPlus(props.props.contact.address.postcode);

    const petLocation = `https://www.google.com/maps/place/${address1}+${address2}+${city},+${state}+${zip}`

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    const children = (props.props.environment.children === true) ? "Yes" : "No"
    const cats = (props.props.environment.cats === true) ? "Yes" : "No"
    const dogs = (props.props.environment.dogs === true) ? "Yes" : "No"
    const distanceRounded = Math.round(props.props.distance * 10) / 10
    return (

        <>
            <Collapse border="0px" startingHeight={250} className={show == true ? "" : "closed"} in={show}>
                <Table boxShadow="md" overflow="hidden" backgroundColor="whiteAlpha.600" mt={5} mb={5} w={{ base: "90vw", md: "70vw", lg: "54vw" }} borderRadius="2xl" size="md" variant="simple">
                    <TableCaption fontSize="md" textAlign="left">{props.props.description}</TableCaption>
                    <Thead >
                        <Tr backgroundColor="purple.100">
                            <Th color="purple.700">Overview</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td fontWeight="600">Type</Td>
                            <Td>{props.props.type}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Primary Breed</Td>
                            <Td>{(props.props.breeds.primary !== null) ? props.props.breeds.primary : ""}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Secondary Breed</Td>
                            <Td>{(props.props.breeds.secondary !== null) ? props.props.breeds.secondary : "Not Specified"}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Mixed Breed</Td>
                            <Td>{(props.props.breeds.mixed === true) ? "Yes" : "No"}</Td>
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
                            <Td>
                                <Link isExternal color="pink.700" fontWeight="extrabold" textTransform="uppercase" href={petLocation}>{distanceRounded}</Link>
                            </Td>
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
                            <Td>
                                <Box as="span"><Link isExternal color="pink.700" fontWeight="extrabold" textTransform="uppercase" href={props.props.url} isExternal>
                                    {props.props.id}
                                </Link></Box>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Collapse>
            <Box className="gradient"></Box>
            <Button boxShadow="lg" colorScheme="pink" size="sm" onClick={handleToggle} mt="1rem">
                <ChevronExpand color="white" />  <Box ml={1}>{show ? "Less" : "More"}</Box>
            </Button>

        </>
    )
}

export default FluffStats
