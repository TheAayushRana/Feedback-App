import React from "react";
import { Link } from "react-router-dom";
import Card from "../Design/Card";

export default function AboutPage() {
  return (
    <Card>
      <h1>AboutPage</h1>
      <p style={{ marginTop: "10px" }}>
        This is a Feedback App used to give rating and reviews.
      </p>
      <p> Version: 1.0.0</p>
      <p style={{ marginTop: "30px" }}>
        <Link to="/"> Back to home </Link>
      </p>
    </Card>
  );
}
