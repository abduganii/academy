import {enableMapSet} from 'immer';

import {configureStore} from '@reduxjs/toolkit';

enableMapSet();

export const store = configureStore({
  reducer: {
    liked: ()=>{},
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
