import React, { useState } from "react";
import Button from "../Design/Button";
import Card from "../Design/Card";
import RatingSelect from "./RatingSelect";

export default function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

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
    handleAdd(newFeedback);
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
