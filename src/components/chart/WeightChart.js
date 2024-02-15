
import React from 'react';
import styles from "./chart.module.css";

const WeightChart = ({bmiValue,height,lower,upper,category}) => {
  // BMI categories and their ranges
 
 // let height1=height;
  // let category;
  // let upper;
  // let lower;
  // if(bmiValue<18.5){
  //   category="UnderWeight";
  // }
  // else if(bmiValue>=18.5 && bmiValue<=24.9){
  //   category="Healthy"
 
  // }
  // else if(bmiValue>=24.9 && bmiValue<=29.9){
  //   category="OverWeight";
   
    
  // }
  // else if(bmiValue>29.9){
  //   category="Obese";
    
  // }
  // //console.log(bmi);
  
  // lower=18.5*(height)*(height);
  // upper=24.9*(height)*(height);
  // lower=lower.toFixed(0);
  // upper=upper.toFixed(0);
  // console.log(lower);
  


 
  return (
   
    <div className={styles.chartcont}>
       <h3 className={styles.para1}>Your Body Mass Index(BMI) is <span className={styles.text}>{bmiValue}</span></h3>
      <h3 className={styles.para2}>According to your height your weight is in the</h3>
      <h3 className={styles.para3}><span className={styles.text}>{category}</span> Category</h3>
      
    <div className={styles.container}>
    <div className={styles.underweight}>
      <div className={styles.undercolor}>
      {category === "UnderWeight" ? (
  // Render content when category is "Healthy"
  <div className={styles.cursor}>
    {/* Your content for "Healthy" */}
  
    {/* Additional elements as needed */}
  </div>
) : (
  // Render an empty fragment for other categories
  <>
    {/* Nothing to render here */}
  </>
)}
      </div>
      <div className={styles.heading}>
      UnderWeight
      </div>
      <div className={styles.range}>(Under 18)</div>
      
    </div>
    <div className={styles.healthy}>
    <div className={styles.healthcolor}>
    {category === "Healthy" ? (
  // Render content when category is "Healthy"
  <div className={styles.cursor}>
    {/* Your content for "Healthy" */}
  
    {/* Additional elements as needed */}
  </div>
) : (
  // Render an empty fragment for other categories
  <>
    {/* Nothing to render here */}
  </>
)}
    </div>
      <div className={styles.heading}>
        Healthy

      </div>
      <div className={styles.range}>
        (18.5-24.9)
      </div>
      
    </div>
    <div className={styles.overweight}>
    <div className={styles.overcolor}>
    {category === "OverWeight" ? (
  // Render content when category is "Healthy"
  <div className={styles.cursor}>
    {/* Your content for "Healthy" */}
  
    {/* Additional elements as needed */}
  </div>
) : (
  // Render an empty fragment for other categories
  <>
    {/* Nothing to render here */}
  </>
)}
    </div>
      <div className={styles.heading}>
        OverWeight
      </div>
      <div className={styles.range}>
       (25.0-29.9)

      </div>
    </div>
    <div className={styles.obese}>
    <div className={styles.obesecolor}>
    {category === "Obese" ? (
  // Render content when category is "Healthy"
  <div className={styles.cursor}>
    {/* Your content for "Healthy" */}
  
    {/* Additional elements as needed */}
  </div>
) : (
  // Render an empty fragment for other categories
  <>
    {/* Nothing to render here */}
  </>
)}
    </div>
      <div className={styles.heading}>
     Obese
      </div>
      <div className={styles.range}>
        (30.0 & above)
      </div>
    </div>
  </div>
  <h3 className={styles.para4}>Your Weight should be between {lower}kgs and {upper}kgs</h3>
  </div>
  );
};

export default WeightChart;


