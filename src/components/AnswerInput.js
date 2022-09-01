import { useEffect, useState } from "react";
import MyStyle from "./Style";
const AnswerInput = (props) => {
  
  const { Que } = props;
  let [Answers, SetAnswers] = useState(null);
  let [val, SetVal] = useState("");
  const AnswerHandler = (e, Que) => {
    const obj = {...Answers};
    obj[Que] = e.target.value;
    SetAnswers(obj);
  };

  useEffect(() => {
    if (!Answers) {
        let takenFromLocal = JSON.parse(localStorage.getItem("Answers"));
        if (!takenFromLocal) {
          Answers = {};
        } else Answers = takenFromLocal;
      } else localStorage.setItem("Answers", JSON.stringify(Answers));
      if(Que in Answers){
        SetVal(Answers[Que]);
      }
      else SetVal("");
  }, [Answers]);

  return (
    <div>
      <input
        style={{
          ...MyStyle.AnswerBlock,
          border: "2px #cbd5e1 solid",
          margin: "14px",
          marginTop: "15px",
        }}
        placeholder="enter your answer here"
        value={val}
        onChange={(e) => AnswerHandler(e, Que)}
      />
    </div>
  );
};
export default AnswerInput;
