import React, { useState } from 'react';
import { Chat, Footer, Navbar } from '../../../components';
import { BsQuestion } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Questions = ({ scores, setScores, setScore, questions }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token').trim().split('|')[1];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const handleAnswerClick = (questionIndex, answerIndex) => {
    const newScores = [...scores];
    newScores[questionIndex] =
      questions[questionIndex].answers[answerIndex].score;
    setScores(newScores);
  };

  const handleSubmit = () => {
    const sum = scores.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setScore(sum);
    console.log(sum);
    navigate('/show-result');
  };

  useEffect(() => {
    console.log(scores);
  }, [scores]);

  return (
    <div className="bg-white min-h-screen relative">
      <Navbar token={token} />

      <div className="py-8 px-4 max-w-6xl mx-auto relative">
        <div className="flex items-center justify-start mb-4">
          <BsQuestion className="text-3xl w-16 h-16 rounded-full text-white bg-blue-600" />
        </div>

        <div className="w-100 px-12">
          <div className="bg-[#e7f9fd] rounded-[50rem] mb-4 w-100 p-12 relative rounded-pill flex items-center justify-center flex-col">
            <span className="question-number absolute rounded-full p-3 flex items-center justify-center bg-[#e7f9fd] text-[#0d9bcf] w-20 h-20 text-2xl -top-11 border-4 border-white font-bold">
              {currentQuestion + 1}
            </span>

            <div className="text-[#0d9bcf]">
              <div className="mb-10">
                <h3 className="font-bold text-2xl mb-4 text-center">
                  {questions[currentQuestion].question}{' '}
                  {questions[currentQuestion].question.at(-1) === '?'
                    ? ''
                    : '?'}
                </h3>
              </div>

              <div className="flex items-center justify-center gap-5">
                {questions[currentQuestion].answers.map(
                  (answer, answerIndex) => (
                    <button
                      key={answerIndex}
                      className={
                        selectedButton === answerIndex
                          ? 'font-medium px-4 py-2 rounded-2xl active:scale-90 transition-all duration-300 text-lg border-0 shadow-md bg-blue-500 text-white'
                          : 'font-medium px-4 py-2 rounded-2xl active:scale-90 transition-all duration-300 text-lg bg-white border-0 shadow-md'
                      }
                      onClick={() => {
                        handleAnswerClick(currentQuestion, answerIndex);
                        handleButtonClick(answerIndex);
                      }}
                    >
                      {answer.answer}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button
              className="px-4 py-2 text-lg rounded-xl text-white bg-[#0d9bcf] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
              disabled={currentQuestion === 0}
              onClick={() => {
                setCurrentQuestion((prev) => prev - 1);
                setSelectedButton(null);
                console.log(scores[currentQuestion]);
              }}
            >
              Previous
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button
                className="px-4 py-2 text-lg rounded-xl text-white bg-[#0d9bcf]"
                type="button"
                onClick={() => {
                  const allNotNull = scores.every((item) => item !== null);

                  if (allNotNull !== null) handleSubmit();
                  else toast.success('Please, select answer');
                }}
              >
                submit
              </button>
            ) : (
              <button
                className="px-4 py-2 text-lg rounded-xl text-white bg-[#0d9bcf] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
                disabled={currentQuestion === questions.length - 1}
                onClick={() => {
                  if (scores[currentQuestion] !== null) {
                    setCurrentQuestion((prev) => prev + 1);
                    setSelectedButton(null);
                  } else {
                    toast.success('Please, select answer');
                  }
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4">
        <Chat />
      </div>

      <Footer />
    </div>
  );
};

export default Questions;
