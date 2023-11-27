import "./App.css";
import { ContextMenu, MenuContext } from "./context/menuContext";
import { RoutesDef } from "./routes/Routes";

function App() {
  return (
    <ContextMenu>
      <RoutesDef />
    </ContextMenu>
  );
}

export default App;
