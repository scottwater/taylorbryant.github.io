import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

/* Assets */
import "./index.css";

/* Layout */
import Header from "../components/Header";
import Footer from "../components/Footer";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Helmet
      title="Taylor Bryant - Front-end Developer"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />

    <Header />

    <div className="flex flex-1 mx-auto px-8 py-16 text-grey-darkest">
      {children()}
    </div>

    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
