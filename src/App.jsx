import { Provider } from "react-redux";
import "./App.css";
import { RoutesDef } from "./routes/Routes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RoutesDef />
      </PersistGate>
    </Provider>
  );
}

export default App;
