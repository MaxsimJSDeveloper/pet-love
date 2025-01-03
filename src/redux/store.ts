import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { newsReducer } from "./news/slice";
import { friendsReducer } from "./friends/slice";
import { usersReducer } from "./users/slice";
import { animalsReducer } from "./animals/slice";

const persistConfigUsers = {
  key: "users",
  storage,
  whitelist: ["token"],
};

const persistedUsersReducer = persistReducer(persistConfigUsers, usersReducer);

export const store = configureStore({
  reducer: {
    news: newsReducer,
    friends: friendsReducer,
    animals: animalsReducer,
    users: persistedUsersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
