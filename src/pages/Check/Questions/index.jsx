import React from 'react';
import { Chat, Footer, Navbar } from '../../../components';
import { BsQuestion } from 'react-icons/bs';

const Questions = () => {
  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <div className="py-8 px-4 max-w-6xl mx-auto relative">
        <div className="flex items-center justify-start">
          <BsQuestion className="text-3xl w-16 h-16 rounded-full text-white bg-blue-600" />
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
