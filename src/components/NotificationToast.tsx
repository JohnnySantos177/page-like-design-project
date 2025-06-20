
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type?: 'success' | 'warning' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

const NotificationToast: React.FC<NotificationProps> = ({ 
  message, 
  type = 'info', 
  duration = 5000, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose?.(), 300);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 border-green-400';
      case 'warning':
        return 'bg-yellow-500 border-yellow-400';
      case 'error':
        return 'bg-red-500 border-red-400';
      default:
        return 'bg-blue-500 border-blue-400';
    }
  };

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
    }`}>
      <div className={`${getTypeStyles()} text-white px-6 py-4 rounded-lg shadow-xl border-l-4 max-w-sm`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{message}</p>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => onClose?.(), 300);
            }}
            className="ml-4 text-white hover:text-gray-200 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;
