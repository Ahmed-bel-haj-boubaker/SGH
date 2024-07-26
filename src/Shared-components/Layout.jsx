import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Navbar />
      <div style={{ minHeight: "80vh", position: "relative" }}>
        <main
          style={{
            paddingTop: "140px",
            paddingBottom: "10px",
          }}
        >
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export { Layout };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
