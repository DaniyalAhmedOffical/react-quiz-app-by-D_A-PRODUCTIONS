import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Header/Fooder/Fooder";
import Header from "./Component/Header/Header";
import Home from "./Component/Pages/Home/Home";
import Quiz from "./Component/Pages/Quiz/Quiz";
import Result from "./Component/Pages/Result/Result";
import { useState } from "react";
import axios from "axios"
function App() {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
    console.log(data);
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./ques1.png" }}>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          ></Route>
          <Route
            path="/quiz"
            exact
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route path="/result" exact element={<Result />}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
