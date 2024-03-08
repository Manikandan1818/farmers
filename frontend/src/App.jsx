import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-[calc(100vh)]">
        <Outlet />
      </main>
    </>
  );
};

export default App;
