import { useState } from "react";
import React from 'react'

const CategoryCard = ({ title, days, description }) => {
    return (
      <div className="category-card bg-blue-gradient p-9 rounded-md shadow-md">
        <h3 className="text-xl text-center font-semibold capitalize text-black">{title}</h3>
        <p className="mt-2 text-lg text-bold text-center font-bold">{days} days</p>
        <br/>
        <p className="text-center">{description}</p>
        {/* If it's the food card, add a toggle or dropdown here */}
      </div>
    );
  }

export default CategoryCard