import React from "react";
import "./style.css";

const Button = ({ label, onClick, type = "button" ,btnType="submit-btn"}) => {
    const style = `${btnType} mt-3`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={style}
    >
      {label}
    </button>
  );
};

export default Button;
