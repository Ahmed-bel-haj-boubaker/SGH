import { Route, Routes } from "react-router-dom";
import { Layout } from "./Shared-components/Layout";
import Home from "./Components/Home";
import DemandeDevis from "./Components/DemandeDevis";
import Dératisation from "./Pages/Services/Dératisation";
import Désinfection from "./Pages/Services/Désinfection";
import Désinsectisation from "./Pages/Services/Désinsectisation";
import Jardinage from "./Pages/Services/Jardinage";
import ServiceNetoyage from "./Pages/Services/ServiceNetoyage";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
