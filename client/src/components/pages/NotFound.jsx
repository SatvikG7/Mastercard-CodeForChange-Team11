import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <VStack spacing={6}>
        <Text
          fontSize="6xl"
          fontWeight="bold"
          color="gray.800"
          className="text-center">
          404
        </Text>
        <Text fontSize="2xl" color="gray.600" className="text-center">
          {"Oops! The page you're looking for doesn't exist."}
        </Text>
        <Button
          colorScheme="teal"
          onClick={() => navigate("/")}
          className="mt-4">
          Go Back Home
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;
