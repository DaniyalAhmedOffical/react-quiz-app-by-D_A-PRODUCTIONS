import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Result.css";

const Result = ({ name, score }) => {
  const history = useNavigate();
  const navtoHome = () => {
    history("/");
  };
  useEffect(() => {
    if (!name) {
      navtoHome();
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={navtoHome}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
