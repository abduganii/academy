import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  fontSize: Set<string>;
}

const initialState: IInitialState = {
  fontSize: new Set(),
};

const fontSizeSlice = createSlice({
  name: "fontSize",
  initialState,
  reducers: {
    changeLike: (state: any, action: PayloadAction<any>) => {
      state.fontSize = action.payload;
    },
  },
});

export const { changeLike } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;
