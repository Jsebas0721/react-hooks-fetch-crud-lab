import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsList, setQuestionsList] = useState([]);
  
  function handleAddQuestion(newQuestion){
    console.log("new Question:", newQuestion )
    setQuestionsList([...questionsList, newQuestion]);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questionList={questionsList} onSetQuestionsList={setQuestionsList}/>}
    </main>
  );
}

export default App;
