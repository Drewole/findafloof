import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Center,
    Button,
    Collapse,
} from "@chakra-ui/react"

const FluffStats = () => {

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (

        <>
            <Collapse startingHeight={200} in={show}>
                <Table mt={5} mb={5} w={{ base: "90vw", md: "70vw", lg: "46vw" }} borderRadius="2xl" size="md" border="1px" borderColor="blackAlpha.200" variant="simple">
                    <TableCaption fontSize="md" textAlign="left" mb={10}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt esse, nisi saepe, itaque architecto modi praesentium animi reiciendis accusamus, sit illo maiores nemo iure velit. Possimus eveniet ipsa perspiciatis blanditiis?</TableCaption>
                    <Thead>
                        <Tr backgroundColor="blackAlpha.100">
                            <Th>Quick Overview</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td fontWeight="600">Age</Td>
                            <Td>11 years</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Weight</Td>
                            <Td>12 Pounds</Td>
                        </Tr>
                        <Tr>
                            <Td fontWeight="600">Breed</Td>
                            <Td>Labrador</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Collapse>
            <Button size="sm" onClick={handleToggle} mt="1rem">
                Show {show ? "Less" : "More"}
            </Button>
        </>
    )
}

export default FluffStats
