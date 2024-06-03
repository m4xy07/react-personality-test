import React, { useState } from 'react';

const Question = ({ question, onAnswer, totalQuestions, currentQuestionIndex }) => {
  const [inputValue, setInputValue] = useState('');

const handleAnswer = () => {
  onAnswer(inputValue);
  setInputValue('');
};

  const buttonText = currentQuestionIndex === totalQuestions - 1 ? 'Submit Quiz' : 'Next';

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <h2 className="text-2xl font-bold">{question}</h2>
      <div className="flex flex-wrap justify-center mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 pl-10 text-sm text-white"
        />
       <button
          onClick={handleAnswer}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Question;