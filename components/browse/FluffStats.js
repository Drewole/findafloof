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
            <Table w={{ base: "90vw", md: "70vw", lg: "46vw" }} border="1px" borderRadius={35} borderColor="blackAlpha.200" variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Quick Overview</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Age</Td>
                        <Td isNumeric>11 years</Td>
                    </Tr>
                    <Tr>
                        <Td>Weight</Td>
                        <Td>12 Pounds</Td>
                    </Tr>
                    <Tr>
                        <Td>Breed</Td>
                        <Td>Labrador</Td>
                    </Tr>
                    <Tr>
                        <Td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi commodi quis officiis rem dolorem dolorum! Dignissimos itaque deserunt dolor vitae doloribus culpa nihil deleniti repellendus. Maiores cum excepturi nesciunt.</Td>

                    </Tr>
                </Tbody>
            </Table>
        </Center>
    )
}

export default FluffStats
