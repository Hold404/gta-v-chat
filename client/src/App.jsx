import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCommands } from './store/apiSlice';
import ChatForm from './components/ChatForm';
import MessageList from './components/MessageList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/chat_api/commands')
      .then((res) => {
        dispatch(setCommands(res.data));
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <MessageList />
        <ChatForm />
      </div>
    </div>
  );
}

export default App;