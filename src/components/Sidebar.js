import React from "react";
 // Add specific styles for Sidebar if needed

const Sidebar = ({ score, feedback }) => {
  return (
    <div className="Sidebar">
      <h2>Progress</h2>
      <p>Score: {score}</p>
      <p>{feedback}</p>
      <hr />
      <h3>Instructions:</h3>
      <ul>
        <li>Click on answers to traverse the decision tree.</li>
        <li>Drag and drop nodes to rearrange the tree.</li>
        <li>Track your score and aim for perfection!</li>
      </ul>
    </div>
  );
};

export default Sidebar;
