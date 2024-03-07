import React from 'react';
import styles from "./select.module.css";

const Select = ({ options, register, style }) => {
  return (
    <div>
      <select style={style} className={!style ? `${styles.inputbig} ${styles.dropdown}` : ''} {...register}>
        {options.map((option, index) => (
          <option key={index} value={option.value} className={!style ? styles.dropdown : ''}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
