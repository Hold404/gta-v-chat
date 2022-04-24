import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/messageSlice';

const ChatForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const cmds = useSelector((state) => state.api.commands);

  const addMsg = (message) => {
    if (message !== '') {
      cmds.forEach((cmd) => {
        if (message == cmd) {
          // command dispatching
          alert(message);
        }
      });

      dispatch(addMessage(message));

      setText('');
    }
  }

  return(
    <div className='chat-form'>
      <input 
        type="text" 
        className="chat__input" 
        placeholder="Введите текст сообщения..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => addMsg(text)}>Отправить</button>
    </div>
  )
}

export default ChatForm;