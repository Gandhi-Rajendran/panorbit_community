import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import {
  AddressWrapper,
  BioWrapper,
  CompanyWrapper,
  Details,
  Item,
  Location,
  ProfileContainer,
  Section,
  Title,
} from "./profile.styled";

const Profile = ({ user }) => {
  return (
    <ProfileContainer direction="row">
      <Details>
        <BioWrapper>
          <Stack sx={{ alignItems: "center" }}>
            {/* <Avatar src={user.profilepicture} alt={user.name} /> */}
            <img src={user.profilepicture} alt={user.name} />
          </Stack>
          <Typography variant="p" component="p">
            {user.name}
          </Typography>
          <Item>
            <Title>Username :</Title> {user.name}
          </Item>
          <Item>
            <Title>E-mail :</Title> {user.email}
          </Item>
          <Item>
            <Title>Phone :</Title> {user.phone}
          </Item>
          <Item>
            <Title>Website :</Title> {user.website}
          </Item>
        </BioWrapper>
        <Divider flexItem middle={1} />
        <CompanyWrapper>
          <Typography variant="p" component="p">
            Company
          </Typography>
          <Item>
            <Title>Name :</Title> {user.company.name}
          </Item>
          <Item>
            <Title>CatchPhrase :</Title> {user.company.catchPhrase}
          </Item>
          <Item>
            <Title>Bs :</Title> {user.company.bs}
          </Item>
        </CompanyWrapper>
      </Details>
      <Divider orientation="vertical" flexItem />
      <AddressWrapper>
        <Typography variant="p" component="p">
          Address
        </Typography>
        <Section>
          <Item>
            <Title>Street :</Title> {user.address.street}
          </Item>
          <Item>
            <Title>Suite :</Title> {user.address.suite}
          </Item>
          <Item>
            <Title>City :</Title> {user.address.city}
          </Item>
          <Item>
            <Title>Zipcode :</Title> {user.address.zipcode}
          </Item>
          <Avatar variant="square" />
          <Location container>
            <Grid item>Lat:{user.address.geo.lat}</Grid>
            <Grid item>Long:{user.address.geo.lng}</Grid>
          </Location>

          {/* <Map /> */}
        </Section>
      </AddressWrapper>
    </ProfileContainer>
  );
};

export default Profile;
