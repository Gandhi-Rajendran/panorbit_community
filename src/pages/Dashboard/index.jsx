import { useState } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import { UseFetchById } from "../../utils/fetch";
import Spinner from "../../components/spinner";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Posts from "./posts";
import Profile from "./profile";
import Gallery from "./gallery";
import Todo from "./todo";
import { DashboardContainer, Wrapper } from "./dashboard.styled";

const Dashboard = () => {
  const [active, setActive] = useState("profile");

  const param = useParams();
  const URL = process.env.REACT_APP_USERS_API;
  const { user, loading, error } = UseFetchById(URL, param.userId);

  const onActiveHandler = (tab) => {
    setActive(tab);
  };

  return (
    <>
      <Spinner loading={loading} />
      {error ? <h1>{error}</h1> : null}
      {user ? (
        <DashboardContainer>
          <Navbar {...{ active, onActiveHandler }} />
          <Wrapper>
            <Header {...{ active, user }} />
            <Divider flexItem />
            {active === "profile" && <Profile {...{ user }} />}
            {active === "posts" && <Posts />}
            {active === "gallery" && <Gallery />}
            {active === "toDo" && <Todo />}
          </Wrapper>
        </DashboardContainer>
      ) : null}
    </>
  );
};

export default Dashboard;
