import UserAccounts from "../../components/user-accounts";
import { Div, Div1, LoginContainer } from "./login.styled";

const Login = () => {
  return (
    <LoginContainer>
      {/* <Div></Div>
      <Div1></Div1> */}
      {/* <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="18%" y1="88%" x2="82%" y2="12%">
            <stop offset="5%" stop-color="#702cc8"></stop>
            <stop offset="95%" stop-color="#335ec8"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 84.46889952153109,308.2870813397129 168.93779904306217,266.57416267942585 277,259 C 385.06220095693783,251.42583732057417 516.7177033492824,277.99043062200957 617,335 C 717.2822966507176,392.00956937799043 786.1913875598086,479.46411483253587 863,457 C 939.8086124401914,434.53588516746413 1024.5167464114834,302.1531100478469 1122,266 C 1219.4832535885166,229.84688995215308 1329.7416267942583,289.92344497607655 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 350)"
        ></path>
      </svg> */}
      {/* <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="18%" y1="88%" x2="82%" y2="12%">
            <stop offset="5%" stopColor="#335ec8"></stop>
            <stop offset="95%" stopColor="#702cc8"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 71.75128205128206,329.44102564102565 43.50256410256412,308.8820512820513 216,282 C 288.4974358974359,255.11794871794874 361.74102564102566,221.91282051282053 453,252 C 544.2589743589743,282.08717948717947 653.5333333333332,375.4666666666667 737,394 C 820.4666666666668,412.5333333333333 878.125641025641,356.22051282051285 959,309 C 1039.874358974359,261.77948717948715 1143.9641025641026,223.65128205128204 1228,232 C 1312.0358974358974,240.34871794871796 1376.0179487179487,295.174358974359 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 350)"
        ></path>
      </svg> */}
      <UserAccounts />
    </LoginContainer>
  );
};

export default Login;
