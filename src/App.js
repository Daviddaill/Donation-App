// App.js
import React, { useState } from 'react';
import DonationTab from './components/donationTab/DonationTab';


const App = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>Technical Test</h1>
      <div>
        <button onClick={() => handleTabChange('Tab 1')}>Tab 1</button>
        <button onClick={() => handleTabChange('Tab 2')}>Tab 2</button>
      </div>
      <div>
        {activeTab === 'Tab 1' && <DonationTab type="monthly" />}
        {activeTab === 'Tab 2' && <DonationTab type="one-off" />}
      </div>
    </div>
  );
};

export default App;