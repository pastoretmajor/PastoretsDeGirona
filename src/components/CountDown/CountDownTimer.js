import React, { useState, useEffect } from 'react';
import './CountDownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-row">
        <div
          className="countdown-rectangle"
          style={{
            background: `#1D1D1B`,
          }}
        >
          <span className="countdown-value">{countdown.days}</span>
          <span className="countdown-label">DIES</span>
        </div>
      </div>
      <div className="countdown-row">
        <div
          className="countdown-rectangle"
          style={{
            background: `#1D1D1B`,
          }}
        >
          <span className="countdown-value">{countdown.hours}</span>
          <span className="countdown-label">HORES</span>
        </div>
      </div>
      <div className="countdown-row">
        <div
          className="countdown-rectangle"
          style={{
            background: `#1D1D1B`,
          }}
        >
          <span className="countdown-value">{countdown.minutes}</span>
          <span className="countdown-label">MINUTS</span>
        </div>
      </div>
      <div className="countdown-row">
        <div
          className="countdown-rectangle"
          style={{
            background: `#1D1D1B`,
          }}
        >
          <span className="countdown-value">{countdown.seconds}</span>
          <span className="countdown-label">SEGONS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
