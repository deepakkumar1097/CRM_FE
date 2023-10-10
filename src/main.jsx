import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/store";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App.jsx";
import "./styles/App.css";

const store = createStore(rootReducer, composeWithDevTools());

function AppWrapper() {
  useEffect(() => {
    // Check if user data is available in localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // If user data is available, dispatch the LOGIN action
    if (userData && isLoggedIn) {
      store.dispatch({ type: "LOGIN", payload: userData });
    }
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
