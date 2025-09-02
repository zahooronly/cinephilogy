import { Outlet } from "react-router";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
