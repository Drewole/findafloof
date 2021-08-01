import React from 'react'
import {
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Switch,
    Center,
    Stack,
    Input,
    Box,
    Flex,
    Divider
} from "@chakra-ui/react"

const FilterForm = () => {

    // Search Params - separate with a &
    // type=dog,cat
    // location=55437
    // limit=100
    // status=adoptable
    // good_with_children=1 bool
    // good_with_cats=1 bool
    // good_with_dogs=1 bool
    // age=baby,young,adult,senior

    return (
        <div>
            <Center>
                <Box as="h2">Filter Floofs</Box>
            </Center>
            <Center>

                <FormControl borderWidth="1px" borderColor="blackAlpha.100" borderRadius={35} justifyContent="center" w={{ base: "90vw", md: "70vw", lg: "54vw" }} flexWrap="wrap" display="flex" alignItems="center">

                    <Box minWidth="300px" p={5}>
                        <Box textAlign="center" as="p">
                            Type
                        </Box>
                        <Divider />
                        <Flex alignItems="center" flexWrap="wrap" justifyContent="space-evenly">
                            <CheckboxGroup id="type">

                                <Checkbox p={3} size="lg" colorScheme="purple" id="yesDogs" value="dog" defaultIsChecked>
                                    Dogs
                                </Checkbox>
                                <Checkbox p={3} size="lg" colorScheme="purple" id="yesCats" value="cat" defaultIsChecked>
                                    Cats
                                </Checkbox>
                            </CheckboxGroup>
                        </Flex>
                    </Box>
                    <Stack p={5} minWidth="300px" spacing={2}>
                        <Input borderWidth="2px" borderColor="blackAlpha.300" placeholder="Zipcode" size="md" />
                        <FormHelperText color="blackAlpha.800" fontSize="sm">Location</FormHelperText>
                    </Stack>
                    <Stack p={5} spacing={2} minWidth="300px">
                        <Box as="h3">Behavior</Box>
                        <Flex>
                            <Switch size="lg" colorScheme="purple" id="good-with-children" />
                            <FormLabel ml={2} htmlFor="good-with-children" mb="0">
                                Good With Children
                            </FormLabel>
                        </Flex>
                        <Flex>
                            <Switch size="lg" colorScheme="purple" id="good-with-cats" />
                            <FormLabel ml={2} htmlFor="good-with-cats" mb="0">
                                Good With Cats
                            </FormLabel>
                        </Flex>
                        <Flex>
                            <Switch size="lg" colorScheme="purple" id="good-with-dogs" />
                            <FormLabel ml={2} htmlFor="good-with-dogs" mb="0">
                                Good With Dogs
                            </FormLabel>
                        </Flex>

                    </Stack>

                    <Stack p={5} spacing={2} minWidth="300px">
                        <Box as="h3">Age</Box>
                        <Flex>
                            <Flex>
                                <Switch size="md" colorScheme="purple" id="baby" />
                                <FormLabel ml={2} htmlFor="baby" mb="0">
                                    Baby
                                </FormLabel>
                            </Flex>
                            <Flex>
                                <Switch size="md" colorScheme="purple" id="young" />
                                <FormLabel ml={2} htmlFor="young" mb="0">
                                    Young
                                </FormLabel>
                            </Flex>
                        </Flex>
                        <Flex>
                            <Flex>
                                <Switch size="md" colorScheme="purple" id="adult" />
                                <FormLabel ml={2} htmlFor="adult" mb="0">
                                    Adult
                                </FormLabel>
                            </Flex>
                            <Flex>
                                <Switch size="md" colorScheme="purple" id="senior" />
                                <FormLabel ml={2} htmlFor="senior" mb="0">
                                    Senior
                                </FormLabel>
                            </Flex>
                        </Flex>

                    </Stack>

                </FormControl>
            </Center>

        </div>
    )
}

export default FilterForm
