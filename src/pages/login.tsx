import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Center,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function SimpleCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, error, loading } = useAuth();

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={5} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Center>
          <Heading> Cadastro de videos</Heading>
        </Center>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("gray.100", "gray.900")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Inserir Email</FormLabel>
              <Input
                type="email"
                focusBorderColor="#51127f"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Inserir Senha</FormLabel>
              <Input
                type="password"
                focusBorderColor="#51127f"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"#51127f"}
                color={"white"}
                _hover={{
                  opacity: 0.9,
                }}
                onClick={() => signIn({ email, password })}
                isLoading={loading}
                loadingText="Entrando"
              >
                Fazer login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
