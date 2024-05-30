import css from "./Options.module.css";

const Options = ({ children, handleClick, handleReset, totalFeedback }) => {
  return (
    <>
      <button
        className={css.option}
        onClick={() => {
          handleClick("good");
        }}
      >
        Good: {children.good}
      </button>

      <button
        className={css.option}
        onClick={() => {
          handleClick("neutral");
        }}
      >
        Neutral: {children.neutral}
      </button>
      <button
        className={css.option}
        onClick={() => {
          handleClick("bad");
        }}
      >
        Bad: {children.bad}
      </button>

      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </>
  );
};

export default Options;
