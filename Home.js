import React, { useState } from "react";
import "./Home.css";
import QuizImage from "../quiz.svg";
import { MenuItem, TextField, Button } from "@mui/material";
import Categories from "../Data/Categories";
import { useNavigate } from "react-router";
import ErrorMessage from "../components/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("./quiz");
    }
  };
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            label="Enter your Quiz Mode Name"
            variant="outlined"
            style={{ marginBottom: 25 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select your category"
            variant="outlined"
            value={category}
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
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
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src={QuizImage} className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
