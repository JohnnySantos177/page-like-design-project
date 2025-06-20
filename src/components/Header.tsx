
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
    <header className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 py-3 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 animate-pulse opacity-75"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center items-center text-white text-sm font-medium">
          <span className="mr-4 animate-bounce">🔥 PROMOÇÃO: Última oportunidade! Restam apenas</span>
          <div className="flex space-x-2 items-center">
            <div className="bg-white text-red-500 px-3 py-2 rounded-lg font-bold min-w-[50px] text-center shadow-lg transform transition-all duration-300 hover:scale-110 animate-pulse-glow">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="text-2xl font-bold animate-pulse">:</span>
            <div className="bg-white text-red-500 px-3 py-2 rounded-lg font-bold min-w-[50px] text-center shadow-lg transform transition-all duration-300 hover:scale-110 animate-pulse-glow">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="text-2xl font-bold animate-pulse">:</span>
            <div className="bg-white text-red-500 px-3 py-2 rounded-lg font-bold min-w-[50px] text-center shadow-lg transform transition-all duration-300 hover:scale-110 animate-pulse-glow">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
          <span className="ml-4 text-xs opacity-90">para esta oferta!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
