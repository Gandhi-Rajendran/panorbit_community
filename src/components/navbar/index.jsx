import { Divider } from "@mui/material";
import { useState } from "react";
import { IconBox, Nav, NavbarContainer } from "./navbar.styled";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Navbar = () => {
  const [isActive, setIsActive] = useState("profile");
  return (
    <NavbarContainer>
      <Nav
        to="/user/1"
        select={isActive === "profile" ? 1 : 0}
        onClick={() => setIsActive("profile")}
      >
        Profile
        <IconBox variant="span" component="span">
          <KeyboardArrowRightIcon />
        </IconBox>
      </Nav>
      <Divider />
      <Nav
        to="/user/1"
        select={isActive === "posts" ? 1 : 0}
        onClick={() => setIsActive("posts")}
      >
        Posts
      </Nav>
      <Nav
        to="/user/1"
        select={isActive === "gallery" ? 1 : 0}
        onClick={() => setIsActive("gallery")}
      >
        Gallery
      </Nav>
      <Nav
        to="/user/1"
        select={isActive === "todo" ? 1 : 0}
        onClick={() => setIsActive("todo")}
      >
        ToDo
      </Nav>
      
    </NavbarContainer>
  );
};

export default Navbar;
