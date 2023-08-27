import React from 'react'
import Navbar from "../components/Navbar";
import styles from "../style";

const Compare = () => (
  <div className="bg-primary">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>
);


export default Compare
