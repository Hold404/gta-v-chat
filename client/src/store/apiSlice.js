import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  commands: []
}

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setCommands: (state, action) => {
      state.commands = action.payload;
    }
  }
})

export const { setCommands } = apiSlice.actions;
export default apiSlice.reducer;