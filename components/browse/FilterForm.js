import React, { useState, useEffect } from 'react'
import {
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormLabel,
    Switch,
    Center,
    Collapse,
    Button,
    Stack,
    Input,
    Box,
    Flex,
    Divider
} from "@chakra-ui/react"
import store from 'store/dist/store.modern.min'
import { FilterSquare, Search } from 'react-bootstrap-icons'

const FilterForm = () => {

    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)

    const initialSearchPrefs = {
        dogs: true,
        cats: true,
        location: "",
        goodWithChildren: "",
        goodWithDogs: "",
        goodWithCats: "",
        baby: "",
        young: "",
        adult: true,
        senior: true
    }

    const [searchPrefs, setSearchPrefs] = useState(initialSearchPrefs)
    const updateField = e => {
        setSearchPrefs({
            ...searchPrefs,
            [e.target.name]: e.target.checked || e.target.value
        });
    };
    useEffect(() => {
        store.get("searchPrefs") ? setSearchPrefs(store.get("searchPrefs")) : "";
    }, [])

    useEffect(() => {

        store.set('searchPrefs', searchPrefs)
        console.log(searchPrefs, 'search prefs')
    }, [searchPrefs]);

    return (
        <div>
            <Center mb={2} >
                <Button _hover={{
                    cursor: 'pointer',
                    transform: 'scale(1.25)',
                    color: '#pink.700'
                }} _focus={{ outline: 'none' }} colorScheme="transparent" size="sm" onClick={handleToggle} mt="1rem">
                    <FilterSquare size={16} color="rgba(0,0,0,.4)" />  <Box color="blackAlpha.400" ml={1}>Filter Floofs</Box>
                </Button>
            </Center>
            <Center>
                <Collapse border="0px" startingHeight={0} className={show == true ? "" : "closed"} in={show}>

                    <FormControl boxShadow="md" mb={30} backgroundColor="whiteAlpha.600" borderWidth="1px" borderColor="blackAlpha.100" borderRadius={35} justifyContent="center" w={{ base: "90vw", md: "70vw", lg: "54vw" }} flexWrap="wrap" display="flex" alignItems="flex-start">

                        <Box minWidth="300px" p={5}>
                            <Box textAlign="center" as="p">
                                Include Animal Type
                            </Box>
                            <Divider />
                            <Flex alignItems="center" flexWrap="wrap" justifyContent="space-evenly">
                                <CheckboxGroup colorScheme="purple" id="type" >

                                    <Checkbox name="dogs" isChecked={searchPrefs.dogs} onChange={updateField} p={3} size="lg" >
                                        Dogs
                                    </Checkbox>
                                    <Divider height={10} orientation="vertical" />

                                    <Checkbox name="cats" isChecked={searchPrefs.cats} onChange={updateField} p={3} size="lg" >
                                        Cats
                                    </Checkbox>

                                </CheckboxGroup>
                            </Flex>
                            <Box as="p" fontSize="x-small" fontWeight="black" textAlign="center" textTransform="uppercase" color="blackAlpha.500">Unselect Both for All Animals</Box>
                        </Box>
                        <Stack p={5} minWidth="300px" spacing={2}>
                            <FormLabel ml={2} htmlFor="location" mb="0">
                                Location
                            </FormLabel>
                            <Input name="location" focusBorderColor="purple.300" maxLength={5} value={searchPrefs.location} onChange={updateField} borderWidth="2px" id="location" borderColor="blackAlpha.300" placeholder="Zipcode" size="md" />
                        </Stack>
                        <Stack p={5} spacing={2} minWidth="300px">
                            <Box as="h3">They Must Be...</Box>
                            <Flex>
                                <Switch name="goodWithChildren" isChecked={searchPrefs.goodWithChildren} onChange={updateField} size="lg" colorScheme="purple" id="good-with-children" />
                                <FormLabel ml={2} htmlFor="good-with-children" mb="0">
                                    Good With Children
                                </FormLabel>
                            </Flex>
                            <Flex>
                                <Switch name="goodWithCats" isChecked={searchPrefs.goodWithCats} onChange={updateField} size="lg" colorScheme="purple" id="good-with-cats" />
                                <FormLabel ml={2} htmlFor="good-with-cats" mb="0">
                                    Good With Cats
                                </FormLabel>
                            </Flex>
                            <Flex>
                                <Switch name="goodWithDogs" isChecked={searchPrefs.goodWithDogs} onChange={updateField} size="lg" colorScheme="purple" id="good-with-dogs" />
                                <FormLabel ml={2} htmlFor="good-with-dogs" mb="0">
                                    Good With Dogs
                                </FormLabel>
                            </Flex>

                        </Stack>

                        <Stack p={5} spacing={2} minWidth="300px">
                            <Box as="h3">Include Ages</Box>
                            <Flex>
                                <Flex>
                                    <Switch name="baby" isChecked={searchPrefs.baby} onChange={updateField} size="lg" colorScheme="purple" id="baby" />
                                    <FormLabel ml={2} htmlFor="baby" mb="0">
                                        Baby
                                    </FormLabel>
                                </Flex>
                                <Flex>
                                    <Switch name="young" isChecked={searchPrefs.young} onChange={updateField} size size="lg" colorScheme="purple" id="young" />
                                    <FormLabel ml={2} htmlFor="young" mb="0">
                                        Young
                                    </FormLabel>
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex>
                                    <Switch name="adult" isChecked={searchPrefs.adult} onChange={updateField} size size="lg" colorScheme="purple" id="adult" />
                                    <FormLabel ml={2} htmlFor="adult" mb="0">
                                        Adult
                                    </FormLabel>
                                </Flex>
                                <Flex>
                                    <Switch name="senior" isChecked={searchPrefs.senior} onChange={updateField} size size="lg" colorScheme="purple" id="senior" />
                                    <FormLabel ml={2} htmlFor="senior" mb="0">
                                        Senior
                                    </FormLabel>
                                </Flex>
                            </Flex>

                        </Stack>
                        <Divider />
                        <Center my={5} flexBasis="100%"><Button boxShadow="md" onClick={() => console.log("Search button clicked")} colorScheme="pink" fontSize="md" textTransform="uppercase"><Search /> &nbsp; Search</Button></Center>

                    </FormControl>
                </Collapse>

            </Center>

            {/* <Box className="gradient"></Box> */}

        </div >
    )
}

export default FilterForm
