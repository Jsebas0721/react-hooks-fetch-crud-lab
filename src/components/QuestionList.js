import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionList, onSetQuestionsList}) {

  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then((resp) => resp.json())
    .then(questions => onSetQuestionsList(questions))
  },[]);

  function handleDeleteQuestion(deletedQuestion){
    console.log(deletedQuestion);
    const updatedList = questionList.filter(question => question.id !== deletedQuestion.id)
    onSetQuestionsList(updatedList);
  }

  function handleUpdateAnswer(updatedAnswer){
    console.log("New Updated Answer:", updatedAnswer);
    const updatedList = questionList.map((question) => {
      if(question.id === updatedAnswer.id){
        return updatedAnswer;
      }else{
        return question;
      }
    })
    onSetQuestionsList(updatedList);
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList.map(question => (
        <QuestionItem question={question} onDeleteQuestion={handleDeleteQuestion} onChangeAnswer={handleUpdateAnswer}/>
      ))}</ul>
    </section>
  );
}


export default QuestionList;
