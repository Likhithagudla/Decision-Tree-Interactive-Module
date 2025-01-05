import React, { useState } from 'react';

const CreateTreeForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure question and answer are not empty
    if (!question.trim() || !answer.trim()) {
      alert('Both question and answer are required!');
      return;
    }

    // Call the onAddQuestion function to add the new question
    onAddQuestion({ question, answer });

    // Clear the input fields after submission
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter a question"
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter answer"
      />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default CreateTreeForm;
