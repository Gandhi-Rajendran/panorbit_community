import { useState } from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Posts from "./posts";
import Profile from "./profile";
import Gallery from "./gallery";
import Todo from "./todo";
import { DashboardContainer, Seperator, Wrapper } from "./dashboard.styled";
import { useParams } from "react-router-dom";
import { UseFetchById } from "../../utils/constants";
import Spinner from "../../components/spinner";

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
        <DashboardContainer container>
          <Navbar {...{ active, onActiveHandler }} />
          <Wrapper>
            <Header {...{ active, user }} />
            <Seperator flexItem />
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
