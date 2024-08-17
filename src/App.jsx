import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Company from './Company';
import ContactsSection from './ContactsSection';
import Settings from './Settings';
import SearchSection from './SearchSection';
import Lists from './Lists';
import Enrich from './Enrich';
import Verify from './Verify';
import Profile from './Profile';
import Notifications from './Notifications';
import Import from './Import';
import { useState } from 'react';
import './scrollbar.css';

export default function App() {
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const toggleProfile = () => {
    setProfileVisible(!isProfileVisible);
    setNotificationVisible(false); // Close notifications if profile is opened
  };

  const toggleNotifications = () => {
    setNotificationVisible(!isNotificationVisible);
    setProfileVisible(false); // Close profile if notifications are opened
  };

  return (
    <Router>
      <Navbar
        onProfileClick={toggleProfile}
        onNotificationsClick={toggleNotifications}
      />
      <Routes>
        {/* Default route */}
        <Route path="/data-website-react/" element={<Navigate to="/data-website-react/dashboard" />} />
        <Route path="/data-website-react/dashboard" element={<Dashboard />} />
        <Route path="/data-website-react/search" element={<SearchSection />} />
        <Route path="/data-website-react/contacts" element={<ContactsSection />} />
        <Route path="/data-website-react/lists" element={<Lists />} />
        <Route path="/data-website-react/companies" element={<Company />} />
        <Route path="/data-website-react/enrich" element={<Enrich />} />
        <Route path="/data-website-react/verify" element={<Verify />} />
        <Route path="/data-website-react/settings" element={<Settings />} />
        <Route path="/data-website-react/import" element={<Import />} />
      </Routes>

      {/* Profile overlay */}
      {isProfileVisible && <Profile />}

      {/* Notifications overlay */}
      {isNotificationVisible && (
        <Notifications 
          isVisible={isNotificationVisible} 
          toggleVisibility={setNotificationVisible} 
        />
      )}
    </Router>
  );
}
