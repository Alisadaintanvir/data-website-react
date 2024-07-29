import './App.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Company from './Company';
import Contacts from './Contacts';
import Settings from './Settings';
import Search from './Search';
import Lists from './Lists';
import Enrich from './Enrich';
import Verify from './Verify';
import Profile from './Profile';
import Notifications from './Notifications';
import { useState } from 'react';

export default function App() {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const handleComponentChange = (componentName) => {
    if (componentName === 'profile') {
      setProfileVisible(!isProfileVisible);
    } 
    else if (componentName === 'notifications') {
      setNotificationVisible(!isNotificationVisible);
    } 
    else {
      setProfileVisible(false);
      setActiveComponent(componentName);
      setNotificationVisible(false);
    }
  };

  return (
    <>
      <Navbar onMenuClick={handleComponentChange} />

      {/* Render active component */}
      {activeComponent === 'dashboard' && <Dashboard />}
      {activeComponent === 'search' && <Search />}
      {activeComponent === 'contacts' && <Contacts />}
      {activeComponent === 'lists' && <Lists />}
      {activeComponent === 'companies' && <Company />}
      {activeComponent === 'enrich' && <Enrich />}
      {activeComponent === 'verify' && <Verify />}
      {activeComponent === 'settings' && <Settings />}

      {/* Profile overlay */}
      {isProfileVisible && (
        <Profile />
      )}

      {/* Notifications overlay */}
      <Notifications 
        isVisible={isNotificationVisible} 
        toggleVisibility={setNotificationVisible} 
      />
    </>
  );
}
