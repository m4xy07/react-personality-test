import React, { useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import { generateImage } from  '../api/imagegen';

const Results = () => {
  const { name, answers, setPersonality } = React.useContext(UserContext);
  const [imageUrl, setImageUrl] = useState(null);
  const [superheroName, setSuperheroName] = useState(null);
  const [personality, setLocalPersonality] = useState(null);

  useEffect(() => {
    const predefinedPrompt = "Create a superhero image using this descriptive analysis: ";
    const prompt = predefinedPrompt + answers.join(' ');

    generateImage(prompt)
      .then(setImageUrl)
      .catch(console.error);

    generateSuperheroNameAndPersonality(prompt)
      .then(result => {
        setSuperheroName(result.superheroName);
        setPersonality(result.personality);
      })
      .catch(console.error);
  }, [answers]);

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <p className="text-2xl font-bold">
        <strong>{name}</strong>, your superhero name is: {superheroName}
      </p>
      <p className="text-xl">
        Your personality is: {personality}
      </p>
      {imageUrl && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">And the superhero looks like this:</h2>
          <img src={imageUrl} alt="Superhero" />
        </div>
      )}
    </div>
  );
};

export default Results;