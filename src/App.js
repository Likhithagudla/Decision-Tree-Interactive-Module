import React, { useState } from "react";
import { decisionTree } from "./data/decisionTreeData";
import TreeStructure from "./components/TreeStructure";
import DragAndDropTree from "./components/DragAndDropTree";
import Sidebar from "./components/Sidebar";
import { playAudio } from "./utils/audioManager";
import "./styles/App.css";

const App = () => {
  const [currentNode, setCurrentNode] = useState(decisionTree);
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (answer) => {
    playAudio(answer.isCorrect ? "/assets/audio/correct.mp3" : "/assets/audio/incorrect.mp3");
    setScore(score + (answer.isCorrect ? 10 : 0));
    setCurrentNode(answer.nextQuestion || decisionTree);
  };

  return (
    <div className="App">
      <h1>Interactive Decision Tree</h1>
      <TreeStructure nodes={currentNode.nodes} edges={currentNode.edges} />
      <DragAndDropTree />
      <Sidebar score={score} feedback={`Your score is ${score}`} />
    </div>
  );
};

export default App;
