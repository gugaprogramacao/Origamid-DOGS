import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, ...props }) => (
  <button {...props} className={styles.button}>
    {children}
  </button>
);

export default Button;
