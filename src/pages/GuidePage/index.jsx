import React, { useEffect, useState } from 'react';
import { FaHospitalUser, FaVideo } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { Guide, Navbar } from '../../components';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const GuidePage = () => {
  const token = localStorage.getItem('token').trim().split('|')[1];
  const [guides, setGuides] = useState([]);
  const getGuides = async () => {
    await axios
      .get('http://localhost:8000/api/super/showGuides', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.guides);
        setGuides(response.data.guides);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await getGuides();
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen relative">
      <Navbar token={token} />
      <div className="flex flex-col w-[80%] mx-auto h-[85vh] items-center py-12">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          {guides?.map((guide) => (
            <Guide key={guide.id} guide={guide} />
          ))}
        </div>
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

export default GuidePage;
