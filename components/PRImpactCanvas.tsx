
import React from 'react';
import FullPrReport from '../imports/FullPrReport';

interface PRImpactCanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PRImpactCanvas: React.FC<PRImpactCanvasProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] bg-white transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ 
        transformOrigin: 'right center',
        boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.12)'
      }}
    >
      {/* Header with close button */}
      <div className="flex justify-between items-center h-[60px] border-b border-[rgba(33,33,33,0.12)] px-6">
        <h1 className="font-semibold">PR Impact Report: PepsiCo to acquire Poppi</h1>
        <button
          className="p-2 rounded-full hover:bg-[rgba(33,33,33,0.04)]"
          onClick={onClose}
          aria-label="Close canvas"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Scrollable content area */}
      <div className="overflow-auto h-full p-[56px]">
      <div className="min-h-full max-w-[1000px] mx-auto">
        <FullPrReport />
      </div>
      
      {/* Action buttons at the bottom of the report */}
      <div className="flex justify-between mt-6 mb-8 max-w-[1000px] mx-auto">
        <button className="border border-[#1D9F9F] text-[#1D9F9F] px-4 py-2 rounded-lg hover:bg-[rgba(29,159,159,0.08)]">
          Download PDF
        </button>
        <button className="bg-[#1D9F9F] text-white px-4 py-2 rounded-lg hover:bg-[#1A8F8F]">
          Share Report
        </button>
      </div>
    </div>
    </div>
  );
};

export default PRImpactCanvas;
