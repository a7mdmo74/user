import React, { useEffect, useState } from 'react';
import { FaHospitalUser, FaVideo } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { Doctor, Navbar } from '../../components';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Modal from '../../components/Modal';
import { toast } from 'react-hot-toast';
const DoctorPage = () => {
  const token = localStorage.getItem('token').trim().split('|')[1];
  const [doctors, setDoctors] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const getDoctors = async () => {
    await axios
      .get('http://localhost:8000/api/super/showDoctors', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDoctors(response.data.doctors);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await getDoctors();
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen relative flex flex-col">
      {isModal && <Modal token={token} setIsModal={setIsModal} />}
      <Navbar token={token} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[80%] mx-auto h-[85vh] py-12">
        {doctors?.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} setIsModal={setIsModal} />
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

export default DoctorPage;
