import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const UserForm = () => {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
    window.history.pushState({}, '', '/quiz');
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 pt-6">
      <label htmlFor="name" className="block text-white">
        Enter your name:
      </label>
      <input
        type="text"
        id="name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        className="w-full p-2 pl-10 text-sm text-white mt-4"
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-5"
      >
        Start Quiz
      </button>
    </form>
  );
};

export default UserForm;