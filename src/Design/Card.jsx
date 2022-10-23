import React from "react";
import "../index.css";

export default function Card({ children, reverse }) {
  // conditional class
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  // conditional styling
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "#141425" : "white",
        color: reverse ? "white" : "#141425",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};
