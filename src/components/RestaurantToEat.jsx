import React from 'react';

const TopRestaurants = () => {
  const cities = [
    "Chandigarh",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Chennai",
    "Jaipur",
    "Ahmedabad",
    "Surat",
    "Lucknow"
  ];

  return (
    <div className='container2'>
      {cities.map((cities, index) => (
        <button key={index}>
          Top Restaurant in {cities}
        </button>
      ))}
    </div>
  );
}

export default TopRestaurants;
