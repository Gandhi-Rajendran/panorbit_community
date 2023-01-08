import { Avatar, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  List,
  SignoutButton,
  SignoutContainer,
  UserProfile,
} from "./signout.styled";

const Signout = ({ id, open, anchorEl, handleClose }) => {
  console.log(id, open, anchorEl, handleClose);

  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    profilepicture:
      "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const navigate = useNavigate();
  const onSignoutHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <SignoutContainer
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
    >
      <UserProfile>
        <Avatar src={user.profilepicture} alt={user.name} />
        <Typography variant="p" component="p">
          {user.name}
        </Typography>
        <Typography variant="p" component="p">
          {user.email}
        </Typography>
      </UserProfile>
      <Divider />
      <List variant="div" component="div">
        <Avatar src={user.profilepicture} alt={user.name} />
        {user.name}
      </List>
      <Divider />
      <List variant="div" component="div">
        <Avatar src={user.profilepicture} alt={user.name} />
        {user.name}
      </List>
      <SignoutButton onClick={onSignoutHandler}>Sign out</SignoutButton>
    </SignoutContainer>
  );
};

export default Signout;
