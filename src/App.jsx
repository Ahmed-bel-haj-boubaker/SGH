import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./Shared-components/Layout";
import Home from "./Components/Home";
import DemandeDevis from "./Components/DemandeDevis";
import Dératisation from "./Pages/Services/Dératisation";
import Désinfection from "./Pages/Services/Désinfection";
import Désinsectisation from "./Pages/Services/Désinsectisation";
import Jardinage from "./Pages/Services/Jardinage";
import ServiceNetoyage from "./Pages/Services/ServiceNetoyage";
import AboutUs from "./Components/AboutUs";
import GoodPoints from "./Components/GoodPoints";
import ContactUs from "./Components/contactUs";
import { useEffect } from "react";
import ChatBot from "./Pages/Chatbot/ChatBot";
import Error404 from "./Components/Error404";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <ChatBot />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/demandeDevis"
          element={
            <Layout>
              <DemandeDevis />
            </Layout>
          }
        />
        <Route
          path="/Dératisation"
          element={
            <Layout>
              <Dératisation />
            </Layout>
          }
        />
        <Route
          path="/Désinfection"
          element={
            <Layout>
              <Désinfection />
            </Layout>
          }
        />
        <Route
          path="/Désinsectisation"
          element={
            <Layout>
              <Désinsectisation />
            </Layout>
          }
        />
        <Route
          path="/Jardinage"
          element={
            <Layout>
              <Jardinage />
            </Layout>
          }
        />
        <Route
          path="/ServiceNetoyage"
          element={
            <Layout>
              <ServiceNetoyage />
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/nospointfort"
          element={
            <Layout>
              <GoodPoints />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />{" "}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
