import React, { useContext, useState, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import Button from "../Design/Button";
import Card from "../Design/Card";
import RatingSelect from "./RatingSelect";

export default function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setDisabledButton(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const textChangeHandler = (e) => {
    if (text === "") {
      setDisabledButton(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setDisabledButton(true);
      setMessage("Please Enter Min 10 Characters");
    } else {
      setDisabledButton(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newFeedback = {
      rating,
      text,
    };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setText("");
    setDisabledButton(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect rating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            style={{ width: "90%" }}
            onChange={textChangeHandler}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={disabledButton}>
            Send
          </Button>
        </div>
        <p
          style={{
            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          {message}
        </p>
      </form>
    </Card>
  );
}
