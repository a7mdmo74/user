import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Datepicker from 'tailwind-datepicker-react';

const options = {
  title: 'Demo Title',
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date('2030-01-01'),
  minDate: new Date('2023-03-01'),
  theme: {
    background: 'bg-gray-800',
    todayBtn: '',
    clearBtn: '',
    icons: '',
    text: '',
    input: '',
    inputIcon: '',
    selected: '',
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: 'top-12',
  defaultDate: new Date('2023-05-01'),
  language: 'en',
};

const Modal = ({ setIsModal, token }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    let myDate = new Date(selectedDate);
    const year = myDate.getFullYear();
    const month = myDate.getMonth() + 1;
    const day = myDate.getDate();
    const transformedDate = `${year}-${month}-${day}`;
    setDate(transformedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  const makeAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('doctor_name', 'ahmed');
    formData.append('date', date);
    formData.append('time', time);
    await axios
      .post('http://localhost:8000/api/super/makeAppointment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          Accept: 'Application/json',
        },
      })
      .then((response) => {
        toast.success('Your appointment saved successfully');
        console.log(response.data);
        setIsModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex justify-center">
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Make Appointment
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setIsModal(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3>Select Date:</h3>
                <Datepicker
                  options={options}
                  onChange={handleChange}
                  show={show}
                  setShow={handleClose}
                  value={date}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select time:
              </label>
              <select
                id="time"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option defaultValue>Time</option>
                <option value="9:00">9:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14">14:00</option>
              </select>
            </div>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={makeAppointment}
            >
              Make
            </button>
            <button
              onClick={() => setIsModal(false)}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
