import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
//style
import CSS from './amountButton.module.css'

export default function AmountButton({amount, active, onClick}) {
  return (
    <button onCLick= {onClick}> 
      £ {amount} {active && <FaCircleCheck className={CSS.checkIcon}/>}
    </button>
  )
}
