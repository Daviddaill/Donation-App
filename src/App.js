import React, { useState } from 'react';
//components
import DonationTab from './components/donationTab/DonationTab';
//style
import './App.css';
//assets
import panda from './assets/images/panda.jpg'
const App = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='app'>
      <header >
      <h1 className='main_title'>
        Technical Test         
      </h1>
      <img src={panda} alt="logo panda" width="60px"/>
      <a
          href='https://daviddaillere.com'
          target="_blank"
          className='portfolio_link'>
          David Daillère</a>
      </header>
      
      <div className='donation_container'>
        <div className='tab_bar'>
          <button
            className={`tab_button ${activeTab === 'Tab 1' ? 'active_tab' : ''}`}
            onClick={() => handleTabChange('Tab 1')} >
            Donate Monthly
          </button>
          <button
            className={`tab_button ${activeTab === 'Tab 2' ? 'active_tab' : ''}`}
            onClick={() => handleTabChange('Tab 2')} >
            Donate Once
          </button>
        </div>
        <div className='tab_content'>
          {activeTab === 'Tab 1' && <DonationTab type="monthly" onTabChange={handleTabChange} />}
          {activeTab === 'Tab 2' && <DonationTab type="one-off" onTabChange={handleTabChange} />}
        </div>
      </div>
    </div>
  );
};

export default App;