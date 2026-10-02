import { BrowserRouter, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import StructuredData from "./components/common/StructuredData";
import Loader from "./components/common/Loader";
import ScrollToTop from "./components/common/ScrollToTop";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";

import AppRoutes from "./routes/AppRoutes";


function AppContent() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      <Loader />

      {!isAdminRoute && <Header />}

      <main>
        <AppRoutes />
      </main>

      {!isAdminRoute && <FloatingActions />}
      {!isAdminRoute && <Footer />}
    </>
  );
}


function App() {
  return (
    <HelmetProvider>
      <StructuredData />

      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;