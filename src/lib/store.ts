import { configureStore } from "@reduxjs/toolkit";
import { tokenReducer, todoReducer, userMeReducer } from "./features";

export const makeStore = () => {
  return configureStore({
    reducer: {
      fontSize: todoReducer,
      token: tokenReducer,
      userMe: userMeReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
