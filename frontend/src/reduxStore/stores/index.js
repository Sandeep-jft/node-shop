import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import productReducer from "../reducers/productReducer";

const logger = createLogger();

const store = configureStore({
  reducer: {
    productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
