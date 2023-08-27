import { useState } from "react";
import React from 'react'
import Navbar from "../components/Navbar";
import styles from "../style";




const Dollar = () => {
  const [amount, setAmount] = useState('');
  const [city, setCity] = useState('Melbourne'); // default to Melbourne since it's the only option
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/backend-endpoint', { amount, city }); // replace '/backend-endpoint' with your actual backend endpoint
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

return (
  
  <div className="bg-primary">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in AUD"
      />
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="Melbourne">Melbourne</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>

      {data && (
        // Display the infographic here based on the returned data
        <div>
          {/* Example: */}
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {/* Add more visuals and styling as needed */}
        </div>
      )}
    </div>
  </div>
);
};



export default Dollar
