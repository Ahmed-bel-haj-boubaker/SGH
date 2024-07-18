import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ minHeight: "80vh", position: "relative" }}>
        <Navbar />
        <main
          style={{
            paddingTop: "140px",
            paddingBottom: "10px",
          }}
          className="bg-gray-50"
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
