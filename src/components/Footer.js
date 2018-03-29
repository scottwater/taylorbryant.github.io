import React from "react";
import Link from "gatsby-link";

const Footer = () => {
  return (
    <footer className="bg-indigo-darker">
      <div className="flex justify-between max-w-xl mx-auto p-8 text-white">
        <p>Taylor Bryant</p>
        <ul className="flex list-reset">
          <li>GitHub</li>
          <li>Twitter</li>
          <li>CodePen</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;