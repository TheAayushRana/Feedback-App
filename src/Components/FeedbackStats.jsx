import React, { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate Rating average using Reduce Method

  // let average =
  //   feedback.reduce((acc, curr) => {
  //     return acc + curr.rating;
  //   }, 0) / feedback.length;

  // Calculate Rating average using Map Method
  let total = 0;
  feedback.map((item) => (total += item.rating));

  const average = (total / feedback.length).toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  );
}
