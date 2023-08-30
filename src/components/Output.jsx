import { useState } from "react";
import React from 'react'
import CategoryCard  from "./Card";

const Output = ({ amount }) => {
    const data = {
      food: 7,
      housing: 10,
      transportation: 5,
      utilities: 12,
      coffee: 15
    };
  
    return (
      <div className="output-section mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.keys(data).map(category => (
          <CategoryCard key={category} title={category} days={data[category]} />
        ))}
      </div>
    );
  }

export default Output