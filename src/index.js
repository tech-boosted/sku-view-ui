import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {Provider} from "react-redux";
import store from "redux/store";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>

    <BrowserRouter>
    <ChakraProvider>

      <App />
      </ChakraProvider>

    </BrowserRouter>
  </Provider>
);
