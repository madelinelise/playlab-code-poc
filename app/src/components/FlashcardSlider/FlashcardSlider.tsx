import React, { useEffect, useRef } from 'react';
import Flashcard from "../Flashcard/Flashcard";

interface FlashcardSliderProps {
  data: {
    question: string;
    answer: string;
  }[];
}

function FlashcardSlider({ data }: FlashcardSliderProps) {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Splide when the component mounts
    const splide = new window.Splide(splideRef.current!, {
      type: 'carousel',
      perPage: 1,
      breakpoints: {
        600: {
          perPage: 1,
        },
      },
    });

    // Mount Splide
    splide.mount();

    // Destroy Splide when the component unmounts
    return () => {
      splide.destroy();
    };
  }, []); // Ensure this effect runs only once

  return (
    <div className="splide flashcard-slider" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list">
          {data.map((flashcard, index) => (
            <li className="splide__slide" key={index}>
              <Flashcard
                question={flashcard.question}
                answer={flashcard.answer}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FlashcardSlider;
