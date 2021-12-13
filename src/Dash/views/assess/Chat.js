import React,{useEffect} from "react";
import {API, graphqlOperation} from "aws-amplify"
import {createMessage} from "../../../graphql/mutations"
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
      {messages.map(({ id, user: messageUser, content }) => (
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
              {messageUser.slice(0, 2).toUpperCase()}
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
  const [state, stateSet] = React.useState({
    user: userId.first_name,
    content: "",
  });
  let subscript;
  // const [messages, setMessages] = React.useState([]);
  const postMessage = async (state)=>{
    await API.graphql(graphqlOperation(
            createMessage,{
              input:{
                content: state.content,
                user: state.user,
                userID: userId.id,
              }
            })).catch(e=>{
              console.log("Error in sending message", e);
            });}

  
  useEffect(() => {
    subscribeToChat(messages)    
    console.log("These are the messages in the Chat.js file", messages)
  }, [])

  function subscribeToChat(dt, subscript){
      subscript = API.graphql({
        query: subscriptions.onCreateMessage,
      }).subscribe({
        next: chat => {
         
        dt.push(chat.value.data.onCreateMessage) ;
        
        setMessages(dt)
        //upTeam.push(team.value.data.onCreateTeam)
        console.log("This is the updated chat1", dt);
        console.log("This is the updated chat2", chat.value.data.onCreateMessage);
        // setMessage(chat)
        }
      })
    }

  const onSend = () => {
    if (state.content.length > 0) {
      console.log("The user ID is::", userId);
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
                onSend();
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