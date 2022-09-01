import FrameQue from "./components/FrameQue";
import QuestionBox from "./components/QuestionBox";
import React, { useEffect } from "react";
import MyStyle from "./components/Style";
import MessageBlock from "./components/MessageBlock";
import Heading from "./components/Heading";
const App = () => {
  useEffect(() => {
    const questions = {
      1: {
        Qnum: "1",
        Question: "How satisfied are you with our products? rate out of 5",
        select: "yes",
        options: ["1", "2", "3", "4", "5"],
      },
      2: {
        Qnum: "2",
        Question:
          "How fair are the prices compared to similar retailers? rate out of 5",
        select: "yes",
        options: ["1", "2", "3", "4", "5"],
      },
      3: {
        Qnum: "3",
        Question:
          "How satisfied are you with the value for money of your purchase? rate out of 5",
        select: "yes",
        options: ["1", "2", "3", "4", "5"],
      },
      4: {
        Qnum: "4",
        Question:
          "On a scale of 1-10 how would you recommend us to your friends and family? rate out of 10",
        select: "yes",
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
      5: {
        Qnum: "5",
        Question: "What could we do to improve our service?",
        select: "no",
        options: [],
      },
    };
    localStorage.setItem("Questions", JSON.stringify(questions));
  });
  return (
    <>
      <div style={{textAlign:"center",margin:"10px"}}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1632/1632670.png"
          width={80}
          height={80}
        />
      </div>
      <Heading message="Welcome! on our feedback page" />
      <div style={MyStyle.AppDiv}>
        <FrameQue id="1" />
      </div>
    </>
  );
};
export default App;
