import React, { useContext } from "react";
import Card from "../Design/Card";
import { FaTrash } from "react-icons/fa";
import FeedbackContext from "../Context/FeedbackContext";

export default function FeedbackItem({ item }) {
  const { deleteItem } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteItem(item.id)}>
        <FaTrash color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
