import React, { useState } from 'react';
//style
import CSS from './otherAmount.module.css'

export default function OtherAmount({ customAmount, onSelect }) {
  const handleInputChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className={CSS.main_container}>
      <span>£</span>
      <input
        type="number"
        value={customAmount}
        onChange={handleInputChange}
        placeholder="Other amount"
        className={CSS.input}
      />
    </div>
  );
}
