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
    Container,
    Collapse,
    Button,
    Stack,
    Input,
    Box,
    Flex,
    Divider
} from "@chakra-ui/react"
import { FilterSquare, Search } from 'react-bootstrap-icons'

const FilterForm = () => {

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
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
            <Box mx="auto" w={{ base: "90vw", md: "70vw", lg: "54vw" }} >
                <Button _hover={{
                    cursor: 'pointer',
                    transform: 'scale(1.25)'
                }} outline="none" colorScheme="transparent" size="sm" onClick={handleToggle} mt="1rem">
                    <FilterSquare size={16} color="rgba(0,0,0,.4)" />  <Box color="blackAlpha.400" ml={1}>Filter Floofs</Box>
                </Button>
            </Box>
            <Center>
                <Collapse border="0px" startingHeight={50} className={show == true ? "" : "closed"} in={show}>
                    <FormControl mb={30} backgroundColor="whiteAlpha.600" borderWidth="1px" borderColor="blackAlpha.100" borderRadius={35} justifyContent="center" w={{ base: "90vw", md: "70vw", lg: "54vw" }} flexWrap="wrap" display="flex" alignItems="center">

                        <Box minWidth="300px" p={5}>
                            <Box textAlign="center" as="p">
                                Type
                            </Box>
                            <Divider />
                            <Flex alignItems="center" flexWrap="wrap" justifyContent="space-evenly">
                                <CheckboxGroup colorScheme="purple" id="type" defaultValue={["dog", "cat"]}>

                                    <Checkbox p={3} size="lg" value="dog" >
                                        Dogs
                                    </Checkbox>
                                    <Divider height={10} orientation="vertical" />

                                    <Checkbox p={3} size="lg" value="cat">
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
                        <Center mb={10} flexBasis="100%"><Button boxShadow="md" onClick={() => console.log("Search button clicked")} colorScheme="pink" fontSize="md" textTransform="uppercase"><Search /> &nbsp; Search</Button></Center>

                    </FormControl>
                </Collapse>

            </Center>

            <Box className="gradient"></Box>

        </div >
    )
}

export default FilterForm
