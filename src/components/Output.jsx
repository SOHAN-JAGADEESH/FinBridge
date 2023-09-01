import React from 'react';
import CategoryCard from "./Card";

const Output = ({ response }) => {
    if (!response || !response.results) {
        return <div>No data received.</div>;
    }

    const itemsData = [
      { name: "Coffee", description: "Your can afford coffee for the number of days mentioned above, given you consume 2 cups of coffee a day" },
      { name: "Housing", description: "Your can afford to pay rent for the number of days mentioned above" },
      { name: "Transport", description: "Your can afford transportation for the number of days mentioned above" },
      { name: "Food and Non-Alcoholic Beverages", description: "Your can afford food for the number of days mentioned above" },
      { name: "All Expenses Included", description: "You can afford to fulfill all expenditures for the number of days mentioned above." },
      { name: "Utilities", description: "Your can afford to pay for utilites for the number of days mentioned above" },
      // ... other items ...
    ];

    const adjustmentMultipliers = [1, 1.5, 1.2 , 1, 2.5 , 3];

    return (
      <div className="output-section mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {response.results.map((value, index) => (
          <CategoryCard key={index}
          title={itemsData[index].name}
          days= {Math.round(value * adjustmentMultipliers[index] )}
          description={itemsData[index].description} />
        ))}
      </div>
    );
}

export default Output;