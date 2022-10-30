// first need to import createContext from react
import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// then create variable using createContext
const FeedbackContext = createContext();

// as we need to wrap all components in app.js to FeedbackProvider so need to take children
// agar hum bina default ke export karte ha then import ke time { } use karna ha
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    feedbackData();
  }, []);

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Fetching data from API

  const feedbackData = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // For Adding
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); // it will generate random id
    setFeedback([newFeedback, ...feedback]);
    // feedback.push(newFeedback); //state is immutable so we can't use push method
  };

  // For Deleting
  const deleteItem = (id) => {
    if (!window.alert("Confirm if you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // For Editing the feedback
  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    });
  };

  // For updating the feedback
  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...feedback, ...updateItem } : item
      )
    );
  };

  return (
    // value is for if we want to give someting to children
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteItem,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
