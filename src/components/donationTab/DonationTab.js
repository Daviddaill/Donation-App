import React, { useState } from 'react';
import AmountButton from '../amountButton/AmountButton';

export default function DonationTab({ type }) {
   const [activeButton, setActiveButton]= useState(null);
   
   const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId === activeButton ? null : buttonId);
    };

   const amounts = type === 'monthly' ? [6, 12, 18, 30] : [10, 40, 75, 100];

   return (
      <div>
         <p>I would like to make a {type} donation of</p>
         <div>
         {amounts.map((amount, index) => (
               <AmountButton 
                  key={index}  
                  amount={amount} 
                  onClick={() => handleButtonClick(index)}
                  active= {index === activeButton}
               />
            ))}
         </div>
      </div>
   );
}