import React from "react";
import PropTypes from "prop-types"; // impt

export default function Header({ title, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyle}>
      <h2>{title}</h2>
    </header>
  );
}
// If no props is passed to Header component then this default props will run
Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "pink",
};

// Proptypes tells what type of props to pass [type checking for props]
Header.propTypes = {
  title: PropTypes.string,
};
