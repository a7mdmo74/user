import React from 'react';
import { Chat, Footer, Navbar } from '../../components';
const AddChild = () => {
  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <div className="w-full h-full bg-main-bg bg-no-repeat bg-cover min-h-[90vh] p-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl my-8">Child Details</h2>
          <form className="flex flex-col items-center space-y-8 w-full p-4">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="w-2/3 sm:w-1/2 p-2 rounded-xl outline-none border-[1px] border-gray-900"
            />
            <input
              id="age"
              name="age"
              type="date"
              placeholder="Date of Birth"
              className="w-2/3 sm:w-1/2 p-2 rounded-xl outline-none border-[1px] border-gray-900"
            />
            <select
              name="gender"
              id="gender"
              className="w-2/3 sm:w-1/2 p-2 rounded-xl outline-none border-[1px] border-gray-900"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="submit"
              value="Submit"
              className="w-2/3 sm:w-1/2 cursor-pointer text-white text-lg bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-xl px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
            />
          </form>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Chat />
      </div>
      <Footer />
    </div>
  );
};

export default AddChild;
