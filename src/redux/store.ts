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
import storage from "redux-persist/lib/storage"; // используем локальное хранилище браузера для сохранения состояния
import { newsReduser } from "./news/slice";

// Конфигурация для redux-persist
const persistConfig = {
  key: "root", // ключ для сохранения состояния
  storage, // использование локального хранилища
};

const persistedReducer = persistReducer(persistConfig, newsReduser); // оборачиваем редьюсер в persistReducer

export const store = configureStore({
  reducer: {
    news: persistedReducer, // применяем persistReducer к новостям
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // игнорируем специфичные действия redux-persist
      },
    }),
});

export const persistor = persistStore(store); // создаем persistor для восстановления состояния
