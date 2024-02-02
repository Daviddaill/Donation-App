import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

//style
import CSS from './amountButton.module.css'

export default function AmountButton({amount, active, onClick}) {
  return (
    <button 
      className={active ? CSS.activeButton : null} onClick={onClick}
      onCLick= {onClick}> 
      £ {amount} {active && <FaCheckCircle />}
    </button>
  )
}
