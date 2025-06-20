
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 30,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gradient-to-r from-red-500 to-orange-400 py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center text-white text-sm font-medium">
          <span className="mr-4">🔥 PROMOÇÃO: Última oportunidade! Restam apenas</span>
          <div className="flex space-x-2">
            <div className="bg-white text-red-500 px-2 py-1 rounded font-bold min-w-[40px] text-center">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-white text-red-500 px-2 py-1 rounded font-bold min-w-[40px] text-center">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-white text-red-500 px-2 py-1 rounded font-bold min-w-[40px] text-center">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
