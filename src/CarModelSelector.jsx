// CarModelSelector.js
import React from 'react';

const CarModelSelector = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Select Car Model</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select a car model</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="Truck">Truck</option>
        <option value="Convertible">Convertible</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default CarModelSelector;
