import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
} from "@material-tailwind/react";
import React from "react";

// import { Container } from './styles';

function Header() {
  return (
    <header>
      <Navbar className="flex flex-row justify-center items-center space-x-48">
        <h1 className="text-grey-900 justify-self-start">Logo</h1>
        <Menu>
          <MenuHandler>
            <Button className="bg-teal-800 shadow-md drop-shadow-md" size="sm" color="green">
              Menu
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <a href="#">Projetos</a>
            </MenuItem>
            <MenuItem>
              <a href="#">Sobre</a>
            </MenuItem>
            <MenuItem>
              <a href="#">Contato</a>
            </MenuItem>
          </MenuList>
        </Menu>
      </Navbar>
    </header>
  );
}

export default Header;
