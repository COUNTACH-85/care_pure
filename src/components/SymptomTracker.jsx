// components/SymptomTracker.jsx
import { useState } from 'react';

const SymptomTracker = ({ selectedDate, symptoms = {}, updateSymptoms }) => {
  const symptomOptions = [
    { id: 'cramps', label: 'Cramps', emoji: '😣' },
    { id: 'headache', label: 'Headache', emoji: '🤕' },
    { id: 'bloating', label: 'Bloating', emoji: '😫' },
    { id: 'backPain', label: 'Back Pain', emoji: '🔙' },
    { id: 'breastTenderness', label: 'Breast Tenderness', emoji: '😖' },
    { id: 'moodSwings', label: 'Mood Swings', emoji: '🎭' },
    { id: 'fatigue', label: 'Fatigue', emoji: '😴' },
    { id: 'acne', label: 'Acne', emoji: '😬' },
    { id: 'appetiteChanges', label: 'Appetite Changes', emoji: '🍔' },
    { id: 'insomnia', label: 'Insomnia', emoji: '🌙' }
  ];

  const [notes, setNotes] = useState(symptoms.notes || '');
  
  const handleSymptomToggle = (symptomId) => {
    updateSymptoms({ 
      [symptomId]: !symptoms[symptomId] 
    });
  };
  
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    updateSymptoms({ notes: e.target.value });
  };
  
  const handleFlow = (flow) => {
    updateSymptoms({ flow });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold text-lg mb-4 text-green-700">
        Symptoms for {selectedDate.toLocaleDateString()}
      </h2>
      
      {symptoms.period && (
        <div className="mb-4">
          <h3 className="font-medium mb-2">Flow Intensity</h3>
          <div className="flex space-x-2">
            {['light', 'medium', 'heavy'].map(flow => (
              <button
                key={flow}
                onClick={() => handleFlow(flow)}
                className={`px-3 py-1 rounded ${
                  symptoms.flow === flow 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {flow.charAt(0).toUpperCase() + flow.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="font-medium mb-2">Symptoms</h3>
        <div className="grid grid-cols-2 gap-2">
          {symptomOptions.map(option => (
            <button
              key={option.id}
              onClick={() => handleSymptomToggle(option.id)}
              className={`px-3 py-2 rounded flex items-center ${
                symptoms[option.id] 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-100 text-green-800'
              }`}
            >
              <span className="mr-2">{option.emoji}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-2">Notes</h3>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          className="w-full p-2 border border-green-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Add any additional notes here..."
        ></textarea>
      </div>
    </div>
  );
};

export default SymptomTracker;