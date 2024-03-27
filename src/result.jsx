// Result.js
import React from 'react';

const Result = ({ cost }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Shipping Cost</h2>
      <p className="text-gray-700">The estimated shipping cost is ${cost.toFixed(2)}.</p>
    </div>
  );
};

export default Result;
