// DonationTab.js
import React, { useState } from 'react';
//Component
import AmountButton from '../amountButton/AmountButton';
import OtherAmount from '../otherAmount/OtherAmount';
//icon
import { FaLock } from "react-icons/fa";
//style
import CSS from './donationTab.module.css'
import MonthlyTabFooter from '../tabFooter/MonthlyTabFooter';
import OneOffTabFooter from '../tabFooter/OneOffTabFooter';

export default function DonationTab({ type, onTabChange }) {
   const [activeButton, setActiveButton] = useState(1);
   const [customAmount, setCustomAmount] = useState('');

   const handleButtonClick = (buttonId, amount) => {
      setActiveButton(buttonId === activeButton ? null : buttonId);
      setCustomAmount(amount);
   };

   const handleOtherAmountSelect = (amount) => {
      console.log(`Selected other amount: £${amount}`);
      // Add your logic for handling the selected other amount
      setActiveButton(null); // Clear the active button when a custom amount is selected
      setCustomAmount(amount);
      // Set the custom amount in the DonationTab state
   };
   const amounts = type === 'monthly' ? [6, 12, 18, 30] : [10, 40, 75, 100];
   const donationAmount= customAmount || (activeButton !== null ? amounts[activeButton] : 0)
   return (
      <div className={CSS.main_container}>
         <div className={CSS.body}>
         <p >I would like to make a {type} donation of</p>

         <div className={CSS.button_container}>
            {amounts.map((amount, index) => (
               <AmountButton
                  key={index}
                  amount={amount}
                  onClick={() => handleButtonClick(index, amount)}
                  active={index === activeButton}
                  
               />
            ))}
            <OtherAmount 
               onSelect={handleOtherAmountSelect} />
            <button className={CSS.donate_button}>
               Donate £
               {/* Display the custom amount or the selected amount from AmountButton */}
               {donationAmount}{' '}
               {type === 'monthly' ? 'monthly' : 'today'} {' '}
               <FaLock className={CSS.lock_icon} />
            </button>
         </div>
         <div>
            <p className={CSS.banner}> 
              £ {donationAmount}  {type==='monthly'? 'Could help our Animal Rescue Team take on an urgent animal rescue': 'Could help answer an emmergency call to our Animal Rescue'}
            </p>
         </div>
         </div>

         <div className={CSS.tab_footer}>
              <p>
              {
               type==='monthly'? <MonthlyTabFooter onClick={() => onTabChange('Tab 2')}/>: <OneOffTabFooter onClick={() => onTabChange('Tab 1')}/>
              } 
               </p> 

         </div>
      </div>

   );
}
