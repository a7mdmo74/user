import React from 'react';
import { Chat, Footer, Navbar } from '../../components';
import { AiFillCamera } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Service = () => {
  const token = localStorage.getItem('token').trim().split('|')[1];

  return (
    <div className="bg-white min-h-screen relative">
      <Navbar token={token} />
      <div className="w-full h-full bg-main-bg bg-no-repeat bg-cover min-h-[90vh] p-4">
        <div className="min-h-[85vh] relative">
          <div className="py-8 max-w-4xl mx-auto flex flex-col justify-center space-y-16 px-4 z-10">
            <h2 className="text-2xl font-bold text-blue-900 my-2 text-center">
              Detection Options
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-44 h-44 rounded-full bg-white border-blue-300 border-[1px] hover:shadow-md hover:shadow-blue-200 cursor-pointer hover:scale-105 transition-all duration-200 flex items-center justify-center">
                  <Link to="/check/insert-image">
                    <AiFillCamera className="text-8xl text-blue-300" />
                  </Link>
                </div>
                <h3 className="text-blue-800 font-semibold text-xl">
                  Pic image
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-44 h-44 rounded-full bg-white border-blue-300 border-[1px] hover:shadow-md hover:shadow-blue-200 cursor-pointer hover:scale-105 transition-all duration-200 flex items-center justify-center">
                  <Link to="/check/questions">
                    <BsQuestion className="text-8xl text-blue-300" />
                  </Link>
                </div>
                <h3 className="text-blue-800 font-semibold text-xl">
                  By Question
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 right-4">
          <Chat />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
