import React from "react";
import propTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <a href="/" className="navbar-brand">
        {branding}
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};

export default Header;