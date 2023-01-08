import { List } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Divide,
  IconWrapper,
  Item,
  Nav,
  NavbarContainer,
} from "./navbar.styled";

const Navbar = ({ active, onActiveHandler }) => {
  const menus = [
    { id: 1, name: "Profile", value: "profile" },
    { id: 2, name: "Posts", value: "posts" },
    { id: 3, name: "Gallery", value: "gallery" },
    { id: 4, name: "ToDo", value: "ToDo" },
  ];
  return (
    <NavbarContainer>
      <List>
        {menus.map((menu) => (
          <div key={menu.id}>
            <Item>
              <Nav
                to="/dashboard/1"
                select={active === menu.value ? 1 : 0}
                onClick={() => onActiveHandler(menu.value)}
              >
                {menu.name}
              </Nav>
              {active === menu.value ? (
                <IconWrapper>
                  <KeyboardArrowRightIcon />
                </IconWrapper>
              ) : null}
            </Item>
            {menu.id !== menus.length ? <Divide /> : null}
          </div>
        ))}
      </List>
    </NavbarContainer>
  );
};

export default Navbar;
