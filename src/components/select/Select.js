import React from 'react';
import styles from "./select.module.css";

const Select = ({ options, register, isstyle }) => {
  console.log(isstyle);
  return (
    <div>
      <select  className={!isstyle ? `${styles.inputbig} ${styles.dropdown}` : `${styles.inputbig} ${styles.dropdown} ${styles.customstyle}`} {...register}>
        {options.map((option, index) => (
          <option key={index} value={option.value} className={!isstyle ? styles.dropdown : `${styles.dropdown} ${styles.customoption}`}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
