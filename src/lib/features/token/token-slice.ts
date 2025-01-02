import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  token: Set<string>;
}

const initialState: IInitialState = {
  token: new Set(),
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state: any, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
