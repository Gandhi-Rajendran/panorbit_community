import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import Signout from "../signout";
import { HeaderContainer, Title, UserInfo } from "./header.styled";

const Header = ({ active, user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? user.id : null;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HeaderContainer container>
        <Title variant="h6" component="h6">
          {active}
        </Title>
        <UserInfo item onClick={handleClick}>
          <Avatar src={user.profilepicture} alt={user.name} /> {user.name}
        </UserInfo>
      </HeaderContainer>
      <Signout {...{ id, open, anchorEl, handleClose }} />
    </>
  );
};

export default Header;
