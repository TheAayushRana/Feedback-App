import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import FeedbackData from "./Data/FeedbackData";
import Footer from "./Components/Footer";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteItem = (id) => {
    if (!window.alert("Confirm if you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); // it will generate random id
    setFeedback([newFeedback, ...feedback]);
    // feedback.push(newFeedback); //state is immutable so we can't use push method
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteItem} />
      </div>
      <Footer />
    </>
  );
}

export default App;
