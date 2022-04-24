import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  messages: [
    {id: 1, text: "Спец. Администратор Alvaro_Hold зашел на сервер!"}
  ]
}

export const messageSlice = createSlice({
  name: 'msg',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages = [...state.messages, {id: Date.now(), text: action.payload}];
    }
  }
})

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;