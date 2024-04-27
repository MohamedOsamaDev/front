import appSlice from "../slices/appSlice";
import authSlice from "../slices/authSlice";
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
import storage from "./storage";
/* handle persists reducers */
// app reducer
const AppPersistedReducer = persistReducer(
  {
    key: "app",
    version: 1,
    storage,
  },
  appSlice
);
// auth reducer
const authPersistedReducer = persistReducer(
  {
    key: "auth",
    version: 1,
    storage,
  },
  authSlice
);
export const store = configureStore({
  reducer: {
    app: AppPersistedReducer,
    auth: authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
