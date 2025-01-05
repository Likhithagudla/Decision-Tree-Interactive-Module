// AnimatedNode.js
import React from 'react';

const AnimatedNode = ({ node, onSelectAnswer }) => {
  return (
    <div className="node-container">
      <h2>{node.question}</h2> {/* Display current question */}

      {node.answers && (
        <div className="answers-container">
          {node.answers.map((answer, index) => (
            <button key={index} onClick={() => onSelectAnswer(answer)}>
              {answer.answer} {/* Display possible answers */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedNode;
