import React,{useEffect} from "react";
import {API, graphqlOperation} from "aws-amplify"
import {createMessage, createChat, updateUser} from "../../../graphql/mutations"
import * as subscriptions from "../../../graphql/subscriptions"
// import {
//   ApolloClient,
//   InMemoryCache, 
//   ApolloProvider,
//   useSubscription,
//   useMutation,
//   gql,
// } from "@apollo/client";
// import { WebSocketLink } from "@apollo/client/link/ws";
import { Container, Row, Col, FormInput, Button } from "shards-react";

// const link = new WebSocketLink({
//   uri: `ws://localhost:3000/`,
//   options: {
//     reconnect: true,
//   },
// });

// const client = new ApolloClient({
//   link,
//   uri: "http://localhost:3000/",
//   cache: new InMemoryCache(),
// });
// const GET_MESSAGES = gql`
//   subscription {
 //     messages {
//       id
//       content
//       user
//     }
//   }
// `;

// const POST_MESSAGE = gql`
//   mutation($user: String!, $content: String!) {
 //     postMessage(user: $user, content: $content)
 //   }
 // +`;
 const newChat = async (now, userId) =>{
  let chat = await API.graphql(graphqlOperation(
       createChat,{
        input:{
        sessionStart: now,
        isClosed:false,
        userID: userId.id,
        }
      }
    ))
      return chat;
 }
 const Messages = (props) => {
   const { user , userId, messages} = props;
   console.log("mess",messages)
   console.log("userId",userId)
  // var data ={messages:[{
  //  id:0,
  //  user: "Stefano",
  //  content:"Hi"},
  //  { id:1,
  //  user: "Mark",
  //  content:"Hello"
  // },
  //  {
  //   id:2,
  //   user: "Stefano",
  //   content:"How are you?",
  //  },
  //  {
  //   id:3,
  //   user: "Mark",
  //   content:"I'm gud",
  //  }
  //  ]};
   
  console.log("This is the mess::", messages)
  if (!messages) {
    return null;
  }
  console.log("These are the messages in the Chat.js file", messages)
  return (
    <>
      {messages.map(({ id, user: messageUser, content, chatId }) => (
        <div
          style={{
            display: "flex",
            justifyContent: user === messageUser ? "flex-end" : "flex-start",
            paddingBottom: "1em",
          }}
        >
          {user !== messageUser && (
            <div
              style={{
                height: 50,
                width: 50,
                marginRight: "0.5em",
                border: "2px solid #e5e6ea",
                borderRadius: 25,
                textAlign: "center",
                fontSize: "18pt",
                paddingTop: 5,
              }}
            >
              {messageUser}
            </div>
          )}
          <div
            style={{
              background: user === messageUser ? "blue" : "#e5e6ea",
              color: user === messageUser ? "white" : "black",
              padding: "1em",
              borderRadius: "1em",
              maxWidth: "60%",
            }}
          >
            {content}
          </div>
        </div>
      ))}
    </>
  );
};

const Chat = (props) => {
  const {userId,setMessages, messages} =props;
  let chat;
  const [state, stateSet] = React.useState({
    user: userId.first_name,
    content: "",
    chatId: "",

  });
  // const [messages, setMessages] = React.useState([]);
  const postMessage = async (state)=>{
    console.log("136 chat id",state.chatId)
    await API.graphql(graphqlOperation(
            createMessage,{
              input:{
                content: state.content,
                seen:false,
                chatID: state.chatId
              }
            })).catch(e=>{
              console.log("Error in sending message", e);
            });}
const addchatId = async (userId, chat)=>{
  console.log("chat",chat)
  console.log("user",userId)
  stateSet({
      ...state,
      chatId: chat,
    })
  try{
await API.graphql(graphqlOperation(
          updateUser,{input:{
            id: userId.id,
            chatID: chat,
            _version: userId._version
          }}
        ))
      }
      catch(err){
        console.log("Update user err",err)
      }
}
  
  useEffect(() => {
    
    if(messages.length === 0){
      newChat(getCurrentDate,userId).then(response=>{
        console.log(response)
        chat = response.data.createChat.id;
        console.log("This is the chatID", chat)
      }).finally(()=>{
        addchatId(userId, chat);
      })
    }else{
      chat = messages[0].chatID
      stateSet({
      ...state,
      chatId: chat,
    })
    }
    subscribeToChat(messages)    
    console.log("These are the messages in the Chat.js file", messages)
  }, [])

  function subscribeToChat(dt){
      API.graphql({
        query: subscriptions.onCreateMessage,
      }).subscribe({
        next: message => {
         if(!dt){
           let dat=[];
           dat.push(message.value.data.onCreateMessage) ;
        setMessages(dt)
         }else{
        dt.push(message.value.data.onCreateMessage) ;
        setMessages(dt)}
        //upTeam.push(team.value.data.onCreateTeam)
        console.log("This is the updated chat1", dt);
        console.log("This is the updated chat2", message.value.data.onCreateMessage);
        // setMessage(chat)
        }
      })
    }
function getCurrentDate(){
   let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    console.log("current time", dateTime)
    return dateTime;
}
  const onSend = (userId, chat) => {
   
    if (state.content.length > 0) {
      console.log("The user ID is::", userId);
      console.log("The chat ID is::", chat);
      console.log("The state  is::",  state);
      postMessage(state);
    }
    stateSet({
      ...state,
      content: "",
    });
  };
  return (
    <Container>
      <Messages user={state.user} messages={messages} userId={userId} />
      <Row>
        <Col xs={2} style={{ padding: 0 }}>
          <FormInput
            label="User"
            value={state.user}
            onChange={(evt) =>
              stateSet({
                ...state,
                user: evt.target.value,
              })
            }
          />
        </Col>
        <Col xs={8}>
          <FormInput
            label="Content"
            value={state.content}
            onChange={(evt) =>
              stateSet({
                ...state,
                content: evt.target.value,
              })
            }
            onKeyUp={(evt) => {
              if (evt.keyCode === 13) {
                console.log("chat id onsend", chat)
                onSend(userId, chat);
              }
            }}
          />
        </Col>
        <Col xs={2} style={{ padding: 0 }}>
          <Button onClick={() => onSend()} style={{ width: "100%" }}>
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;