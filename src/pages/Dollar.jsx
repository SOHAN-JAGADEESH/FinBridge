import { useState, useEffect } from "react";
import React from 'react'
import Navbar from "../components/Navbar";
import styles from "../style";
import Input from "../components/Input";
import Output from "../components/Output";


const Dollar = () => {
  const [amount, setAmount] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (amount !== null) {
      const integerAmount = parseInt(amount, 10);
      // Define the API endpoint and options
      const apiUrl = "https://g0d2ycfkvg.execute-api.ap-southeast-2.amazonaws.com/test/users";
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "number" : integerAmount })
      };

      // Make the API call
      fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data && data.statusCode === 200) {
              let parsedBody = JSON.parse(data.body);
              if (parsedBody && parsedBody.results) {
                  setResponse(parsedBody);
              }
          } else {
              console.error('Unexpected data format received:', data);
          }
      })
      .catch(error => console.error('There was an error!', error));
    }
  }, [amount]);

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative">
  
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-gradient ss:leading-[80.8px] leading-[65px]">
            Understanding Your Money's Worth in Australia
          </h2>
          <p className="font-poppins text-[20px] text-white leading-[28px] mt-4">
            Are you an international student in India planning to study or travel to Australia? Understanding the purchasing power of your money in a foreign country can be a challenge. Our tool is designed to provide you with a glimpse of what your dollars can get you in Australia.
          </p>
          <p className="font-poppins text-[20px] text-white leading-[28px] mt-4">
            Simply enter an amount in AUD (Australian Dollars), and we'll show you an estimate of how many days of essentials like food, housing, transportation, and more, that amount can cover in Australia. This can help you budget effectively and make informed decisions about your expenses while staying in the country.
          </p>
          <p className="font-poppins text-[16px] text-gradient leading-[26px] mt-4">
            Remember, these are approximate values based on average costs and are meant to serve as a general guideline. Actual expenses can vary based on individual preferences, location, and current market conditions.
         </p>
         <br/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} flex justify-center`}>
        <div className={`w-full flex justify-center`}>
          <Input setAmount={setAmount} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {response && <Output response={response} />}
        </div>
      </div>

    </div>
  );
}

export default Dollar;
