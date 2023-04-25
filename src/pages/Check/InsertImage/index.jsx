import { useState } from 'react';
import { Chat, Footer, Navbar } from '../../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const InsertImage = ({ setResult }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token').trim().split('|')[1];
  const [image, setImage] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImageSrc(URL.createObjectURL(file));
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    toast.success('Your image is processing, please be patient!');
    const formData = new FormData();
    formData.append('file', image);
    console.log(image);
    await axios
      .post('http://localhost:8000/api/super/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          Accept: 'Application/json',
        },
      })
      .then((response) => {
        navigate('/show-result');
        setResult(response.data.response.prediction);
        toast.success('Done!');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  return (
    <div className="bg-white min-h-screen relative">
      <Navbar token={token} />
      <div className="flex md:w-[80%] mx-auto h-[85vh] items-center justify-center">
        {image ? (
          <div className="flex flex-col space-y-4">
            <img
              src={imageSrc}
              alt="Selected file"
              style={{ height: 350, borderRadius: 15 }}
            />
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={uploadImage}
            >
              Predict
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        )}
      </div>
      <div className="fixed bottom-4 right-4">
        <Chat />
      </div>
      <Footer />
    </div>
  );
};

export default InsertImage;
