import React, { useState, useEffect } from "react";

export default function App() {
  const questions = [
    {
      questionText: "I feel most energetic and focused:",
      answerOptions: [
        { answerText: "In the morning", updateScore: 5 },
        {
          answerText: "During the afternoon and early evening",
          updateScore: 3,
        },
        { answerText: "Late at night", updateScore: 2 },
      ],
    },
    {
      questionText: "When I walk, I tend to do it:",
      answerOptions: [
        { answerText: "Fairly fast, with long steps", updateScore: 4 },
        { answerText: "Fairly fast, with small steps", updateScore: 3 },
        {
          answerText: "Less fast, head up, looking the world in the face",
          updateScore: 6,
        },
        { answerText: "Less fast, head down", updateScore: 2 },
        { answerText: "Very Slowly", updateScore: 1 },
      ],
    },
    {
      questionText: "When you speak to people, you tend to:",
      answerOptions: [
        { answerText: "Stand with your arms folded", updateScore: 1 },
        { answerText: "Have your hands clasped", updateScore: 2 },
        {
          answerText: "Have one or both of your hands on your hips",
          updateScore: 5,
        },
        {
          answerText: "Touch or push the person to whom you are talking",
          updateScore: 6,
        },
        {
          answerText:
            "Play with your ear or hair, touch your chin, or smooth your hair",
          updateScore: 3,
        },
      ],
    },
    {
      questionText: "When you’re relaxed, you usually sit with:",
      answerOptions: [
        {
          answerText: "Your knees bent, with your legs neatly side by side",
          updateScore: 2,
        },
        { answerText: "Your legs crossed", updateScore: 3 },
        { answerText: "Your legs stretched out or straight", updateScore: 6 },
        { answerText: "One leg curled under you", updateScore: 5 },
      ],
    },
    {
      questionText: "When you find something really funny, you usually give:",
      answerOptions: [
        {
          answerText: "A big, appreciative laugh",
          updateScore: 6,
        },
        { answerText: "A laugh, but not a loud one", updateScore: 4 },
        { answerText: "A quiet chuckle", updateScore: 3 },
        { answerText: "A sheepish smile", updateScore: 2 },
      ],
    },
    {
      questionText: "When you enter a party or social gathering, you tend to:",
      answerOptions: [
        {
          answerText: "Make a loud entrance, so that everyone notices you",
          updateScore: 6,
        },
        {
          answerText:
            "Make a quiet entrance, looking around for someone you know",
          updateScore: 3,
        },
        {
          answerText: "Make the quietest entrance, trying to stay unnoticed",
          updateScore: 1,
        },
      ],
    },
    {
      questionText:
        "If you’re focused on a task and you’re interrupted, you’re likely to:",
      answerOptions: [
        {
          answerText: "Welcome the break",
          updateScore: 5,
        },
        {
          answerText: "Feel extremely irritated",
          updateScore: 3,
        },
        {
          answerText: "Vary between these two extremes",
          updateScore: 4,
        },
      ],
    },
    {
      questionText: "Your favorite color is:",
      answerOptions: [
        {
          answerText: "Red/Orange",
          updateScore: 6,
        },
        {
          answerText: "Black",
          updateScore: 1,
        },
        {
          answerText: "Yellow/Light Blue",
          updateScore: 4,
        },
        {
          answerText: "Green",
          updateScore: 3,
        },
        {
          answerText: "Purple/Dark Blue",
          updateScore: 2,
        },
        {
          answerText: "White",
          updateScore: 3,
        },
        {
          answerText: "Brown/Gray",
          updateScore: 2,
        },
      ],
    },
    {
      questionText: "Before you fall asleep, you’re usually lying:",
      answerOptions: [
        {
          answerText: "Stretched out on your back",
          updateScore: 5,
        },
        {
          answerText: "Stretched out face down on your stomach",
          updateScore: 4,
        },
        {
          answerText: "On your side, slightly curled",
          updateScore: 3,
        },
        {
          answerText: "With your head on one arm",
          updateScore: 5,
        },
        {
          answerText: "With your head under the covers",
          updateScore: 2,
        },
      ],
    },
    {
      questionText: "When you dream, you’re often:",
      answerOptions: [
        {
          answerText: "Falling",
          updateScore: 3,
        },
        {
          answerText: "Fighting or struggling",
          updateScore: 6,
        },
        {
          answerText: "Searching for something or somebody",
          updateScore: 4,
        },
        {
          answerText: "Flying or floating",
          updateScore: 5,
        },
        {
          answerText: "You usually have dreamless sleep",
          updateScore: 2,
        },
        {
          answerText: "Your dreams are always pleasant",
          updateScore: 3,
        },
      ],
    },
  ];

  const summary = [
    "",
    "Your friends see you as painstaking and fussy. They see you as very cautious, extremely careful, a slow and steady plodder. It would really surprise them if you ever did something impulsively or on the spur of the moment, expecting you to examine everything carefully from every angle and then, usually decide against it. They think this reaction is caused partly by your careful nature.",
    "Others see you as sensible, cautious, careful & practical. They see you as clever, gifted, or talented, but modest. Not a person who makes friends too quickly or easily, but someone who's extremely loyal to friends you do make and who expects the same loyalty in return. Those who really get to know you realize it takes a lot to shake your trust in your friends, but equally that it takes you a long time to get over if that trust is ever broken.",
    "Others see you as fresh, lively, charming, amusing, practical, and always interesting; someone who's constantly in the center of attention, but sufficiently well-balanced not to let it go to their head. They also see you as kind, considerate, and understanding; someone who'll always cheer them up and help them out.",
    "Others see you as an exciting, highly volatile, rather impulsive personality; a natural leader, who's quick to make decisions, though not always the right ones. They see you as bold and adventuresome, someone who will try anything once; someone who takes chances and enjoys an adventure. They enjoy being in your company because of the excitement you radiate.",
    "",
  ];
  const nature = [
    "The Shy Worrier",
    "The Careful Plodder",
    "The Loyal Friend",
    "The Lively Center of Attraction",
    "The Natural Leader",
    "The Vain, Self-Centered Leader",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [x, setX] = useState(0);
  useEffect(() => {
    if (score > 60) setX(5);
    else if (score > 50) setX(4);
    else if (score > 40) setX(3);
    else if (score > 30) setX(2);
    else if (score > 20) setX(1);
  }, [score]);

  const handleAnswerOptionClick = (updateScore) => {
    // if (updateScore) {
    //   setScore(score + 1);
    // }
    setScore(score + updateScore);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="result__section">
          <div className="score-section">Your personality score is {score}</div>
          <div className="score-section1">Nature:{nature[x]}</div>
          <div className="score-section2">Summary:{summary[x]}</div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() =>
                  handleAnswerOptionClick(answerOption.updateScore)
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
