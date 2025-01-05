// DecisionNode.js
import React from 'react';

const DecisionNode = ({ node, onSelectAnswer }) => {
  // Check if there are answers, and map them accordingly
  if (!node.answers || node.answers.length === 0) {
    return <p>No answers available</p>;  // Handle edge case when no answers exist
  }

  return (
    <div className="decision-node">
      <p className="question-text">{node.question}</p>

      {/* Render answer buttons dynamically */}
      <div className="answers-container">
        {node.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(answer)}
            className="answer-button"
          >
            {answer.answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DecisionNode;
