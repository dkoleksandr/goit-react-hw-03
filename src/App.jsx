import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setFeedback({ ...feedback, good: feedback.good + 1 });
        break;
      case "neutral":
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
        break;
      case "bad":
        setFeedback({ ...feedback, bad: feedback.bad + 1 });
        break;
    }
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        handleClick={updateFeedback}
        handleReset={resetFeedback}
        totalFeedback={totalFeedback}
      >
        {feedback}
      </Options>

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        ></Feedback>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
