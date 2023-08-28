import { useState } from "react";
import React from 'react'


const Input = ({ setAmount }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = () => {
      setAmount(inputValue);
    };
  
    return (
      <div className="input-section w-full max-w-md">
        <input 
          type="number" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter amount in AUD" 
          className="w-full p-2 border rounded-md"
        />
        <button 
          onClick={handleSubmit} 
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Calculate
        </button>
      </div>
    );
  }

  export default Input