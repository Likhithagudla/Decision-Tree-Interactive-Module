export const calculateScore = (selectedAnswers) => {
    return selectedAnswers.reduce((score, answer) => {
      return score + (answer.isCorrect ? 10 : 0);
    }, 0);
  };
  