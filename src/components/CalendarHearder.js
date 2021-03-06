import dayjs from 'dayjs';
import { useContext } from 'react';
import logo from '../assets/logo.png';
import GlobalContext from '../context/GlobalContext';

const CalendarHearder = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="logo" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
      <button
        className="border rounded py-2 px-4 mr-5"
        onClick={() =>
          setMonthIndex(
            monthIndex === dayjs().month()
              ? monthIndex + Math.random()
              : dayjs().month()
          )
        }
      >
        Today
      </button>
      <button onClick={() => setMonthIndex(monthIndex - 1)}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={() => setMonthIndex(monthIndex + 1)}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  );
};

export default CalendarHearder;
