import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import {
  Address,
  Details,
  ProfileContainer,
  Seperator,
} from "./profile.styled";

const Profile = ({ user }) => {
  return (
    <ProfileContainer direction="row">
      <Details>
        <Stack>
          <Avatar src={user.profilepicture} />
          {user.name}
        </Stack>
        <List sx={{ textAlign: "center" }}>
          <ListItem>
            {/* <Typography variant="span" component="span">
              UserName :
            </Typography> */}
            <Typography variant="span" component="span">
              {user.username}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="span" component="span">
              email :
            </Typography>
            <Typography variant="span" component="span">
              {user.email}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="span" component="span">
              Phone :
            </Typography>
            <Typography variant="span" component="span">
              {user.phone}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="span" component="span">
              Website :
            </Typography>
            <Typography variant="span" component="span">
              {user.website}
            </Typography>
          </ListItem>
        </List>
        <Divider flexItem middle />
        <Stack>
          <h1>Company</h1>
        </Stack>
      </Details>
      <Seperator orientation="vertical" flexItem />
      <Address>
        <h1>Map</h1>
      </Address>
    </ProfileContainer>
  );
};

export default Profile;
