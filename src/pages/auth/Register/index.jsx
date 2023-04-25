import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import MainBG from '../../../assets/main_bg.jpg';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Register = ({ setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        name: username,
        email,
        password,
        confirmPassword: password,
      });
      setMessage(response);
      setToken(response.data.User.token);
      toast.success('Your account created successfully');

      localStorage.setItem('token', response.data.User.token);
      navigate('/');
    } catch (error) {
      setMessage(error.response);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen relative bg-center flex items-start justify-center">
      <div className="absolute h-full w-full -z-10 opacity-70">
        <img src={MainBG} className="w-full h-full" alt="" />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-2">
        <div className="flex items-center justify-center">
          <NavLink
            to="/auth/login"
            className="border-t-2 border-t-gray-500 text-xl px-2"
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/register"
            className="border-t-2 border-t-gray-500 text-xl px-2"
          >
            Signup
          </NavLink>
        </div>
        <form noValidate onSubmit={handleRegister} className="w-full">
          <div className="flex flex-col items-center space-y-6 my-6 w-full">
            <input
              className="bg-gray-200 rounded-xl w-full px-4 py-2 outline-none"
              placeholder="Full Name"
              name="fullname"
              type="text"
              label="fullname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="bg-gray-200 rounded-xl w-full px-4 py-2 outline-none"
              placeholder="E-mail"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-200 rounded-xl w-full px-4 py-2 outline-none"
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="bg-gray-200 rounded-xl w-full px-4 py-2 outline-none"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              type="password"
            />
            <button
              type="submit"
              onClick={handleRegister}
              className="w-full p-3 bg-blue-600 rounded-xl text-white text-xl hover:bg-blue-700 transition-all duration-200"
            >
              Sign Up
            </button>
            <p className="text-lg font-semibold">
              By counting you agree to accept our
              <br /> Privacy Policy & Terms of Service
            </p>
          </div>
          <div className="flex justify-center text-lg relative before:absolute before:border-t-2 before:w-2/5 before:border-black before:top-1/2 before:left-2 after:absolute after:border-t-2 after:w-2/5 after:border-black after:top-1/2 after:right-2">
            <p>OR</p>
          </div>
          <div className="flex items-center flex-col space-y-6 my-6 w-full">
            <button
              type="button"
              className="w-full text-white text-lg bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-xl px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
            >
              <AiOutlineGoogle className="mr-1" />
              Sign Up with Google
            </button>
            <button
              type="button"
              className="w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-xl px-5 py-2.5 text-center text-lg inline-flex items-center justify-center mr-2 mb-2"
            >
              <FaFacebookF className="mr-1" />
              Sign Up with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
