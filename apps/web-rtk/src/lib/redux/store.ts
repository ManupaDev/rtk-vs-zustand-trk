import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import boardReducer from "./features/boardSlice";
import { Api } from "./api";
import { rtkQueryErrorLogger } from "./rtk-query-error-logger";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      board: boardReducer,
      [Api.reducerPath]: Api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(Api.middleware, rtkQueryErrorLogger),
  });
  setupListeners(store.dispatch);
  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
