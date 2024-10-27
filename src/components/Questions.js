import SendQuestion from "./SendQuestion";

const Questions = () => {
  return (
    <div className="questionsContainer" id="questions">
      <div className="questions">
        <div className="questionsTitleContainer">
        <div className="questionsTitle">
          Остались <br /> вопросы?
        </div>
        <div className="questionsText">
          Оставьте заявку, мы свяжемся с вами в течении нескольких минут и
          обсудим вашу проблему
        </div>
        </div>
        <SendQuestion />
      </div>
    </div>
  );
};

export default Questions;
