/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./Shared-components/Layout";

import { lazy, Suspense, useEffect, useState } from "react";
import ChatBot from "./Pages/Chatbot/ChatBot";
import Error404 from "./Components/Error404";
import Spinner from "./Shared-components/Spinner";
const Home = lazy(() => import("./Components/Home"));
const DemandeDevis = lazy(() => import("./Components/DemandeDevis"));
const Dératisation = lazy(() => import("./Pages/Services/Dératisation"));
const Desinfection = lazy(() => import("./Pages/Services/Desinfection"));
const Désinsectisation = lazy(() =>
  import("./Pages/Services/Désinsectisation")
);
const Jardinage = lazy(() => import("./Pages/Services/Jardinage"));
const ServiceNetoyage = lazy(() => import("./Pages/Services/ServiceNetoyage"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
const GoodPoints = lazy(() => import("./Components/GoodPoints"));
const ContactUs = lazy(() => import("./Components/contactUs"));
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
      <ScrollToTop />
      <ChatBot />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={<Layout>{loading ? <Spinner /> : <Home />}</Layout>}
          />
          <Route
            path="/demandeDevis"
            element={
              <Layout>{loading ? <Spinner /> : <DemandeDevis />}</Layout>
            }
          />
          <Route
            path="/Dératisation"
            element={
              <Layout>{loading ? <Spinner /> : <Dératisation />}</Layout>
            }
          />
          <Route
            path="/Désinfection"
            element={
              <Layout>{loading ? <Spinner /> : <Desinfection />}</Layout>
            }
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
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
