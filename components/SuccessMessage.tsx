'use client';

import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  description?: string;
}

export default function SuccessMessage({ isOpen, onClose, message, description }: SuccessMessageProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full pointer-events-auto animate-fadeInScale">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-green-500 rounded-full p-4">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
            {message}
          </h3>
          
          {description && (
            <p className="text-gray-600 font-semibold text-base leading-relaxed mb-6">
              {description}
            </p>
          )}
          
          <button
            onClick={onClose}
            className="mt-4 w-full bg-black text-white py-4 hover:bg-gray-900 transition-all duration-300 tracking-wider font-black rounded-lg"
          >
            Зрозуміло
          </button>
        </div>
      </div>
    </div>
  );
}

