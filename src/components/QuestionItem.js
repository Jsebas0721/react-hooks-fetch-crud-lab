import React from "react";

function QuestionItem({ question, onDeleteQuestion, onChangeAnswer}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => onDeleteQuestion(question))
  }

  function handleChangeAnswer(e){

    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": e.target.value,
      }),
    })
    .then(resp => resp.json())
    .then(updatedAnswer => onChangeAnswer(updatedAnswer))
  }
  return (
    <li key={id}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChangeAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
