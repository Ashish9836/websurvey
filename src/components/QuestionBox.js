import React from "react";
import Answer from "./Answer";
import AnswerInput from "./AnswerInput";
import MyStyle from "./Style";

const QuestionBox = (props) => {
  const { Qnum, Question,select } = props;
  return (
    <div style={MyStyle.QuestionBlock}>
      <div style={MyStyle.queDiv}>
        <span style={MyStyle.number}>{Qnum}</span>
        <span>{` ${Question}`}</span>
      </div>
      {select=="yes"? (
        <Answer contents={[...props.options]} Que={Qnum} />
      ) : (
        <AnswerInput Que={Qnum} />
      )}
    </div>
  );
};

export default QuestionBox;
