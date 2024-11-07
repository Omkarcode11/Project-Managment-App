// app/store/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers/taskSlice";

const store = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV != "production",
  });

const rootReducer = combineReducers({
  task: taskReducer,
});

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;

export default store();
