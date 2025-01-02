import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  userMe: Set<string>;
}

const initialState: IInitialState = {
  userMe: new Set(),
};

const userMeSlice = createSlice({
  name: "userMe",
  initialState,
  reducers: {
    setUserMe: (state: any, action: PayloadAction<any>) => {
      state.userMe = action.payload;
    },
  },
});

export const { setUserMe } = userMeSlice.actions;
export default userMeSlice.reducer;
