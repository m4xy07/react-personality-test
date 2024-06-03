import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Question from './components/Question';
import Results from './components/Results';
import UserForm from './components/UserForm';
import { UserProvider } from './components/UserContext';
import HashLoader from "react-spinners/HashLoader";

const questions = [
  "If you could have any superpower, what would it be?",
  "What kind of environment would you prefer to live in?",
  "What is your preferred method of transportation?",
  "What kind of problems would you want to solve as a superhero?",
  "What kind of costume would you wear?",
  "Would you prefer to work alone or in a team?",
  "What would be your kryptonite or weakness?",
  "What kind of secret base would you have?",
  "What would be your superhero catchphrase?",
  "What kind of sidekick would you have, if any?",
  "What would be your day job when you're not being a superhero?",
  "What kind of villains would you fight against?",
  "Would you reveal your identity to the world or keep it a secret?",
  "What kind of symbol or logo would represent you?",
  "What would be your backstory or origin story?"
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);


  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleUserFormSubmit = (name) => {
    setUserName(name);
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setLoading(true); // Start loading when all questions have been answered
      setTimeout(() => {
        setLoading(false); // Stop loading after 10 seconds
      }, 10000);
    }
  }, [currentQuestionIndex]);

if (loading) {
  return <HashLoader color={"cyan"} loading={true} size={50} />;
}

  return (
    <Router>
      <Header />
      <UserProvider value={{ name: userName, setName: setUserName }}>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/quiz" element={<Question handleAnswer={handleAnswer} totalQuestions={questions.length} currentQuestionIndex={currentQuestionIndex} />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;