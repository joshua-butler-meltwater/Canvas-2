
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CanvasProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Canvas: React.FC<CanvasProps> = ({ children, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-0 right-0 h-full max-w-[calc(100%-440px-24px)] bg-white shadow-md"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            transition: { 
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1] // Custom ease curve for smooth animation
            }
          }}
          exit={{ 
            x: '100%', 
            opacity: 0,
            transition: { 
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
        >
          <div className="flex flex-col h-full overflow-auto">
            <div className="flex justify-between items-center p-4 border-b border-[rgba(33,33,33,0.12)]">
              <h2 className="text-lg font-semibold">PR Impact</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#616161"/>
                </svg>
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-auto">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
