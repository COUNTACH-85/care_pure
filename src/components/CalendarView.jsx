// components/CalendarView.jsx
import { useState, useEffect } from 'react';

const CalendarView = ({ cycleData, selectedDate, setSelectedDate, togglePeriodDay }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    generateCalendarDays(currentMonth);
  }, [currentMonth, cycleData]);

  const generateCalendarDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    
    const daysArray = [];
    
    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysArray.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      daysArray.push(new Date(year, month, day));
    }
    
    setCalendarDays(daysArray);
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const formatDateKey = (date) => {
    return date ? date.toISOString().split('T')[0] : '';
  };

  const isPeriodDay = (date) => {
    if (!date) return false;
    const dateKey = formatDateKey(date);
    return cycleData.symptoms[dateKey]?.period;
  };

  const isFertileDay = (date) => {
    if (!date || !cycleData.lastPeriodStartDate) return false;
    
    const lastPeriod = new Date(cycleData.lastPeriodStartDate);
    const daysSinceLastPeriod = Math.floor((date - lastPeriod) / (1000 * 60 * 60 * 24));
    
    // Assuming fertility window is ~5 days before ovulation and ovulation day
    // Ovulation typically occurs around day 14 before the next period
    const expectedOvulation = cycleData.averageCycleLength - 14;
    
    return daysSinceLastPeriod >= expectedOvulation - 5 && daysSinceLastPeriod <= expectedOvulation;
  };

  const isSelectedDate = (date) => {
    if (!date) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const hasSymptoms = (date) => {
    if (!date) return false;
    const dateKey = formatDateKey(date);
    const symptoms = cycleData.symptoms[dateKey];
    return symptoms && Object.keys(symptoms).some(key => key !== 'period' && symptoms[key]);
  };

  const dayClasses = (date) => {
    if (!date) return "bg-gray-100";
    
    let classes = "cursor-pointer hover:bg-green-100 h-10 w-10 rounded-full flex items-center justify-center";
    
    if (isSelectedDate(date)) {
      classes += " bg-green-600 text-white";
    } else if (isPeriodDay(date)) {
      classes += " bg-red-500 text-white";
    } else if (isFertileDay(date)) {
      classes += " bg-green-200";
    } else {
      classes += " bg-white";
    }
    
    if (hasSymptoms(date) && !isPeriodDay(date)) {
      classes += " border-2 border-yellow-400";
    }
    
    return classes;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-green-100"
        >
          &lt;
        </button>
        <h2 className="font-bold text-xl">
          {currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button 
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-green-100"
        >
          &gt;
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-sm">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div key={index} className="p-1 text-center">
            {day && (
              <div
                className={dayClasses(day)}
                onClick={() => {
                  setSelectedDate(day);
                }}
                onDoubleClick={() => togglePeriodDay(day)}
              >
                {day.getDate()}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-sm">
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
          <span>Period</span>
        </div>
        {/* <div className="flex items-center mb-1">
          <div className="w-4 h-4 rounded-full bg-green-200 mr-2"></div>
          <span>Fertility Window</span>
        </div> */}
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-yellow-400 mr-2"></div>
          <span>Symptoms</span>
        </div>
        <p className="mt-2 text-gray-600">Double-click a day to mark/unmark period</p>
      </div>
    </div>
  );
};

export default CalendarView;