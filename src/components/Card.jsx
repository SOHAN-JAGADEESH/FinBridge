import { useState } from "react";
import React from 'react'

const CategoryCard = ({ title, days }) => {
    return (
      <div className="category-card bg-white p-4 rounded-md shadow-md">
        <h3 className="text-xl font-semibold capitalize">{title}</h3>
        <p className="mt-2 text-lg">{days} days</p>
        {/* If it's the food card, add a toggle or dropdown here */}
      </div>
    );
  }

export default CategoryCard