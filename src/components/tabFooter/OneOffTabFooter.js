import React from 'react'
//style
import CSS from './tabFooter.module.css'
//images
import visa from '../../assets/images/visa-logo.png'
import paypal from '../../assets/images/paypal-logo.png'
import masterCard from '../../assets/images/mastercard-logo.png'
import fundRaising from '../../assets/images/fundraising-regulator-logo.png'

export default function OneOffTabFooter() {
  return (
    <div className={CSS.main_container}>
      <p >I would like to give monthly</p>
      <div className={CSS.images}>
         <img src={visa} alt='we accept Visa'/>
         <img src={masterCard} alt='we accept Master Card'/>
         <img src={paypal} alt='we accept Paypal'/>
         <img src={fundRaising} alt='we apply fundraising regulation'/>
      </div>
    </div>
  )
}
