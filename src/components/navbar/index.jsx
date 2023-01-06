import { Divider } from "@mui/material";
import { IconBox, Nav, NavbarContainer } from "./navbar.styled";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Navbar = ({ active, onActiveHandler }) => {
  return (
    <NavbarContainer>
      <Nav
        to="/user/1"
        select={active === "profile" ? 1 : 0}
        onClick={() => onActiveHandler("profile")}
      >
        Profile
        <IconBox variant="span" component="span">
          <KeyboardArrowRightIcon />
        </IconBox>
      </Nav>
      <Divider />
      <Nav
        to="/user/1"
        select={active === "posts" ? 1 : 0}
        onClick={() => onActiveHandler("posts")}
      >
        Posts
      </Nav>
      <Nav
        to="/user/1"
        select={active === "gallery" ? 1 : 0}
        onClick={() => onActiveHandler("gallery")}
      >
        Gallery
      </Nav>
      <Nav
        to="/user/1"
        select={active === "todo" ? 1 : 0}
        onClick={() => onActiveHandler("todo")}
      >
        ToDo
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
