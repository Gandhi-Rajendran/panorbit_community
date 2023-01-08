import { Avatar, Divider, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UseFetchAll } from "../../utils/fetch";
import Spinner from "../spinner";
import { AccountContainer, Header, Main } from "./userAccounts.styled";

const UserAccounts = () => {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_USERS_API;
  const { users, loading, error } = UseFetchAll(URL);
  const loginHandler = (userId) => {
    navigate(`/dashboard/${userId}`);
  };

  return (
    <>
      <Spinner loading={loading} />
      {error ? <h1>{error}</h1> : null}
      <AccountContainer>
        <Header variant="h6" component="h6">
          Select an account
        </Header>
        <Main>
          {users?.map((user) => (
            <Typography
              variant="div"
              component="div"
              key={user.id}
              onClick={() => loginHandler(`${user.id}`)}
            >
              <ListItem>
                <Avatar src={user.profilepicture} alt={user.name} />
                {user.name}
              </ListItem>
              <Divider orientation="horizontal" flexItem />
            </Typography>
          ))}
        </Main>
      </AccountContainer>
    </>
  );
};

export default UserAccounts;
