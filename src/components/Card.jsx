import { useState } from "react";
import React from 'react'

const CategoryCard = ({ title, days }) => {
    return (
      <div className="category-card bg-blue-gradient p-9 rounded-md shadow-md">
        <h3 className="text-xl font-semibold capitalize text-white">{title}</h3>
        <p className="mt-2 text-lg">{days} days</p>
        <p>If it's the food card, add a toggle or dropdown hereIf it's the food card, add a toggle or dropdown hereIf it's the food card, add a toggle or dropdown here</p>
        {/* If it's the food card, add a toggle or dropdown here */}
      </div>
    );
  }

export default CategoryCard