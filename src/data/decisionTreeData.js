// src/data/decisionTreeData.js
export const decisionTree = {
  question: "Is it sunny?",
  answers: [
    {
      answer: "Yes",
      nextQuestion: {
        question: "Do you want to go outside?",
        answers: [
          { answer: "Yes", result: "Enjoy your day outside!" },
          { answer: "No", result: "Stay indoors and relax!" },
        ],
      },
    },
    {
      answer: "No",
      nextQuestion: {
        question: "Do you have an umbrella?",
        answers: [
          { answer: "Yes", result: "Go outside with your umbrella!" },
          { answer: "No", result: "Better to stay indoors!" },
        ],
      },
    },
  ],
};
