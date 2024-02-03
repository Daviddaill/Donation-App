// App.js
import React, { useState } from 'react';
//components
import DonationTab from './components/donationTab/DonationTab';
//style
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1 className='main_title'>Technical Test - David Daillère</h1>
      <div className='donation_container'>
        <div className='tab_bar'>
          <button onClick={() => handleTabChange('Tab 1')}>Donate Monthly</button>
          <button onClick={() => handleTabChange('Tab 2')}>Donate Once</button>
        </div>
        <div className='tab_content'>
          {activeTab === 'Tab 1' && <DonationTab type="monthly" />}
          {activeTab === 'Tab 2' && <DonationTab type="one-off" />}
        </div>
      </div>

    </div>
  );
};

export default App;