// components/CycleInfo.jsx
import { useState, useEffect } from 'react';

const CycleInfo = ({ cycleData, selectedDate, updateCycleLength }) => {
  const [cycleLength, setCycleLength] = useState(cycleData.averageCycleLength);
  
  useEffect(() => {
    setCycleLength(cycleData.averageCycleLength);
  }, [cycleData.averageCycleLength]);

  const calculateNextPeriod = () => {
    if (!cycleData.lastPeriodStartDate) return 'Set your last period to predict';
    
    const lastPeriod = new Date(cycleData.lastPeriodStartDate);
    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(nextPeriod.getDate() + cycleData.averageCycleLength);
    
    const today = new Date();
    const daysUntil = Math.ceil((nextPeriod - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntil < 0) {
      return `${Math.abs(daysUntil)} days late`;
    } else if (daysUntil === 0) {
      return "Expected today";
    } else {
      return `In ${daysUntil} days`;
    }
  };

  const calculatePhase = () => {
    if (!cycleData.lastPeriodStartDate) return 'Unknown';
    
    const lastPeriod = new Date(cycleData.lastPeriodStartDate);
    const today = new Date();
    const daysSinceLastPeriod = Math.floor((today - lastPeriod) / (1000 * 60 * 60 * 24));
    
    if (daysSinceLastPeriod < 0) return 'Unknown';
    
    if (daysSinceLastPeriod <= 5) {
      return 'Menstrual Phase';
    } else if (daysSinceLastPeriod <= 13) {
      return 'Follicular Phase';
    } else if (daysSinceLastPeriod <= 15) {
      return 'Ovulation Phase';
    } else {
      return 'Luteal Phase';
    }
  };

  const handleCycleLengthChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCycleLength(value);
  };

  const saveCycleLength = () => {
    if (cycleLength >= 20 && cycleLength <= 40) {
      updateCycleLength(cycleLength);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold text-lg mb-4 text-green-700">Cycle Information</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Last Period Start</h3>
          <p className="text-lg">
            {cycleData.lastPeriodStartDate 
              ? new Date(cycleData.lastPeriodStartDate).toLocaleDateString() 
              : 'Not set'}
          </p>
        </div>
        
        <div>
          <h3 className="font-medium">Next Period Expected</h3>
          <p className="text-lg">{calculateNextPeriod()}</p>
        </div>
        
        <div>
          <h3 className="font-medium">Current Phase</h3>
          <p className="text-lg">{calculatePhase()}</p>
        </div>
        
        <div>
          <h3 className="font-medium">Cycle Length (days)</h3>
          <div className="flex items-center">
            <input 
              type="number" 
              min="20" 
              max="40"
              value={cycleLength}
              onChange={handleCycleLengthChange}
              className="w-16 p-1 border border-green-300 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button 
              onClick={saveCycleLength}
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CycleInfo;