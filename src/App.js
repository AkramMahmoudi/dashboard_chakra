import React, { useState } from "react";
import { Box, Grid, Flex, VStack, Text, Table } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons"; // Hamburger icon for mobile menu

import { Button } from "./components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "./components/ui/drawer";

const items = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    price2: 999.99,
    price3: 999.99,
    price4: 999.99,
  },
  {
    id: 2,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 49.99,
    price2: 999.99,
    price3: 999.99,
    price4: 999.99,
  },
  {
    id: 3,
    name: "Desk Chair",
    category: "Furniture",
    price: 150.0,
    price2: 999.99,
    price3: 999.99,
    price4: 999.99,
  },
  {
    id: 4,
    name: "Smartphone",
    category: "Electronics",
    price: 799.99,
    price2: 999.99,
    price3: 999.99,
    price4: 999.99,
  },
  {
    id: 5,
    name: "Headphones",
    category: "Accessories",
    price: 199.99,
    price2: 999.99,
    price3: 999.99,
    price4: 999.99,
  },
];
function App() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "255px 1fr",
        }}
        templateRows="auto 1fr"
        minHeight="100vh"
        position="relative"
      >
        {/* Sidebar */}
        <Box
          bg="blackAlpha.800"
          color="white"
          p={5}
          display={{ base: "none", md: "block" }} // Show sidebar on medium and larger screens
          zIndex={10}
          position={{ base: "absolute", md: "relative" }}
          top={0}
          left={0}
          right={0}
          height="100vh"
          gridRow={{ base: "1/-1", md: "1 / span 2" }}
        >
          {/* desktop */}
          <VStack
            align="start"
            spacing={6}
            display={{ base: "none", md: "block" }}
            p={5}
            bg="blackAlpha.200"
            color="white"
            borderRadius="md"
          >
            <Text fontSize="lg" fontWeight="bold">
              Dashboard
            </Text>
            <Text fontSize="lg">Settings</Text>
            <Text fontSize="lg">Profile</Text>
            <Text fontSize="lg">Logout</Text>
          </VStack>
        </Box>

        {/* Header */}
        <Box
          bg="gray.100"
          p={4}
          boxShadow="sm"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          gridColumn={{ base: "1/-1", md: "2/3" }}
        >
          <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DrawerBackdrop display={{ md: "none" }} />
            <DrawerContent display={{ md: "none" }}>
              <DrawerHeader>
                <DrawerTitle>Dashboard</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <Flex
                  display={{ base: "flex", md: "none" }}
                  direction="column"
                  align="center" // Center horizontally
                  justify="flex-start" // Center vertically
                  height="100%"
                >
                  <VStack align="center" spacing={6}>
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      textAlign="center"
                      pb={4}
                    >
                      Dashboard
                    </Text>
                    <Text fontSize="lg" textAlign="center" pb={4}>
                      Settings
                    </Text>
                    <Text fontSize="lg" textAlign="center" pb={4}>
                      Profile
                    </Text>
                    <Text fontSize="lg" textAlign="center" pb={4}>
                      Logout
                    </Text>
                  </VStack>
                </Flex>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerActionTrigger>
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
          <Box display={{ base: "block", md: "none" }}>
            <Button
              leftIcon={<></>}
              bg="white" // White button background
              color="black" // Black text color
              boxShadow="md" // Adds a medium shadow
              _hover={{ bg: "gray.200" }} // Slightly darker background on hover
              _active={{ bg: "gray.300", transform: "scale(0.98)" }} // Active state styling
              onClick={() => setOpen(!open)} // Toggle sidebar visibility
            >
              Open Menu
            </Button>
          </Box>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            textAlign={"center"}
          >
            Welcome to the Dashboard
          </Text>
        </Box>
        {/* Main Content */}
        <Box p={5}>
          {/* <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            <Box bg="gray.200" p={5} borderRadius="md">
              <Text>Card 1</Text>
            </Box>
            <Box bg="gray.200" p={5} borderRadius="md">
              <Text>Card 2</Text>
            </Box>
            <Box bg="gray.200" p={5} borderRadius="md">
              <Text>Card 3</Text>
            </Box>
          </Grid> */}

          <Grid templateColumns="1fr" templateRows="auto 1fr" gap={6}>
            <Box gridRow="1 / 2">
              <p>search bar and add user button</p>
            </Box>
            <Box gridRow="2 / 3">
              <Flex justify="center" align="center">
                <Table.ScrollArea
                  borderWidth="1px"
                  maxW={{ base: "xs", md: "5xl" }}
                >
                  <Table.Root size="lg" variant="outline">
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeader minW={{ md: "300px" }}>
                          Product
                        </Table.ColumnHeader>
                        <Table.ColumnHeader minW={{ md: "300px" }}>
                          Category
                        </Table.ColumnHeader>
                        <Table.ColumnHeader
                          minW={{ md: "200px" }}
                          textAlign="center"
                        >
                          Price
                        </Table.ColumnHeader>
                        <Table.ColumnHeader
                          minW={{ md: "200px" }}
                          textAlign="center"
                        >
                          Price2
                        </Table.ColumnHeader>
                        <Table.ColumnHeader
                          minW={{ md: "200px" }}
                          textAlign="center"
                        >
                          Price3
                        </Table.ColumnHeader>
                        <Table.ColumnHeader
                          minW={{ md: "200px" }}
                          textAlign="center"
                        >
                          Price4
                        </Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {items.map((item) => (
                        <Table.Row key={item.id}>
                          <Table.Cell>{item.name}</Table.Cell>
                          <Table.Cell>{item.category}</Table.Cell>
                          <Table.Cell textAlign="center">
                            {item.price}
                          </Table.Cell>
                          <Table.Cell textAlign="center">
                            {item.price2}
                          </Table.Cell>
                          <Table.Cell textAlign="center">
                            {item.price3}
                          </Table.Cell>
                          <Table.Cell textAlign="center">
                            {item.price4}
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                </Table.ScrollArea>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default App;
