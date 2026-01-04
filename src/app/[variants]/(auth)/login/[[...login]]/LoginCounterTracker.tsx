'use client';

import { useEffect } from 'react';

// localStorage key for tracking login page visits
const LOGIN_COUNTER_KEY = 'login-page-visit-counter';

/**
 * Component to track login page visits
 * Increments a counter in localStorage each time the login page is visited
 */
const LoginCounterTracker = () => {
  useEffect(() => {
    // Get current counter value
    const storedValue = localStorage.getItem(LOGIN_COUNTER_KEY);
    const parsedCounter = Number.parseInt(storedValue || '0', 10);

    // If parsing failed (NaN) or negative, reset to 0
    const currentCounter = Number.isNaN(parsedCounter) || parsedCounter < 0 ? 0 : parsedCounter;

    // Increment and save
    localStorage.setItem(LOGIN_COUNTER_KEY, String(currentCounter + 1));
  }, []);

  return null;
};

export default LoginCounterTracker;