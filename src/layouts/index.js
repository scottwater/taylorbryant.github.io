import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

/* Assets */
import "./index.css";

/* Layout */
import Header from "../components/Header";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Taylor Bryant - Front-end Developer"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
