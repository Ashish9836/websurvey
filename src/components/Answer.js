import { useEffect, useState } from "react";
import MyStyle from "./Style";
const Answer = ({ Que, contents }) => {
  let [ans, SetAns] = useState(null);

  const Handler = (id) => {
    let Obj = JSON.parse(localStorage.getItem("Answers"));
    if (!Obj) Obj = {};
    if (Que in Obj && Obj[Que] == id) {
      delete Obj[Que];
    } else {
      Obj[Que] = id;
    }
    localStorage.setItem("Answers", JSON.stringify(Obj));
    if (Que in Obj) SetAns(Obj[Que]);
    else SetAns(null);
  };

  useEffect(() => {
    let Obj = JSON.parse(localStorage.getItem("Answers"));
    if (!Obj) Obj = {};
    if(Que in Obj){
      if(ans!=Obj[Que]) SetAns(Obj[Que]);
    }
    else {
      if(ans!=null) SetAns(null);
    }
  }, [ans, Que]);
  return (
    <div style={MyStyle.AnswerStyle}>
      {contents.map((e, index) => {
        return (
          <div
          key={index}
            style={
              ans && ans==(index+1)
                ? MyStyle.AnswerBlockGray
                : MyStyle.AnswerBlock
            }
            onClick={() => Handler(index + 1)}
          >
            {e}
          </div>
        );
      })}

    </div>
  );
};
export default Answer;
