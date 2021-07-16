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
} from "@chakra-ui/react"

const FluffStats = () => {
    return (
        <Center>
            <Table w={{ base: "90vw", md: "70vw", lg: "46vw" }} borderRadius={25} size="sm" border="1px" borderColor="blackAlpha.200" variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Quick Overview</Th>
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
        </Center>
    )
}

export default FluffStats
