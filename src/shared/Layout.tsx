import { Outlet } from "react-router-dom";
import Header from "../components/logic/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
