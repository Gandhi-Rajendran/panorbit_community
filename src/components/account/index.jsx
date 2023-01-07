import { Avatar, Divider, ListItem, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UseFetch } from "../../utils/constants";
import Spinner from "../spinner";
import { AccountContainer, Header, Main } from "./account.styled";

const Accounts = () => {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_USERS_API;
  const { datas: users, loading, error } = UseFetch(URL);
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
            <Stack key={user.id} onClick={() => loginHandler(`${user.id}`)}>
              <ListItem>
                <Avatar src={user.profilepicture} alt={user.name} />
                {user.name}
              </ListItem>
              <Divider />
            </Stack>
          ))}
        </Main>
      </AccountContainer>
    </>
  );
};

export default Accounts;

//  {!users?.length > 0 ? (
//         <Spinner loading={true} />
//       ) :
