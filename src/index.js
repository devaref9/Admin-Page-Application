import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { fetchUsers } from "./features/users";
import { fetchPhotos } from "./features/photos";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(fetchUsers());
store.dispatch(fetchPhotos());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
