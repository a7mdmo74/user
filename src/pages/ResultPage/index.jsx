import React from 'react';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';

const ResultPage = ({ result, score }) => {
  const token = localStorage.getItem('token').trim().split('|')[1];
  console.log(score);
  return (
    <div className="bg-white min-h-screen relative">
      <Navbar token={token} />
      <div className="flex flex-col w-[80%] mx-auto h-[85vh] items-center py-12">
        <h2 className="text-4xl font-semibold py-3">Result</h2>
        {score > 20 || result == 'autistic' ? (
          <>
            <div className="w-[250px] h-[250px] rounded-full border-2 bg-blue-300 shadow-2xl shadow-blue-300 flex items-center justify-center">
              <h3 className="text-xl font-semibold">
                {result == 'autistic' || score > 20
                  ? 'Autistic'
                  : 'Non Autistic'}
              </h3>
            </div>
            <p className="w-[50%] py-6 text-xl text-slate-900">
              Autistic children may struggle with spoken language, have
              difficulty understanding social cues, have difficulty making
              friends, and may engage in repetitive behaviors such as rocking or
              spinning objects. They may also have difficulty with changes in
              routine or transitioning from one activity to another. It's
              important to note that every autistic child is unique, and the
              degree to which they experience these symptoms can vary. Early
              intervention and specialized therapy can help children with autism
              develop skills to communicate, socialize, and cope with everyday
              life.
            </p>
            <div className="flex items-center justify-center w-[50%] flex-wrap">
              <Link
                to="/video"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Next
              </Link>
              <Link
                to="/check/insert-image"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Upload another image
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="w-[250px] h-[250px] rounded-full border-2 bg-blue-300 shadow-2xl shadow-blue-300 flex items-center justify-center">
              <h3 className="text-xl font-semibold">
                {result == 'autistic' ? 'Autistic' : 'Non Autistic'}
              </h3>
            </div>
            <p className="w-[50%] py-6 text-xl text-slate-900">
              A non-autistic child is a child who does not have autism spectrum
              disorder (ASD), a neurodevelopmental disorder characterized by
              challenges with social interaction, communication, and repetitive
              behaviors or interests.Non-autistic children typically develop
              social communication skills at a typical rate, meaning they learn
              to use language to communicate with others and engage in
              reciprocal social interactions with peers and adults. They may
              have a range of interests and hobbies, and their play and behavior
              may be varied and imaginative.
            </p>
            <div className="flex items-center justify-center w-[50%] flex-wrap">
              <Link
                to="/"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Home Page
              </Link>
              <Link
                to="/check/insert-image"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Upload another image
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
