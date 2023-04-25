import React from 'react';

const Doctor = ({ doctor, setIsModal }) => {
  const { id, name, description, image } = doctor;
  return (
    <div className="max-w-sm h-[25rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div id={id}>
        <img
          className="rounded-t-lg w-full h-52"
          src={`http://localhost:8000/storage/doctors/${image}`}
          alt=""
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setIsModal(true)}
        >
          Make Appointment
        </button>
      </div>
    </div>
  );
};

export default Doctor;
