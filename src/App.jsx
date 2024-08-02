import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./Shared-components/Layout";
import Home from "./Components/Home";
import DemandeDevis from "./Components/DemandeDevis";
import Dératisation from "./Pages/Services/Dératisation";
import Désinsectisation from "./Pages/Services/Désinsectisation";
import Jardinage from "./Pages/Services/Jardinage";
import ServiceNetoyage from "./Pages/Services/ServiceNetoyage";
import AboutUs from "./Components/AboutUs";
import GoodPoints from "./Components/GoodPoints";
import ContactUs from "./Components/contactUs";
import { useEffect, useState } from "react";
import ChatBot from "./Pages/Chatbot/ChatBot";
import Error404 from "./Components/Error404";
import Spinner from "./Shared-components/Spinner";
import Desinfection from "./Pages/Services/Desinfection";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ChatBot />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Layout>{loading ? <Spinner /> : <Home />}</Layout>}
        />
        <Route
          path="/demandeDevis"
          element={<Layout>{loading ? <Spinner /> : <DemandeDevis />}</Layout>}
        />
        <Route
          path="/Dératisation"
          element={<Layout>{loading ? <Spinner /> : <Dératisation />}</Layout>}
        />
        <Route
          path="/Désinfection"
          element={<Layout>{loading ? <Spinner /> : <Desinfection />}</Layout>}
        />
        <Route
          path="/Désinsectisation"
          element={
            <Layout>{loading ? <Spinner /> : <Désinsectisation />}</Layout>
          }
        />
        <Route
          path="/Jardinage"
          element={<Layout>{loading ? <Spinner /> : <Jardinage />}</Layout>}
        />
        <Route
          path="/ServiceNetoyage"
          element={
            <Layout>{loading ? <Spinner /> : <ServiceNetoyage />}</Layout>
          }
        />
        <Route
          path="/aboutus"
          element={<Layout>{loading ? <Spinner /> : <AboutUs />}</Layout>}
        />
        <Route
          path="/nospointfort"
          element={<Layout>{loading ? <Spinner /> : <GoodPoints />}</Layout>}
        />
        <Route
          path="/contact"
          element={<Layout>{loading ? <Spinner /> : <ContactUs />}</Layout>}
        />{" "}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
