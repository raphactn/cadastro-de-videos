import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Text
} from "@chakra-ui/react";
import { MoonIcon, SettingsIcon, SunIcon } from "@chakra-ui/icons";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout } = useAuth();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
               <Text>Cadastro de videos</Text>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <MenuItem icon={<SettingsIcon fontSize="20px" />}>
                    Configurações
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={logout}
                    icon={<BiLogOut fontSize="25px" />}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
