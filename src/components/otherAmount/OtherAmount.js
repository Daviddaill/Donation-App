// OtherAmount.js
import React, { useState } from 'react';

export default function OtherAmount({ customAmount, onSelect }) {
  const handleInputChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <span>£</span>
      <input
        type="number"
        value={customAmount}
        onChange={handleInputChange}
        placeholder="Other amount"
      />
    </div>
  );
}
