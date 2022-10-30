import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../Context/FeedbackContext";
import Spinner from "../Design/Spinner";

function FeedbackList() {
  // we have taken feedback data from FeedbackContext file using useContext
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h3>No Feedbacks Available</h3>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {!isLoading && (
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </>
  );
}

export default FeedbackList;
