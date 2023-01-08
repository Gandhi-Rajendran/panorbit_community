import { Avatar, Divider, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UseFetchAll } from "../../utils/fetch";
import Spinner from "../spinner";
import {
  Item,
  SignoutButton,
  SignoutContainer,
  UserGroupList,
  UserProfile,
} from "./signout.styled";

const Signout = ({ id, open, anchorEl, handleClose }) => {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_USERS_API;
  const { users, loading, error } = UseFetchAll(URL);

  //Get active user
  const activeUser = users?.find((user) => user.id === id);
  //Get usergroup except active user.
  const userGroup = users?.filter((user) => user.id !== id);
  //Skip divider for last user.
  const noDivider = users ? users[users.length - 1].id : null;

  const onUserHandler = (userId) => {
    navigate(`/dashboard/${userId}`, { replace: true });
    handleClose();
  };

  const onSignoutHandler = () => {
    navigate("/", { replace: true });
    handleClose();
  };

  return (
    <>
      <Spinner loading={loading} />
      {error ? <h1>{error}</h1> : null}
      {activeUser ? (
        <SignoutContainer
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <UserProfile>
            <Avatar src={activeUser.profilepicture} alt={activeUser.name} />
            <Typography>{activeUser.name}</Typography>
            <Typography>{activeUser.email}</Typography>
          </UserProfile>
          <Divider />
          <UserGroupList>
            {userGroup.map((user) => (
              <Item
                variant="div"
                component="div"
                key={user.id}
                onClick={() => onUserHandler(user.id)}
              >
                <ListItem>
                  <Avatar src={user.profilepicture} alt={user.name} />
                  {user.name}
                </ListItem>
                {noDivider !== user.id ? <Divider flexItem /> : null}
              </Item>
            ))}
          </UserGroupList>
          <SignoutButton onClick={onSignoutHandler}>Sign out</SignoutButton>
        </SignoutContainer>
      ) : null}
    </>
  );
};

export default Signout;

// <Stack key={filtereduser.id}>
//   <List variant="div" component="div">
//     <Avatar src={filtereduser.profilepicture} alt={filtereduser.name} />
//     {filtereduser.name}
//   </List>
//   <Divider />
// </Stack>;
