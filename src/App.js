import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import AboutIconLinking from "./Components/AboutIconLinking";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLinking />
        </div>
        <Footer />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
