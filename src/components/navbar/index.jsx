import { Divider, List } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Divide,
  IconWrapper,
  Item,
  Nav,
  NavbarContainer,
} from "./navbar.styled";

const Navbar = ({ active, onActiveHandler }) => {
  return (
    <NavbarContainer>
      <List>
        <Item>
          <Nav
            to="/dashboard/1"
            select={active === "profile" ? 1 : 0}
            onClick={() => onActiveHandler("profile")}
          >
            Profile
          </Nav>
          {active === "profile" ? (
            <IconWrapper>
              <KeyboardArrowRightIcon />
            </IconWrapper>
          ) : null}
        </Item>
        <Divide />
        <Item>
          <Nav
            to="/dashboard/1"
            select={active === "posts" ? 1 : 0}
            onClick={() => onActiveHandler("posts")}
          >
            Posts
          </Nav>
          {active === "posts" ? (
            <IconWrapper>
              <KeyboardArrowRightIcon />
            </IconWrapper>
          ) : null}
        </Item>
        <Divide />
        <Item>
          <Nav
            to="/dashboard/1"
            select={active === "gallery" ? 1 : 0}
            onClick={() => onActiveHandler("gallery")}
          >
            Gallery
          </Nav>
          {active === "gallery" ? (
            <IconWrapper>
              <KeyboardArrowRightIcon />
            </IconWrapper>
          ) : null}
        </Item>
        <Divide />
        <Item>
          <Nav
            to="/dashboard/1"
            select={active === "toDo" ? 1 : 0}
            onClick={() => onActiveHandler("toDo")}
          >
            ToDo
          </Nav>
          {active === "toDo" ? (
            <IconWrapper>
              <KeyboardArrowRightIcon />
            </IconWrapper>
          ) : null}
        </Item>
      </List>
    </NavbarContainer>
  );
};

export default Navbar;
