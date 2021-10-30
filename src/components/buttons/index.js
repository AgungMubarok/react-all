import React from 'react';

export const Buttons = ({background}) => {
  return (
    <div className={`${background === "red" ? "button-red" : "button-blue"}`}>
      test button
    </div>
  );
};