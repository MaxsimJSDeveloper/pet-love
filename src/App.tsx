import { Suspense } from "react";
import Loader from "./components/ui/Loader";
import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout";
import HomePage from "./pages/HomePage";
import NoticesPage from "./pages/NoticesPage";
import OurFriendsPage from "./pages/OurFriendsPage";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />}/>
            <Route path="/friends" element={<OurFriendsPage />}></Route>
              
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
