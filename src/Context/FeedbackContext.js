// first need to import createContext from react
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// then create variable using createContext
const FeedbackContext = createContext();

// as we need to wrap all components in app.js to FeedbackProvider so need to take children
// agar hum bina default ke export karte ha then import ke time { } use karna ha
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from feedback 1",
      rating: 5,
    },
    {
      id: 2,
      text: "This is from feedback 2",
      rating: 3,
    },
    {
      id: 3,
      text: "This is from feedback 3",
      rating: 4,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); // it will generate random id
    setFeedback([newFeedback, ...feedback]);
    // feedback.push(newFeedback); //state is immutable so we can't use push method
  };

  const deleteItem = (id) => {
    if (!window.alert("Confirm if you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    // value is for if we want to give someting to children
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteItem }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
