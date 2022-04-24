import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  messages: [
    {id: 1, text: "Добро пожаловать на Test Roleplay"}
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