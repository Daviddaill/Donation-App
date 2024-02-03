import React from 'react'
//style
import CSS from './tabFooter.module.css'
//images
import directDebit from '../../assets/images/direct-debit-1-logo-png-transparent.png'
import fundRaising from '../../assets/images/fundraising-regulator-logo.png'

export default function MonthlyTabFooter({onClick}) {
  return (
    <div className={CSS.main_container}>
      <p onClick={onClick} className={CSS.tab_link}>I would like to make a one-off donation</p>
      <p className={CSS.middle_text}>All direct debit are protected by the Direct Debit Guarantee</p>
      <div className={CSS.images}>
         <img className={CSS.image} src={directDebit} alt='we accept direct debit' />
         <img className={CSS.image} src={fundRaising} alt='we apply fundraising regulation'  />
      </div>
    </div>
  )
}