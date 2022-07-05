import { MenuItem, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Categories from "../../Data/Categories"
import "./Home.css";
import ErrorMessage from "../../../Component/ErrorMessage/ErrorMessage";

function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}> Quiz Settings</span>

        <div className="setting_select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

          <TextField
            style={{ marginBottom: 25, width: 250 }}
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <TextField
            style={{ marginBottom: 25, width: 250 }}
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <br />
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30, width: 250 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <br />
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 250 }}
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  );
}

export default Home;
