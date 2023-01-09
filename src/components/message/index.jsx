import { useRef, useState } from "react";
import {
  Avatar,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import {
  HeaderSection,
  Input,
  MessageContainer,
  MessageHeader,
  Messages,
  MessageSection,
} from "./message.styled";

const userMessage = {
  1: ["lorem ipsum dolar sit amet 1", "lorem ipsum dolar 1", "lorem ipsum 1"],
  2: ["lorem ipsum dolar sit amet 2", "lorem ipsum dolar 2", "lorem ipsum 2"],
  3: ["lorem ipsum dolar sit amet 3", "lorem ipsum dolar 3", "lorem ipsum 3"],
  4: ["lorem ipsum dolar sit amet 4", "lorem ipsum dolar 4", "lorem ipsum 4"],
  5: ["lorem ipsum dolar sit amet 5", "lorem ipsum dolar 5", "lorem ipsum 5"],
  6: ["lorem ipsum dolar sit amet 6", "lorem ipsum dolar 6", "lorem ipsum 6"],
  7: ["lorem ipsum dolar sit amet 7", "lorem ipsum dolar 7", "lorem ipsum 7"],
  8: ["lorem ipsum dolar sit amet 8", "lorem ipsum dolar 8", "lorem ipsum 8"],
  9: ["lorem ipsum dolar sit amet 9", "lorem ipsum dolar 9", "lorem ipsum 9"],
  10: [
    "lorem ipsum dolar sit amet 10",
    "lorem ipsum dolar 10",
    "lorem ipsum 10",
  ],
};

const Message = (props) => {
  const {
    isMinimize,
    isMessage: user,
    onModalMinimizeHandler,
    onMsgCloseHandler,
  } = props;
  const [msg, setMsg] = useState("");
  const msgRef = useRef();

  const addMessageHandler = (userId, message) => {
    if (message !== "") {
      userMessage[userId].push(message);
      setMsg("");
    }
    msgRef.current.focus();
  };

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
      <MessageSection isminimize={isMinimize ? 1 : 0}>
        <Messages>
          {userMessage[user.id].map((msg, i) => (
            <Typography key={i}>{msg}</Typography>
          ))}
        </Messages>
        <Stack>
          <Input
            type="text"
            fullWidth
            ref={msgRef}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => addMessageHandler(user.id, msg)}
                    edge="end"
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </MessageSection>
    </MessageContainer>
  ) : null;
};

export default Message;
