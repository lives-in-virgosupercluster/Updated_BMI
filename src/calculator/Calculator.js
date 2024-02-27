"use client";
import React from "react";
import styles from "./calculator.module.css";
import { useState } from "react";
import WeightChart from "../chart/WeightChart";
import {useForm} from "react-hook-form";

export const Calculator = () => {
  // const [ageGroup, setAgeGroup] = useState("adult"); // Default age group
  // const [unit, setUnit] = useState("feet"); // Default unit for height
  // const [weightUnit, setWeightUnit] = useState("pounds"); // Default unit for weight
  // const [height, setHeight] = useState({ feet: 0, inches: 0, cm: 0 });
  // const [weight, setWeight] = useState(0);
  // const [childAge, setChildAge] = useState({ years: 5, months: 0 }); // Default child age
  // const [gender, setGender] = useState("male"); // Default gender
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues:{
      agecategory:"adult",
      unit:"feet",
      gender:"male",
      heightinch:0,
      heightfeet:0,
      heightcm:0,
      weightUnit:"kilograms"
      
    }
  })
  const watchAge=watch('agecategory');
  const watchUnit=watch('unit');
  const [bmivalue, setBmiValue] = useState(null);
  const [finalweight, setfinalWeight] = useState();
  const [finalheight, setfinalHeight] = useState();
  const [lowerweight, setlowerWeight] = useState();
  const [upperWeight, setUpperWeight] = useState();
  const [category, setcategory] = useState();
  // const handleAgeGroupChange = (e) => {
  //   setAgeGroup(e.target.value);
  // };
  console.log(errors.weight);
  // const handleUnitChange = (e) => {
  //   setUnit(e.target.value);
  // };

  // const handleWeightUnitChange = (e) => {
  //   setWeightUnit(e.target.value);
  // };

  // const handleChildAgeChange = (field, value) => {
  //   setChildAge({ ...childAge, [field]: value });
  // };

  // const handleGenderChange = (e) => {
  //   setGender(e.target.value);
  // };
  const onSubmit = async (data) => {
    
    // console.log("harsh");
    // if (weight < 0 || height < 0) {
    //   alert("weight or height cannot be negative");
    //   return;
    // }
    // if (weightUnit === "pounds") {
    //   if (weight > 400) {
    //     alert("weight in pound cannot exceed 400");
    //     return;
    //   }
    // } else {
    //   if (weight > 150) {
    //     alert("weight in kg cannot exceed 150");
    //     return;
    //   }
    // }
    // if (unit === "feet") {
    //   if (height.feet > 6 || height.inches > 12) {
    //     alert("invalid height");
    //     return;
    //   }
    // } else {
    //   if (height.cm > 200) {
    //     alert("invalid height");
    //     return;
    //   }
    // }
    alert(JSON.stringify(data));
    // return ;

    const queryParams = new URLSearchParams({
      weight:data.weight,
      heightfeet:data.heightfeet,
      heightinch:data.heightinch,
      heightcm:data.heightcm,
      unit:data.unit,

    
      weightUnit:data.weightUnit
      
    });

    const response = await fetch(`/api/calculate-bmi?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
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
  };

  return (
    <div className={styles.chartcalc}>
      <div className={styles.container}>
        <label className={`${styles.label} ${styles.inputdivs} `}>
          <p className={styles.bottomspace}> Select</p>
          <select
            // value={watchAge}
            // onChange={handleAgeGroupChange}
            {...register("agecategory")}
            className={`${styles.inputbig} ${styles.dropdown}`}
  >
            <option value="adult" className={styles.dropdown}>Adult (20+)</option>
            <option value="child" className={styles.dropdown}>Child (5-19)</option>
          </select>
        </label>

        {watchAge === "child" && (
          <div className={styles.inputdivs}>
            <label className={styles.label}>Age</label>
            <div className={styles.inputcontainer}>
              <input
                // value={childAge.years}
                // onChange={(e) => handleChildAgeChange("years", e.target.value)}
                className={`${styles.input} ${styles.inputsmall}`}
                {...register("year",{required:true,min:5,max:19})}
             
                
              />
              
                <div className={styles.fakeYear}>months</div>
                {errors.year && errors.year.type==='required' && <span className={styles.error}>This field is required</span>}
               {errors.year && errors.year.type==='min' && <span className={styles.error}>year should be above 4</span>}
               {errors.year && errors.year.type==='max' && <span className={styles.error}>year should be below 20</span>}
              <input
                // value={childAge.months}
                // onChange={(e) => handleChildAgeChange("months", e.target.value)}
                className={`${styles.input} ${styles.inputsmall}`}
                {...register("month",{required:true,min:0,max:12})}
              
               
              />
             
               <div className={styles.fakeMonth}>years</div>
               {errors.month && errors.month.type==='required' && <span className={styles.error}>This field is required</span>}
               {errors.month && errors.month.type==='min' && <span className={styles.error}>month should not be negative</span>}
               {errors.month && errors.month.type==='max' && <span className={styles.error}>month should be below 13</span>}
            </div>
          </div>
        )}

        <label className={styles.label}>
          <p className={styles.bottomspace}>Height</p>
        </label>
        <div className={`${styles.radiocontainer} ${styles.inputdivs}`}>
          <div className={styles.radalign}>
            <input
              type="radio"
              value="feet"
              // checked={unit === "feet"}
              // onChange={handleUnitChange}
              className={`${styles.radinput} ${styles.radiobutton}`}
              {...register("unit",{required:true})}
            />

            <p className={styles.para}> Feet & Inches</p>
          </div>
          <div className={styles.radalign}>
            <input
              type="radio"
              value="cm"
              // checked={unit === "cm"}
              // onChange={handleUnitChange}
              className={`${styles.radinput} ${styles.radiobutton}`}
              {...register("unit",{required:true})}
            />
            <p className={styles.para}> Centimeters</p>
          </div>
        </div>
        {watchUnit === "feet" && (
          <div className={`${styles.inputcontainer} ${styles.inputdivs}`}>
            <input
              // value={height.feet}
              // onChange={(e) => setHeight({ ...height, feet: e.target.value })}
              className={`${styles.input} ${styles.inputsmall}`}
              {...register("heightfeet",{required:true, min:5,max:6})}
            />
            <div className={styles.fakeft}>ft</div>
            {errors.heightfeet && errors.heightfeet.type==='required' && <span className={styles.errorFeet}>This field is required</span>}
               {errors.heightfeet && errors.heightfeet.type==='min' && <span className={styles.errorFeet}>should be more than 4</span>}
               {errors.heightfeet && errors.heightfeet.type==='max' && <span className={styles.errorFeet}>should be less than 7</span>}
            <input
              // value={height.inches}
              // onChange={(e) => setHeight({ ...height, inches: e.target.value })}
              
              {...register("heightinch",{required:true, min:0,max:11})}
              className={`${styles.input} ${styles.inputsmall}`}
            />
            <div className={styles.fakein}>in</div>
            {errors.heightinch && errors.heightinch.type==='required' && <span className={styles.errorInch}>This field is required</span>}
               {errors.heightinch && errors.heightinch.type==='min' && <span className={styles.errorInch}>should not be negative</span>}
               {errors.heightinch && errors.heightinch.type==='max' && <span className={styles.errorInch}>should be less than 12</span>}
          </div>
        )}
        {watchUnit === "cm" && (
          <div className={`${styles.inputcontainer} ${styles.inputdivs}`}>
            <input
              // value={height.cm}
              // onChange={(e) => setHeight({ ...height, cm: e.target.value })}
              // className={styles.input}
              {...register("heightcm",{required:true, min:120,max:200})}
              className={`${styles.input} ${styles.inputbig}`}
            />
             {errors.heightcm && errors.heightcm.type==='required' && <span className={styles.error}>This field is required</span>}
               {errors.heightcm && errors.heightcm.type==='min' && <span className={styles.error}>should be more than 119</span>}
               {errors.heightcm && errors.heightcm.type==='max' && <span className={styles.error}>should be less than 201</span>}
          </div>
        )}
        <div>
          <label className={styles.label}>
            <p className={styles.bottomspace}> Weight</p>
          </label>
          <div className={`${styles.radiocontainer} ${styles.inputdivs}`}>
            <div className={styles.radalign}>
              <input
                type="radio"
                value="kilograms"
                // checked={weightUnit === "kilograms"}
                // onChange={handleWeightUnitChange}
                className={`${styles.radinput} ${styles.radiobutton}`}
                {...register("weightUnit",{required:true})}
              />

              <p className={styles.para}>Kilograms</p>
            </div>
            <div className={styles.radalign}>
              <input
                type="radio"
                value="pounds"
                // checked={weightUnit === "pounds"}
                // onChange={handleWeightUnitChange}
                className={`${styles.radinput} ${styles.radiobutton}`}
                {...register("weightUnit",{required:true})}
              />
              <p className={styles.para}> Pounds</p>
            </div>
          </div>
        </div>
        <div>
          <input
            // value={weight}
            // onChange={(e) => setWeight(e.target.value)}
            className={`${styles.input} ${styles.inputbig}`}
            {...register("weight",{required:true,min:50,max:100})}
          />
           {errors.weight && errors.weight.type==='required' && <span className={styles.errorWeight}>This field is required</span>}
               {errors.weight && errors.weight.type==='min' && <span className={styles.errorWeight}>should not be less than 50</span>}
               {errors.weight && errors.weight.type==='max' && <span className={styles.errorWeight}>should not be more than 100</span>}
        </div>
        <div className={styles.inputdivs}>
          <label className={`${styles.label} ${styles.gender}`}>
            <p className={styles.bottomspace}>Gender:</p>
            <div className={styles.gendercontainer}>
              <div className={styles.radalign}>
                <input
                  type="radio"
                  value="male"
                  // checked={gender === "male"}
                  // onChange={handleGenderChange}
                 className= { styles.radiobutton}
                 {...register("gender",{required:true})}
                />
                <p className={styles.para}>Male</p>
              </div>
              <div className={styles.radalign}>
                <input
                  type="radio"
                  value="female"
                  // checked={gender === "female"}
                  // onChange={handleGenderChange}
                  className= { styles.radiobutton}
                  {...register("gender",{required:true})}
                />
                <p className={styles.para}> Female</p>
              </div>
            </div>
          </label>
        </div>
        <button type="submit" onClick={handleSubmit(onSubmit)} className={styles.btn}>
          Calculate
        </button>
      </div>
      <div className={styles.chart}>
        {bmivalue ? (
          <WeightChart
            bmiValue={bmivalue}
            height={finalheight}
            lower={lowerweight}
            upper={upperWeight}
            category={category}
          />
        ) : (
          <div className={styles.textdiv}>
            <p className={styles.text}>Use this calculator to check your body mass index(BMI)</p>
            <p className={styles.text}>which can be a helpful tool in determining your weight </p>
            <p className={styles.text}>category. Or,you use it to calculate your child's BMI</p>
          </div>
        )}
      </div>
    </div>
  );
};
