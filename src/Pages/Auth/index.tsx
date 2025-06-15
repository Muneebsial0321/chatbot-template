import { Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function Auth() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeTab === 1 && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Form submitted:', formData);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-4">
      <div className="w-full max-w-md bg-primary-light_bg p-8 rounded-lg shadow-lg border border-primary-border">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            mb: 3,
            '& .MuiTabs-indicator': {
              backgroundColor: '#c96442',
            },
          }}
        >
          <Tab
            label="Sign In"
            className='text-primary-lighter'
            sx={{
              color: activeTab === 0 ? 'primary.light_text' : 'text.secondary',
              '&.Mui-selected': {
                color: 'primary.lighter',
              },
            }}
          />
          <Tab
            label="Create Account"
            className='text-primary-lighter'
            sx={{
              color: activeTab === 1 ? 'primary.light_text' : 'text.secondary',
              '&.Mui-selected': {
                color: 'primary.lighter',
              },
            }}
          />
        </Tabs>

        {activeTab === 0 ? <Login /> : <Register />}

        <p className="mt-4 text-center text-sm text-primary-light_text">
          {activeTab === 0 ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => setActiveTab(activeTab === 0 ? 1 : 0)}
            className="font-medium text-primary-lighter hover:text-white focus:outline-none"
          >
            {activeTab === 0 ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}