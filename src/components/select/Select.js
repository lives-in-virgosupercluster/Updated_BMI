import React from 'react';
import styles from "./select.module.css";
const Select = ({ options, register }) => {
  return (
    <div>
      <select    className={`${styles.inputbig} ${styles.dropdown}`} {...register}>
        {options.map((option, index) => (
          <option key={index} value={option.value} className={styles.dropdown}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
