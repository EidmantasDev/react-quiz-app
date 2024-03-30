import { useCallback, useState } from 'react';
import QUESTIONS from '../../questions';
import quizComplete from '../../assets/quiz-complete.png';
import Question from '../Question/Question';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizComplete} alt='Quiz complete' />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <div id='question'>
        <Question
          key={activeQuestionIndex}
          questionIndex={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </div>
  );
}
