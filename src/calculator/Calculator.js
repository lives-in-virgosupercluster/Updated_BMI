"use client";
import React from 'react'
import styles from "./calculator.module.css"
import { useState } from 'react';
import WeightChart from '../chart/WeightChart';

export const Calculator = () => {
    const [ageGroup, setAgeGroup] = useState('adult'); // Default age group
    const [unit, setUnit] = useState('feet'); // Default unit for height
    const [weightUnit, setWeightUnit] = useState('pounds'); // Default unit for weight
    const [height, setHeight] = useState({ feet: 0, inches: 0, cm: 0 });
    const [weight, setWeight] = useState(0);
    const [childAge, setChildAge] = useState({ years: 5, months: 0 }); // Default child age
    const [gender, setGender] = useState('male'); // Default gender
    const [bmivalue,setBmiValue]=useState(null);
    const[finalweight,setfinalWeight]=useState();
    const[finalheight,setfinalHeight]=useState();
    const[lowerweight,setlowerWeight]=useState();
    const[upperWeight,setUpperWeight]=useState();
    const[category,setcategory]=useState();
    const handleAgeGroupChange = (e) => {
      setAgeGroup(e.target.value);
    };
  
    const handleUnitChange = (e) => {
      setUnit(e.target.value);
    };
  
    const handleWeightUnitChange = (e) => {
      setWeightUnit(e.target.value);
    };
  
    const handleChildAgeChange = (field, value) => {
      setChildAge({ ...childAge, [field]: value });
    };
  
    const handleGenderChange = (e) => {
      setGender(e.target.value);
    };
    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log("harsh");
      if(weight<0 || height<0){
        alert("weight or height cannot be negative");
        return ;
      }
      if(weightUnit==="pounds"){
        if(weight>400){
          alert("weight in pound cannot exceed 400");
          return ;
        }
      }
      else{
        if(weight>150){
          alert("weight in kg cannot exceed 150");
          return ;
        }
      }
      if(unit==="feet"){
        if(height.feet>6 || height.inches>12){
          alert("invalid height");
          return ;

        }

      }
      else{
        if(height.cm>200){
          alert("invalid height");
          return ;
        }

      }

      const queryParams = new URLSearchParams({
        weight,
        height: JSON.stringify(height),
        weightUnit,
        unit,
      });
      
      const response = await fetch(`/api/calculate-bmi?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
       
       if(response.ok){
        const data=await response.json();
        console.log(data);
        setBmiValue(data.bmi);
       // console.log(data.height);
        setfinalHeight(data.height);
       // console.log(finalheight);
        setfinalWeight(data.weight);
        setlowerWeight(data.lower);
        setUpperWeight(data.upper);
        setcategory(data.category);
       }
    }
  
    return (
      <div className={styles.chartcalc}>
      <div className={styles.container}>
       
       
          <label className={styles.label}>
          <p className={styles.bottomspace}> Select</p> 
            <select value={ageGroup} onChange={handleAgeGroupChange} className={styles.dropdown}>
              <option value="adult">Adult (20+)</option>
              <option value="child">Child (5-19)</option>
            </select>
          </label>
        
        {ageGroup === 'child' && (
            <div>
          
            <label className={styles.label}>
              Age:
              </label>
              <div className={styles.inputcontainer}>
              <input
            
                value={childAge.years}
                onChange={(e) => handleChildAgeChange('years', e.target.value)}
                className={styles.input}
                placeholder='Years'
                style={{'textAlign':'center'}}
              />
              
              <input
               
                value={childAge.months}
                onChange={(e) => handleChildAgeChange('months', e.target.value)}
                className={styles.input}
                placeholder='Months'
                style={{'textAlign':'center'}}
              />
           
          
          </div>
          </div>
        )}
        
          <label className={styles.label}>
            <p className={styles.bottomspace}>Height:</p>
            </label>
            <div className={styles.radiocontainer}>
                <div className={styles.radalign}>
                <input
              type="radio"
              value="feet"
              checked={unit === 'feet'}
              onChange={handleUnitChange}
              className={styles.radinput}
           
            />
                
            <p className={styles.para}> Feet & Inches</p> 
            </div>
            <div className={styles.radalign}>
            
           
            
           
            
        
            <input
              type="radio"
              value="cm"
              checked={unit === 'cm'}
              onChange={handleUnitChange}
              className={styles.radinput}

            
            />
            <p className={styles.para}>  Centimeters</p>
            </div>
            
         
        
        </div>
        {unit === 'feet' && (
          <div className={styles.inputcontainer}>
            
              <input
                
                value={height.feet}
                onChange={(e) => setHeight({ ...height, feet: e.target.value })}
                className={styles.input}
                placeholder='ft'
              />
           
         

              <input
               
                value={height.inches}
                onChange={(e) => setHeight({ ...height, inches: e.target.value })}
                className={styles.input}
                placeholder='In'
              />
           
          </div>
        )}
        {unit === 'cm' && (
          <div className={styles.inputcontainer}>
           
              <input
               
                value={height.cm}
                onChange={(e) => setHeight({ ...height, cm: e.target.value })}
                className={styles.input}
                placeholder='cm'
              />
            
          </div>
        )}
        <div>
          <label className={styles.label}>
        <p className={styles.bottomspace}>   Weight</p> 
        </label>
        <div className={styles.radiocontainer}>
            <div className={styles.radalign}>
            <input
              type="radio"
              value="kilograms"
              checked={weightUnit === 'kilograms'}
              onChange={handleWeightUnitChange}
              className={styles.radinput}
           
            />
        
        <p className={styles.para}>Kilograms</p>
        </div>
        <div className={styles.radalign}>
        <input
              type="radio"
              value="pounds"
              checked={weightUnit === 'pounds'}
              onChange={handleWeightUnitChange}
              className={styles.radinput}
            
            />
        <p className={styles.para}> Pounds</p>
            
            
           
           
           
            </div>
            
          
        
        </div>
        </div>
        <div>
         

            <input
              
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={styles.input}
            />
          
          
        </div>
        <div>
          <label className={styles.label}>
           <p className={styles.bottomspace}>Gender:</p> 
           <div className={styles.gendercontainer}>
           <div className={styles.radalign}>
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
          <p className={styles.para}>Male</p> 
           </div>
           <div className={styles.radalign}>
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
           <p className={styles.para}> Female</p>
            </div>
            </div>
          </label>
        </div>
        <button type="submit" onClick={handleSubmit} className={styles.btn}>
          Calculate
        </button>
      </div>
      <div className={styles.chart}>
      {bmivalue ? (
        <WeightChart bmiValue={bmivalue} height={finalheight} lower={lowerweight} upper={upperWeight} category={category} />
      ) : (
        <>
        <p>Use this calculator to check your body mass index(BMI)</p>
        <p>which can be a helpful tool in determining your weight </p>
        <p>category. Or,you use it to calculate your child's BMI</p>
        </>
      )}
        </div>
      </div>
    );
  
}