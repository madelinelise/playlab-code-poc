import { useState } from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard = ({ question, answer }: FlashcardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [animateClass, setAnimateClass] = useState('');

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    setAnimateClass('animate__animated animate__flipInY');
  };

  return (
    <article className={`flashcard ${animateClass}`}>
      <button
        className="flashcard__front"
        onClick={toggleAnswer}
        aria-expanded={showAnswer}
        aria-controls="flashcard-question"
      >
        {question}
      </button>
      {showAnswer && (
        <button
          className="flashcard__back"
          id="flashcard-answer"
          aria-expanded={showAnswer}
          onClick={toggleAnswer}
        >
          {answer}
        </button>
      )}
    </article>
  );
};

export default Flashcard;
