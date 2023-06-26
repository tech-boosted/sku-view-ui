import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {Provider} from "react-redux";
import store from "redux/store";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

let persistor = persistStore(store);
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </ChakraProvider>
    </BrowserRouter>
  </Provider>

);
