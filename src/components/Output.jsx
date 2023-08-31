import React from 'react';
import CategoryCard from "./Card";

const Output = ({ response }) => {
    if (!response || !response.results) {
        return <div>No data received.</div>;
    }

    const itemNames = ["coffee", "housing", "Transport", "Food and non-alcoholic beverages", "Months with entire expenditure", "Utilities"];

    return (
      <div className="output-section mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {response.results.map((value, index) => (
          <CategoryCard key={index} title={itemNames[index] || `Item ${index + 1}`} days={value} />
        ))}
      </div>
    );
}

export default Output;