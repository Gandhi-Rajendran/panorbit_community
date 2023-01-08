import { useEffect, useState } from "react";
import { Avatar, Icon, ListItem } from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { UseFetchAll } from "../../utils/fetch";
import { generateRandomNumbers } from "../../utils/helper";
import Message from "../message";
import {
  ChatContainer,
  ChatHeader,
  ChatItem,
  ChatSection,
  IconSection,
  IconWrapper,
  StatusIcon,
} from "./chats.styled";

const Chats = ({ activeUserId }) => {
  const URL = process.env.REACT_APP_USERS_API;
  const { users, loading, error } = UseFetchAll(URL);
  const [isChat, setIsChat] = useState(false);
  const [onlineUser, setOnlineUser] = useState(null);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMessage, setIsMessage] = useState(null);

  const onModalMinimizeHandler = () => {
    setIsMinimize(!isMinimize);
  };

  const onMsgCloseHandler = () => {
    setIsMessage(null);
    setIsMinimize(false);
  };

  useEffect(() => {
    setOnlineUser(generateRandomNumbers(activeUserId));
  }, [activeUserId]);

  const onChatModalHandler = () => {
    setIsChat(!isChat);
  };

  return (
    <>
      <ChatContainer>
        <ChatHeader>
          <IconSection>
            <Icon>
              <ModeCommentOutlinedIcon />
            </Icon>
            Chats
          </IconSection>
          <IconWrapper onClick={onChatModalHandler}>
            <Icon>
              {isChat ? (
                <KeyboardArrowDownOutlinedIcon />
              ) : (
                <KeyboardArrowUpOutlinedIcon />
              )}
            </Icon>
          </IconWrapper>
        </ChatHeader>
        <ChatSection open={isChat ? 1 : 0}>
          {loading ? "Loading" : null}
          {error ? { error } : null}
          {users?.map((user) => (
            <ChatItem key={user.id}>
              <ListItem
                onClick={() => {
                  setIsMinimize(true);
                  setIsMessage(user);
                }}
              >
                <Avatar src={user.profilepicture} alt={user.name} />
                {user.name}
              </ListItem>
              <StatusIcon
                activeuser={onlineUser?.includes(user.id) ? 1 : 0}
              ></StatusIcon>
            </ChatItem>
          ))}
        </ChatSection>
      </ChatContainer>
      <Message
        {...{
          isMinimize,
          isMessage,
          onModalMinimizeHandler,
          onMsgCloseHandler,
        }}
      />
    </>
  );
};

export default Chats;
