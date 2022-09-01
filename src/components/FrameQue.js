import { useEffect, useState } from "react";
import MessageBlock from "./MessageBlock";
import QuestionBox from "./QuestionBox";
import MyStyle from "./Style";

const FrameQue = (props) => {
  const { id } = props;
  const [QnumState, SetQnumState] = useState(id);
  const [QueState, SetQueState] = useState(null);

  const [Compo, SetCompo] = useState(null);

  const valueCompo = <MessageBlock message="Form Submitted Successfully!" />;

  const QnumIncrementer = (id) => {
    let new_id = Number(id) + 1;
    if (QueState && new_id <= Object.keys(QueState).length) {
      SetQnumState(new_id);
    }
  };

  const QnumDecrementer = (id) => {
    let new_id = Number(id) - 1;
    if (new_id >= 1) {
      SetQnumState(new_id);
    }
  };

  const FormSubmission = () => {
    // form submited in localstarge with formSubmitted
    const submittedFormObject = JSON.parse(localStorage.getItem("Answers"));
    localStorage.setItem("formSubmitted", JSON.stringify(submittedFormObject));
    localStorage.removeItem("Answers");
    SetCompo(true);
  };

  const ButtonPart = (
    <div style={MyStyle.ButtonBlock}>
      {QueState && QnumState > 1 ? (
        <div
          style={{ ...MyStyle.Button, backgroundColor: "#e7e5e4" }}
          onClick={() => QnumDecrementer(QnumState)}
        >
          Previous
        </div>
      ) : (
        <></>
      )}
      {QueState && QnumState < Object.keys(QueState).length ? (
        <div
          style={{ ...MyStyle.Button, backgroundColor: "#fef2f2" }}
          onClick={() => QnumIncrementer(QnumState)}
        >
          Next
        </div>
      ) : (
        <div
          style={{ ...MyStyle.Button, backgroundColor: "#ecfccb" }}
          onClick={() => FormSubmission()}
        >
          Submit
        </div>
      )}
    </div>
  );

  const QuestionPart = !QueState ? (
    <div>No Questions found!</div>
  ) : (
    <QuestionBox
      Qnum={QueState[QnumState].Qnum}
      Question={QueState[QnumState].Question}
      select={QueState[QnumState].select}
      options={QueState[QnumState].options}
    />
  );

  useEffect(() => {
    if (!QueState) {
      const take = JSON.parse(localStorage.getItem("Questions"));
      if (take) SetQueState({ ...take });
    }
    if (Compo) {
      setTimeout(() => {
        SetCompo(false);
        SetQnumState(1);
      }, 2000);
    }
  }, [QueState, Compo,QnumState]);

  return (

    <div style={MyStyle.FrameBlock}>
      {!Compo ? (
        <>
          {QuestionPart}
          {ButtonPart}
        </>
      ) : (
        <></>
      )}

      {Compo ? valueCompo : <></>}
    </div>
  );
};
export default FrameQue;
