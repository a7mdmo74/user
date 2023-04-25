import React from 'react';
import { FaHospitalUser, FaVideo } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { Navbar, Video } from '../../components';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const VideoPage = () => {
  const token = localStorage.getItem('token').trim().split('|')[1];
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    await axios
      .get('http://localhost:8000/api/super/showVideos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.videos);
        setVideos(response.data.videos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await getVideos();
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen relative">
      <Navbar token={token} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[80%] mx-auto h-[85vh] py-12 space-x-4">
        {videos?.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full h-20 bg-blue-700 flex items-center justify-center space-x-10">
        <NavLink
          to="/video"
          className="flex flex-col text-lg items-center text-white space-y-2"
        >
          <FaVideo />
          <p>Video</p>
        </NavLink>
        <NavLink
          to="/doctors"
          className="flex flex-col text-lg items-center text-white space-y-2"
        >
          <FaHospitalUser />
          <p>Doctors</p>
        </NavLink>
        <NavLink
          to="/guides"
          className="flex flex-col text-lg items-center text-white space-y-2"
        >
          <BiMessageDetail />
          <p>Guides</p>
        </NavLink>
      </div>
    </div>
  );
};

export default VideoPage;
