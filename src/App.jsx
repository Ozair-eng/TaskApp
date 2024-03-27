import React, { useState } from 'react';
import LocationPicker from './locationpicker';
import CarModelSelector from './CarModelSelector';
import DateSelector from './DateSelector';
import TaskApp from './TaskApp';
const App = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [carModel, setCarModel] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [shippingCost, setShippingCost] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate random locations
    const randomPickupLocation = getRandomLocation();
    const randomDropoffLocation = getRandomLocation();
    setPickupLocation(randomPickupLocation);
    setDropoffLocation(randomDropoffLocation);
    // Call API to get distance between pickup and drop-off locations
    const distance = await calculateDistance(randomPickupLocation, randomDropoffLocation);
    // Calculate shipping cost based on distance
    const calculatedCost = calculateShippingCost(distance);
    setShippingCost(calculatedCost);
  };

  // Function to simulate random location selection
  const getRandomLocation = () => {
    const locations = ['Los Angeles, CA', 'New York, NY', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ'];
    return locations[Math.floor(Math.random() * locations.length)];
  };

  // Function to calculate distance between two locations
  const calculateDistance = async (pickupLocation, dropoffLocation) => {
    try {
      // Make API call to Google Maps Distance Matrix API
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${pickupLocation}&destinations=${dropoffLocation}&key=YOUR_API_KEY`
      );
      const data = await response.json();
      // Extract distance from response
      const distance = data.rows[0].elements[0].distance.value; // Distance in meters
      return distance;
    } catch (error) {
      console.error('Error calculating distance:', error);
      return null;
    }
  };

  // Function to calculate shipping cost based on distance
  const calculateShippingCost = (distance) => {
    // Example: Calculate shipping cost based on distance range
    const distanceInMiles = distance / 1609.34; // Convert distance from meters to miles
    let shippingCost;
    if (distanceInMiles < 100) {
      shippingCost = 100; // Example cost for short distance
    } else if (distanceInMiles < 500) {
      shippingCost = 200; // Example cost for medium distance
    } else {
      shippingCost = 300; // Example cost for long distance
    }
    return shippingCost;
  };

  return (
    <>
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Car Shipping Cost Calculator</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <LocationPicker
          label="Pickup Location"
          value={pickupLocation}
          onChange={(value) => setPickupLocation(value)}
        />
        <LocationPicker
          label="Drop-off Location"
          value={dropoffLocation}
          onChange={(value) => setDropoffLocation(value)}
        />
        <CarModelSelector
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        <DateSelector
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Calculate Shipping Cost
        </button>
      </form>
      {shippingCost && <Result cost={shippingCost} />}
    
    </div>
    <TaskApp/>
    </>
      
  );
};

export default App;