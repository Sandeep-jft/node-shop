import { isEmpty } from "lodash";

const { createSlice } = require("@reduxjs/toolkit");

const user = localStorage.getItem("user");

const initialState = {
  user: user && !isEmpty(user) ? JSON.parse(user) : {},
  error: ''
};

const userReducer = createSlice({
  initialState,
  name: "user",
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.error = '';
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    failed: (state,action)=>{
        state.error = action.payload;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.error = '';
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = {};
      state.error = '';
      localStorage.removeItem("user");
    },
  },
});

export const { login, register, logout, failed } = userReducer.actions;

export default userReducer.reducer;
