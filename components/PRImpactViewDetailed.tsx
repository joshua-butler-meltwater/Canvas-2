
import React, { useEffect } from 'react';
import PRImpactWrapper from './PRImpactWrapper';
import PRImpactCanvas from './PRImpactCanvas';

/**
 * PRImpactViewDetailed - Main component for the PR Impact detailed view
 * This serves as the entry point for the PR Impact report with canvas functionality
 */
const PRImpactViewDetailed: React.FC = () => {
  // Add debugging to help track DOM elements
  useEffect(() => {
    // Check for the prompt input after component mount
    setTimeout(() => {
      const promptInput = document.querySelector('.fixed.bottom-0.left-0.right-0.z-50.p-4');
      console.log('Prompt input found:', !!promptInput);
      
      if (promptInput) {
        // Ensure the input is visible by adjusting z-index if needed
        (promptInput as HTMLElement).style.zIndex = '1000';
      }
    }, 500);
  }, []);
  
  return (
    <div className="flex flex-col w-full h-full">
      {/* 
        PRImpactWrapper handles:
        1. Canvas open/close state (starts closed by default)
        2. Conversation layout and animation
        3. Button positioning at end of conversation
        4. Input field positioning and sizing
      */}
      <PRImpactWrapper canvasContent={<PRImpactCanvas />} />
    </div>
  );
};

export default PRImpactViewDetailed;
