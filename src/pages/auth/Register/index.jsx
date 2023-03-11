import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import MainBG from '../../../assets/main_bg.jpg';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { FormHelperText } from '@mui/material';
const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const initialValues = {
    fullname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    submit: null,
  };
  // form field value validation schema
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be of minimum 6 characters length')
      .required('Password is required'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });

  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await register(values.email, values.password, values.name);
        setLoading(false);
        toast.success('You registered successfully');
        navigate('/');
      } catch (error) {
        setError(error?.message);
        setLoading(false);
      }
    },
  });

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
        <form noValidate onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col items-center space-y-6 my-6 w-full">
            <input
              className="bg-gray-200 rounded-xl w-full px-4 py-2 outline-none"
              placeholder="Full Name"
              name="fullname"
              type="text"
              label="fullname"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullname || ''}
            />
            {errors.fullname && (
              <FormHelperText
                error
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {errors.fullname}
              </FormHelperText>
            )}
            <input
              className="bg-gray-200 rounded-xl w-full px-4 py-2 outline-none"
              placeholder="E-mail"
              name="email"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && (
              <FormHelperText
                error
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {errors.email}
              </FormHelperText>
            )}
            <input
              className="bg-gray-200 rounded-xl w-full px-4 py-2 outline-none"
              placeholder="Password"
              name="password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && (
              <FormHelperText
                error
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {errors.password}
              </FormHelperText>
            )}
            <input
              className="bg-gray-200 rounded-xl w-full px-4 py-2 outline-none"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.passwordConfirmation}
            />
            {errors.passwordConfirmation && (
              <FormHelperText
                error
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {errors.passwordConfirmation}
              </FormHelperText>
            )}
            <button className="w-full p-3 bg-blue-600 rounded-xl text-white text-xl hover:bg-blue-700 transition-all duration-200">
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
