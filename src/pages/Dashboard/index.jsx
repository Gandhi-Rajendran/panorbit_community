import Navbar from "../../components/navbar";
import Profile from "../profile";
import { DashboardContainer } from "./dashboard.styled";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <Profile />
    </DashboardContainer>
  );
};

export default Dashboard;
