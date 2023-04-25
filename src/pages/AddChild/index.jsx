import React from 'react';
import { Chat, Footer, Navbar } from '../../components';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddChild = () => {
  const token = localStorage.getItem('token').trim().split('|')[1];
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const addChild = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('dob', dob);
    formData.append('gender', gender);
    await axios
      .post('http://localhost:8000/api/super/addPatientDetails', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          Accept: 'Application/json',
        },
      })
      .then(() => {
        toast.success('Child added Successfully!');
        navigate('/service');
        setName('');
        setDob('');
        setGender('');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <div className="w-full h-full bg-main-bg bg-no-repeat bg-cover min-h-[90vh] p-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl my-8">Child Details</h2>
          <form
            className="flex flex-col items-center space-y-8 w-full p-4"
            onSubmit={addChild}
          >
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="w-2/3 sm:w-1/2 p-2 rounded-xl outline-none border-[1px] border-gray-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              id="age"
              name="age"
              type="date"
              placeholder="Date of Birth"
              className="w-2/3 sm:w-1/2 p-2 rounded-xl outline-none border-[1px] border-gray-900"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <select
              name="gender"
              id="gender"
              className="w-2/3 sm:w-1/2 p-2 rounded-xl outline-none border-[1px] border-gray-900"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select an option</option>
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
