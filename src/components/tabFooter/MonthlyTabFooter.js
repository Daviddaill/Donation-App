import React from 'react'
//style
import CSS from './tabFooter.module.css'
//images
import directDebit from '../../assets/images/direct-debit-1-logo-png-transparent.png'
import fundRaising from '../../assets/images/fundraising-regulator-logo.png'

export default function MonthlyTabFooter() {
  return (
    <div className={CSS.main_container}>
      <p >I would like to make a one-off donation</p>
      <p>All direct debit are protected by the Direct Debit Guarantee</p>
      <div className={CSS.images}>
         <img src={directDebit} alt='we accept direct debit'/>
         <img src={fundRaising} alt='we apply fundraising regulation'/>
      </div>
    </div>
  )
}