// DateSelector.js
import React from 'react';

const DateSelector = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Select Date</label>
      <input 
        type="date"
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default DateSelector;
