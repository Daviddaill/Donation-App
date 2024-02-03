import React from 'react'
//style
import CSS from './tabFooter.module.css'
//images
import visa from '../../assets/images/visa-logo.png'
import paypal from '../../assets/images/paypal-logo.png'
import masterCard from '../../assets/images/mastercard-logo.png'
import fundRaising from '../../assets/images/fundraising-regulator-logo.png'

export default function OneOffTabFooter({onClick}) {
  return (
    <div className={CSS.main_container}>
      <p onClick={onClick} className={CSS.tab_link} >I would like to give monthly</p>
      <div className={CSS.images}>
         <img src={visa} alt='we accept Visa'  width='30px'/>
         <img src={masterCard} alt='we accept Master Card'  width='30px'/>
         <img src={paypal} alt='we accept Paypal'  width='30px'/>
         <img src={fundRaising} alt='we apply fundraising regulation'  width='60px'/>
      </div>
    </div>
  )
}
