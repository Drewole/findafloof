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
    const address1 = props.current.contact.address.address1 ? replaceWithPlus(props.current.contact.address.address1) + ',' : '';
    const address2 = props.current.contact.address.address2 ? replaceWithPlus(props.current.contact.address.address2) + ',' : '';
    const city = props.current.contact.address.city ? replaceWithPlus(props.current.contact.address.city) + ',' : '';
    const state = replaceWithPlus(props.current.contact.address.state);
    const zip = replaceWithPlus(props.current.contact.address.postcode);

    const petLocation = `https://www.google.com/maps/place/${address1}+${address2}+${city}+${state}+${zip}`

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    const children = (props.current.environment.children === true) ? "Yes" : "No"
    const cats = (props.current.environment.cats === true) ? "Yes" : "No"
    const dogs = (props.current.environment.dogs === true) ? "Yes" : "No"
    const distanceRounded = Math.round(props.current.distance * 10) / 10
    return (

        <>
            <Button mt="24px" color="purple.700" backgroundColor="transparent"
                _hover={{ backgroundColor: 'pink.500', transform: 'scale(1.08)', color: 'white' }}
                textTransform="uppercase" size="sm" onClick={handleToggle} mt="1rem">
                <ChevronExpand />  <Box ml={1}>{show ? "Hide Details" : "More Details"}</Box>
            </Button>
            <Collapse border="0px" startingHeight={0} className={show == true ? "" : "closed"} in={show}>
                <Table boxShadow="md" overflow="hidden" backgroundColor="whiteAlpha.600" mt={5} mb={5} w={{ base: "90vw", md: "70vw", lg: "54vw" }} borderRadius="2xl" size="md" variant="simple">
                    <TableCaption fontSize="md" textAlign="left">{props.current.description}</TableCaption>
                    <Thead >
                        <Tr backgroundColor="#e8dff0">
                            <Th color="purple.700">Overview</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td fontWeight="600">Type</Td>
                            <Td>{props.current.type}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Primary Breed</Td>
                            <Td>{(props.current.breeds.primary !== null) ? props.current.breeds.primary : ""}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Secondary Breed</Td>
                            <Td>{(props.current.breeds.secondary !== null) ? props.current.breeds.secondary : "Not Specified"}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Mixed Breed</Td>
                            <Td>{(props.current.breeds.mixed === true) ? "Yes" : "No"}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Age</Td>
                            <Td>{props.current.age}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Gender</Td>
                            <Td>{props.current.gender}</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Size</Td>
                            <Td>{props.current.size}</Td>
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
                                <Box as="span"><Link isExternal color="pink.700" fontWeight="extrabold" textTransform="uppercase" href={props.current.url} isExternal>
                                    {props.current.id}
                                </Link></Box>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Collapse>
        </>
    )
}

export default FluffStats
