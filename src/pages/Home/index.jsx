import React from 'react';
import { Chat, Footer, Navbar } from '../../components';
const Home = () => {
  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <div className="py-24 max-w-6xl mx-auto flex flex-col justify-center space-y-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
          <div className="rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer transition-all duration-500">
            <img
              src="https://www.clinical-partners.co.uk/images/hub/camhs/child-psychiatry.jpg"
              alt=""
              className="rounded-tl-lg rounded-tr-lg"
            />
            <div className="p-4">
              <h1 className="text-2xl text-[#812061]">ADHD assessments</h1>
              <p className="py-4 text-[#27628d]">
                An autism assessment can help identify symptoms and provide
                guidance on support to help your child live comfortably and
                reach their potential.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer transition-all duration-500">
            <img
              src="https://www.clinical-partners.co.uk/images/hub/camhs/child-psychology.jpg"
              alt=""
              className="rounded-tl-lg rounded-tr-lg"
            />
            <div className="p-4">
              <h1 className="text-2xl text-[#812061]">Autism assessments</h1>
              <p className="py-4 text-[#27628d]">
                An autism assessment can help identify symptoms and provide
                guidance on support to help your child live comfortably and
                reach their potential.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1514486926376-b0ce3e56c145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
              className="rounded-tl-lg rounded-tr-lg"
            />
            <div className="p-4">
              <h1 className="text-2xl text-[#812061]">Talking therapy</h1>
              <p className="py-4 text-[#27628d]">
                Talking therapy can help children and teenagers overcome
                challenges, understand and cope with emotions, and live a
                happier and healthier life.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF1dGlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="rounded-tl-lg rounded-tr-lg"
            />
            <div className="p-4">
              <h1 className="text-2xl text-[#812061]">Anxiety</h1>
              <p className="py-4 text-[#27628d]">
                if you've noticed your child has been experiencing anxiety
                symptoms for an extended period of time, it may be time to seek
                professional help.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1603354350266-a8de3496163b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1dGlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="rounded-tl-lg rounded-tr-lg"
            />
            <div className="p-4">
              <h1 className="text-2xl text-[#812061]">
                Psychiatric assessments
              </h1>
              <p className="py-4 text-[#27628d]">
                A psychiatric assessment can identify mental health issues in
                children, and uses evidence-based methods to determine the
                appropriate support to set them on a path to improved mental
                health.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF1dGlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="rounded-tl-lg rounded-tr-lg"
            />
            <div className="p-4">
              <h1 className="text-2xl text-[#812061]">Fees</h1>
              <p className="py-4 text-[#27628d]">
                Find out how much it costs to see a trained mental health
                professional.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#65BCCF] py-16">
        <div className="w-[90%] mx-auto flex items-center justify-center space-x-16">
          <img
            src="https://www.clinical-partners.co.uk/images/hub/depression/depressed_macbook.jpg"
            alt=""
            className="object-cover w-32 h-32 rounded-full"
          />
          <div className="flex flex-col space-y-7 justify-center items-center">
            <h2 className="text-white font-semibold text-4xl mb-6">
              Don't let your concerns go unaddressed
            </h2>
            <p className="text-white">
              Proactive care for your child's mental health can lead to
              long-term, positive outcomes. Take the first step today and speak
              to a trained clinical advisor.
            </p>
            <button className="px-6 py-2 text-[#65BCCF] bg-white rounded-lg transition-all duration-300 hover:bg-[#65BCCF] hover:text-white">
              Message Us
            </button>
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

export default Home;
