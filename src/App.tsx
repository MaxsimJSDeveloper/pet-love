import { Suspense } from "react";
import Loader from "./components/ui/Loader";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CampersCatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />}>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
