import { Outlet } from "react-router-dom";
import Header from "../components/logic/Header/Header";

const Layout = () => {
  return (
    <div className="min-h-screen max-w-[375px] px-[20px] mt-[24px] mx-auto md:max-w-[768px] xl:min-w-[1280px]">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
