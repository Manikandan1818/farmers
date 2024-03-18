import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <main className="pt-16 min-h-[calc(100vh)]">
        <Outlet />
      </main>
    </>
  );
};

export default App;
