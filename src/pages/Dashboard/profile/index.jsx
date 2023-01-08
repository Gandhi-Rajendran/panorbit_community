import { Divider, Stack, Typography } from "@mui/material";
import Chats from "../../../components/chats";
import Map from "../../../components/map";
import SimpleMap from "../../../components/map";
import {
  AddressContainer,
  BioContainer,
  CompanyContainer,
  Details,
  Item,
  Location,
  MapContainer,
  ProfileContainer,
  Section,
  Title,
} from "./profile.styled";

const Profile = ({ user }) => {
  return (
    <ProfileContainer direction="row">
      <Details>
        <BioContainer>
          <Stack sx={{ alignItems: "center" }}>
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
        </BioContainer>
        <Divider flexItem middle={1} />
        <CompanyContainer>
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
        </CompanyContainer>
      </Details>
      <Divider orientation="vertical" flexItem />
      <AddressContainer>
        <Typography variant="p" component="p">
          Address :
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
          <MapContainer>
            <Map
              Lat={Number(user.address.geo.lat)}
              Lng={Number(user.address.geo.lng)}
            />
          </MapContainer>
          <Location>
            <Stack>Lat :</Stack> {user.address.geo.lat}
            <Stack>Long :</Stack> {user.address.geo.lng}
          </Location>
        </Section>
      </AddressContainer>
      <Chats activeUserId={user.id} />
    </ProfileContainer>
  );
};

export default Profile;

/* <SimpleMap Lat={user.address.geo.lat} Lng={user.address.geo.lat} /> */
