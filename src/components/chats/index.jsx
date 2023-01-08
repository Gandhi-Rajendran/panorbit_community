import { useEffect, useState } from "react";
import { Avatar, Icon, ListItem, Stack, Typography } from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { UseFetchAll } from "../../utils/fetch";
import { generateRandomNumbers } from "../../utils/helper";
import {
  ChatContainer,
  ChatHeader,
  ChatItem,
  ChatSection,
  IconSection,
} from "./chats.styled";

const Chats = ({ activeUserId }) => {
  const URL = process.env.REACT_APP_USERS_API;
  const { users, loading, error } = UseFetchAll(URL);

  const [isChat, setIsChat] = useState(false);
  const [onlineUser, setOnlineUser] = useState(null);

  useEffect(() => {
    setOnlineUser(generateRandomNumbers(activeUserId));
  }, [activeUserId]);

  console.log("onlineUser", activeUserId);
  console.log("onlineUser", onlineUser);

  const onChatModalHandler = () => {
    setIsChat(!isChat);
  };
  console.log("activecheck", onlineUser?.includes(1));
  return (
    <ChatContainer>
      <ChatHeader onClick={onChatModalHandler}>
        <IconSection>
          <Icon>
            <ModeCommentOutlinedIcon />
          </Icon>
          Chats
        </IconSection>
        <Stack>
          <Icon>
            {isChat ? (
              <KeyboardArrowDownOutlinedIcon />
            ) : (
              <KeyboardArrowUpOutlinedIcon />
            )}
          </Icon>
        </Stack>
      </ChatHeader>
      <ChatSection open={isChat ? 1 : 0}>
        {error ? <h1>{error}</h1> : null}
        {users?.map((user) => (
          <ChatItem key={user.id}>
            <ListItem activeuser={onlineUser?.includes(user.id) ? 1 : 0}>
              <Avatar src={user.profilepicture} alt={user.name} />
              {user.name}
            </ListItem>
            <Typography></Typography>
          </ChatItem>
        ))}
      </ChatSection>
    </ChatContainer>
  );
};

export default Chats;
