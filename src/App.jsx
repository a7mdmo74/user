import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  AddChild,
  Home,
  Login,
  Questions,
  Service,
  Register,
  InsertImage,
  ResultPage,
  VideoPage,
  DoctorPage,
  GuidePage,
} from './pages';

import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
const App = () => {
  const navigate = useNavigate();
  const questions = [
    {
      id: crypto.randomUUID(),
      question: 'Does your child have trouble understanding sarcasm or jokes?',
      answers: [
        { answer: 'Never', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Always', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question: 'Does your child have a tendency to line up toys or objects?',
      answers: [
        { answer: 'Never', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Often', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        'Does your child have difficulty with imaginative play or pretend play?',
      answers: [
        { answer: 'No', score: 0 },
        { answer: 'Somewhat', score: 1 },
        { answer: 'Significantly', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        'Does your child have trouble with motor skills (e.g. catching a ball, climbing stairs)?',
      answers: [
        { answer: 'No', score: 0 },
        { answer: 'Somewhat', score: 1 },
        { answer: 'Significantly', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        'Does your child have unusual reactions to sensory experiences (e.g. intense fascination with certain textures or smells)?',
      answers: [
        { answer: 'No', score: 0 },
        { answer: 'Somewhat', score: 1 },
        { answer: 'Yes', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question: 'Does your child make good eye contact?',
      answers: [
        { answer: 'Always', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Rarely', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question: 'Does your child enjoy playing with other children?',
      answers: [
        { answer: 'Always', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Rarely', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        'Does your child show an interest in toys or objects, rather than people?',
      answers: [
        { answer: 'Never', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Often', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        'Does your child use gestures (such as pointing or waving) to communicate?',
      answers: [
        { answer: 'Always', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Never', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question: 'Does your child have difficulty with changes in routine?',
      answers: [
        { answer: 'Never', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Always', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        "Does your child have difficulty understanding other people's feelings?",
      answers: [
        { answer: 'Never', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Always', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        'Does your child repeat certain actions or behaviors over and over again?',
      answers: [
        { answer: 'Never', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Often', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        'Does your child have difficulty with social interactions (e.g. taking turns, sharing toys)?',
      answers: [
        { answer: 'Never', score: 0 },
        { answer: 'Sometimes', score: 1 },
        { answer: 'Always', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question:
        'Does your child have difficulty with language development (e.g. delayed speech, difficulty understanding language)?',
      answers: [
        { answer: 'No', score: 0 },
        { answer: 'Somewhat', score: 1 },
        { answer: 'Significantly', score: 2 },
      ],
    },
    {
      id: crypto.randomUUID(),
      question: 'Does your child have a narrow range of interests?',
      answers: [
        { answer: 'No', score: 0 },
        { answer: 'Somewhat', score: 1 },
        { answer: 'Yes', score: 2 },
      ],
    },
  ];
  const [token, setToken] = useState('');
  const [result, setResult] = useState('');
  const [scores, setScores] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/auth/login" element={<Login token={token} />} />
        <Route
          path="/auth/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route path="/" element={<Home token={token} />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="/check/questions"
          element={
            <Questions
              scores={scores}
              setScores={setScores}
              setScore={setScore}
              questions={questions}
            />
          }
        />
        <Route
          path="/check/insert-image"
          element={<InsertImage setResult={setResult} />}
        />
        <Route
          path="/show-result"
          element={<ResultPage result={result} score={score} />}
        />
        <Route path="/add-child" element={<AddChild />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/guides" element={<GuidePage />} />
      </Routes>
    </div>
  );
};

export default App;
