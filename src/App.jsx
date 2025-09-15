import { BrowserRouter } from "react-router";
import { CustomRoutes } from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;
