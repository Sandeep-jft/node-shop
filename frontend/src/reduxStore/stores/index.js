import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import productReducer from "../reducers/productReducer";
import cartReducer from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";

const logger = createLogger();

const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
