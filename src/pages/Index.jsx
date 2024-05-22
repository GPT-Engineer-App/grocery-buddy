import { Container, Text, VStack, Heading, Input, Button, List, ListItem, IconButton, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Groceries Shopping List</Heading>
        <HStack width="100%">
          <Input 
            placeholder="Add a new item" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button onClick={addItem} colorScheme="teal">Add</Button>
        </HStack>
        <List spacing={3} width="100%">
          {items.map((item, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{item}</Text>
              <IconButton 
                aria-label="Remove item" 
                icon={<FaTrash />} 
                colorScheme="red" 
                onClick={() => removeItem(index)} 
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;