import { Outlet } from "react-router-dom";
import Header from "../components/logic/Header";

const Layout = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
