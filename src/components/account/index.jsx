import { Avatar, Divider, ListItem, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { PulseLoader } from "react-spinners";
import useFetch from "../../utils/constants";
import { AccountContainer, Header, Loader, Main } from "./account.styled";

const Accounts = () => {
  const navigate = useNavigate();
  const URL = "https://panorbit.in/api/users.json";
  const { datas: users, loading, error } = useFetch(URL);
  console.log(users, loading, error);

  const loginHandler = (id) => {
    console.log("id", id);
    // navigate
  };

  return (
    <AccountContainer>
      <Header variant="h6" component="h6">
        Select an account
      </Header>
      <Main>
        <Loader loading={loading} />
        {error && <h3>{error}</h3>}
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
  );
};

export default Accounts;
