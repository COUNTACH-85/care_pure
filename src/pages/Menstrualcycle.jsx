// App.jsx
import { useState, useEffect } from 'react';
import CalendarView from '../components/CalendarView';   
import SymptomTracker from '../components/SymptomTracker';
import CycleInfo from '../components/CycleInfo';

function Menstrualcycle() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [cycleData, setCycleData] = useState(() => {
    const savedData = localStorage.getItem('cycleData');
    return savedData ? JSON.parse(savedData) : {
      lastPeriodStartDate: null,
      averageCycleLength: 28,
      cycles: [],
      symptoms: {}
    };
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cycleData', JSON.stringify(cycleData));
  }, [cycleData]);

  const formatDateKey = (date) => {
    return date.toISOString().split('T')[0];
  };

  const togglePeriodDay = (date) => {
    const dateKey = formatDateKey(date);
    const newSymptoms = { ...cycleData.symptoms };
    
    if (newSymptoms[dateKey]) {
      // Toggle period status
      newSymptoms[dateKey] = {
        ...newSymptoms[dateKey],
        period: !newSymptoms[dateKey].period
      };
    } else {
      // Create new entry with period
      newSymptoms[dateKey] = { period: true };
    }

    setCycleData({
      ...cycleData,
      symptoms: newSymptoms,
      lastPeriodStartDate: newSymptoms[dateKey].period ? date : cycleData.lastPeriodStartDate
    });
  };

  const updateSymptoms = (symptoms) => {
    const dateKey = formatDateKey(selectedDate);
    setCycleData({
      ...cycleData,
      symptoms: {
        ...cycleData.symptoms,
        [dateKey]: {
          ...cycleData.symptoms[dateKey],
          ...symptoms
        }
      }
    });
  };

  const updateCycleLength = (length) => {
    setCycleData({
      ...cycleData,
      averageCycleLength: length
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Menstrual Cycle Tracker</h1>
      </header>

      <main className="container mx-auto p-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <CalendarView 
              cycleData={cycleData} 
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              togglePeriodDay={togglePeriodDay}
            />
          </div>
          <div className="space-y-6">
            <CycleInfo 
              cycleData={cycleData} 
              selectedDate={selectedDate}
              updateCycleLength={updateCycleLength}
            />
            <SymptomTracker 
              selectedDate={selectedDate}
              symptoms={cycleData.symptoms[formatDateKey(selectedDate)] || {}}
              updateSymptoms={updateSymptoms}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Menstrualcycle;