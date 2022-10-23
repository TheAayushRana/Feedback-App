import React from "react";
import Card from "../Design/Card";
import { FaTrash } from "react-icons/fa";

export default function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTrash color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
