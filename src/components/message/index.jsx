import { Avatar, Icon, Stack, Typography } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {
  HeaderSection,
  MessageContainer,
  MessageHeader,
  MessageSection,
} from "./message.styled";

const Message = (props) => {
  const {
    isMinimize,
    isMessage: user,
    onModalMinimizeHandler,
    onMsgCloseHandler,
  } = props;

  return user ? (
    <MessageContainer>
      <MessageHeader>
        <HeaderSection>
          <Avatar src={user.profilepicture} alt={user.name}></Avatar>
          {user.name}
        </HeaderSection>
        <HeaderSection>
          <Icon onClick={onModalMinimizeHandler}>
            {isMinimize ? (
              <KeyboardArrowDownOutlinedIcon />
            ) : (
              <KeyboardArrowUpOutlinedIcon />
            )}
          </Icon>
          <Icon onClick={onMsgCloseHandler}>
            <CloseIcon />
          </Icon>
        </HeaderSection>
      </MessageHeader>
      <MessageSection isminimize={isMinimize ? 1 : 0}></MessageSection>
    </MessageContainer>
  ) : null;
};

export default Message;
