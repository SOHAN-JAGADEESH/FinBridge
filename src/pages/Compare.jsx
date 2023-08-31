import React from 'react'
import Navbar from "../components/Navbar";
import styles from "../style";
import { useState, useEffect } from "react";

const Compare = () => {
  const [showHowToGuide, setShowHowToGuide] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [hourlyWage, setHourlyWage] = useState(null);
  const [confirmedHourlyWage, setConfirmedHourlyWage] = useState(null); // New state

  const closeModal = () => {
      setShowHowToGuide(false);
      setShowBenefits(false);
  };

  // If hourlyWage is provided, calculate the monthly salary, otherwise use the default
  const melbourneMonthlySalary = confirmedHourlyWage 
  ? confirmedHourlyWage * 24 * 4 
  : 4000; // default value

  const handleHourlyWageSubmit = () => {
    // Here, we just trigger a re-render which will use the latest hourly wage to update the displayed values
    setConfirmedHourlyWage(hourlyWage);
    console.log("hello")
  };


  // Hardcoded data for Melbourne and India
  const melbourneData = {
      averageMonthlySalary: 4000,
      rent: 1500,
      foodCost: 600,
      transportationCosts: 200,
      utilities: 300
  };

  const indiaData = {
      averageMonthlySalary: 30000,
      rent: 10000,
      foodCost: 5000,
      transportationCosts: 3000,
      utilities: 2000
  };

  const melbourneRatios = {
      rent: (melbourneData.rent / melbourneData.averageMonthlySalary).toFixed(2),
      food: (melbourneData.foodCost / melbourneData.averageMonthlySalary).toFixed(2),
      transport: (melbourneData.transportationCosts / melbourneData.averageMonthlySalary).toFixed(2),
      utilities: (melbourneData.utilities / melbourneData.averageMonthlySalary).toFixed(2)
  };

  const indiaRatios = {
      rent: (indiaData.rent / indiaData.averageMonthlySalary).toFixed(2),
      food: (indiaData.foodCost / indiaData.averageMonthlySalary).toFixed(2),
      transport: (indiaData.transportationCosts / indiaData.averageMonthlySalary).toFixed(2),
      utilities: (indiaData.utilities / indiaData.averageMonthlySalary).toFixed(2)
  };

  return (
      <div className="bg-primary min-h-screen relative">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                  <Navbar />
                  <div className="mt-8 text-center">
                      <h2 className="font-poppins font-semibold text-[42px] text-gradient leading-[65px]">Cost Comparison for International Indian Students in Melbourne</h2>
                      <p className="font-poppins text-[20px] text-white leading-[28px] mt-4">
                          Navigating a new country can be challenging, especially when it comes to expenses. This tool provides a comparative analysis of living costs between Melbourne and India, helping you grasp a clearer picture of your finances in Australia.
                      </p>
                      <p className="font-poppins text-[20px] text-white leading-[28px] mt-4">
                          <button className="text-blue-600 underline" onClick={() => setShowHowToGuide(true)}>How to use this tool?</button>
                          <span className="mx-2">|</span>
                          <button className="text-blue-600 underline" onClick={() => setShowBenefits(true)}>Benefits</button>
                      </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Melbourne</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="hourlyWage">
                                Enter your hourly wage (AUD):
                            </label>
                            <div className="flex">
                              <input 
                                  type="number" 
                                  id="hourlyWage" 
                                  name="hourlyWage" 
                                  onChange={e => setHourlyWage(parseFloat(e.target.value))}
                                  placeholder="e.g. 20"
                                  className="mt-1 p-2 border rounded-md flex-grow"
                              />
                              <button 
                                  onClick={handleHourlyWageSubmit}
                                  className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
                              >
                                  Submit
                              </button>
                            </div>
                        </div>
                        <p>Average Monthly Salary (based on your input): ${melbourneData.averageMonthlySalary.toFixed(2)}</p>
                        <p>Rent (Ratio: {melbourneRatios.rent}): ${melbourneData.rent}</p>
                        <p>Food Cost (Ratio: {melbourneRatios.food}): ${melbourneData.foodCost}</p>
                        <p>Transportation Costs (Ratio: {melbourneRatios.transport}): ${melbourneData.transportationCosts}</p>
                        <p>Utilities (Ratio: {melbourneRatios.utilities}): ${melbourneData.utilities}</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h3 className="text-xl font-bold mb-4">India</h3>
                        <p>Average Monthly Salary: ₹{indiaData.averageMonthlySalary}</p>
                        <p>Rent (Ratio: {indiaRatios.rent}): ₹{indiaData.rent}</p>
                        <p>Food Cost (Ratio: {indiaRatios.food}): ₹{indiaData.foodCost}</p>
                        <p>Transportation Costs (Ratio: {indiaRatios.transport}): ₹{indiaData.transportationCosts}</p>
                        <p>Utilities (Ratio: {indiaRatios.utilities}): ₹{indiaData.utilities}</p>
                    </div>
                  </div>
              </div>
          </div>

          {/* How-to Guide Modal */}
          {showHowToGuide && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                  <div className="bg-white p-8 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
                      <h3 className="text-xl font-bold mb-4">How to use this tool?</h3>
                      <ol className="list-decimal ml-8">
                          <li className="mb-2">Observe the Columns: On the left, you'll find the average costs in Melbourne, and on the right, the average costs in India.</li>
                          <li className="mb-2">Understand the Ratios: For every cost item, there's a ratio that indicates its proportion to the average monthly salary.</li>
                          <li className="mb-2">Make Informed Decisions: By understanding these comparisons, you can better budget and plan for your time in Melbourne.</li>
                      </ol>
                      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

            {/* Benefits Modal */}
            {showBenefits && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Benefits</h3>
                        <ul className="list-disc ml-8">
                            <li className="mb-2">Informed Budgeting: Understand how your expenses in Melbourne might compare to those in India.</li>
                            <li className="mb-2">Financial Planning: Use the ratios to understand where your salary might go.</li>
                            <li className="mb-2">Peace of Mind: With knowledge, you can focus on your studies and enjoy your time in Melbourne.</li>
                        </ul>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Compare