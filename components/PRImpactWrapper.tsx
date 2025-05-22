
import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import OriginalConversation from '../imports/Conversation';
import CreateReportButton from '../imports/Button-34-5294';
import PRImpactPromptInput from './PRImpactPromptInput';

// Define global window interface for the canvas toggle function
declare global {
  interface Window {
    togglePRCanvas?: () => void;
  }
}

interface PRImpactWrapperProps {
  canvasContent?: React.ReactNode;
}

/**
 * PRImpactWrapper - Core component responsible for:
 * 1. Managing the canvas open/closed state
 * 2. Handling the main conversation layout
 * 3. Rendering the Create Report button directly in the component
 * 4. Coordinating animations between components
 */
export const PRImpactWrapper: React.FC<PRImpactWrapperProps> = memo(({ canvasContent }) => {
  // Start with canvas closed by default
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Toggle canvas function - exported globally for button access
  const toggleCanvas = useCallback(() => {
    setIsCanvasOpen(prevState => !prevState);
  }, []);

  // Make toggle function available globally and setup styling
  useEffect(() => {
    // Store toggle function reference globally
    window.togglePRCanvas = toggleCanvas;
    setShowButton(true);
    
    // Add required global styles
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      /* Content container widths */
      [data-name="Message content"],
      [data-name="Message container"],
      [data-name="Message container1"],
      [data-name="Accordion"],
      [data-name="_Accordion Content"],
      [data-name="Message text container"],
      [data-name="Media"],
      [data-name="Media content"] {
        max-width: 680px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        transition: max-width 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      
      /* Adjust width when canvas is open */
      .canvas-open [data-name="Message content"],
      .canvas-open [data-name="Message container"],
      .canvas-open [data-name="Message container1"],
      .canvas-open [data-name="Accordion"],
      .canvas-open [data-name="_Accordion Content"],
      .canvas-open [data-name="Message text container"],
      .canvas-open [data-name="Media"],
      .canvas-open [data-name="Media content"] {
        max-width: 440px !important;
      }

      /* Right Section container */
      [data-name="Right Section"] > div > div {
        max-width: 680px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        transition: max-width 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      
      /* Adjust Right Section width when canvas is open */
      .canvas-open [data-name="Right Section"] > div > div {
        max-width: 440px !important;
      }
      
      /* Pulse animation */
      @keyframes pulse {
        0% { box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
        50% { box-shadow: 0 4px 18px rgba(29, 159, 159, 0.4); }
        100% { box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
      }
      
      /* Make the conversation container take full height */
      .conversation-wrapper {
        display: flex !important;
        flex-direction: column !important;
        min-height: calc(100vh - 60px) !important;
      }
      
      /* Make the conversation content area grow to fill space */
      .conversation-content {
        flex: 1 !important;
        display: flex !important;
        flex-direction: column !important;
      }
      
      /* Position the Create Report button at the bottom of content */
      .create-report-button-container {
        margin-top: auto !important;
        margin-bottom: 200px !important; /* Space for the input below */
      }
      
      /* Make main conversation div take full height */
      .box-border.content-stretch.flex.flex-col.gap-3\\.5.items-center.justify-start.p-0.relative.size-full {
        min-height: calc(100vh - 60px) !important;
        flex: 1 !important;
      }
      
      /* Ensure Right Section takes full height to push button to bottom */
      [data-name="Right Section"] {
        display: flex !important;
        flex-direction: column !important;
        min-height: calc(100vh - 120px) !important;
        flex: 1 !important;
      }
      
      [data-name="Right Section"] > div {
        display: flex !important;
        flex-direction: column !important;
        flex: 1 !important;
      }
    `;
    
    document.head.appendChild(styleElement);
    
    // Clean up
    return () => {
      document.head.removeChild(styleElement);
      window.togglePRCanvas = undefined;
    };
  }, [toggleCanvas]);

  // Toggle the canvas-open class to enable CSS transitions
  useEffect(() => {
    const conversationWrapper = document.querySelector('.conversation-wrapper');
    if (conversationWrapper) {
      if (isCanvasOpen) {
        conversationWrapper.classList.add('canvas-open');
      } else {
        conversationWrapper.classList.remove('canvas-open');
      }
    }
  }, [isCanvasOpen]);

  // Insert the Create Report button at the bottom of conversation content
  useEffect(() => {
    const insertButtonAtEndOfConversation = () => {
      try {
        // Find the conversation container
        const conversationContent = document.querySelector('[data-name="Right Section"] > div');
        if (!conversationContent) return;
        
        // Check if button already exists
        const existingButton = document.querySelector('.create-report-button-inserted');
        if (existingButton) return;
        
        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'create-report-button-container create-report-button-inserted';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.width = '100%';
        buttonContainer.style.marginTop = 'auto';
        buttonContainer.style.paddingTop = '32px';
        buttonContainer.style.paddingBottom = '200px';
        
        // Create the button
        const button = document.createElement('button');
        button.className = `create-report-button-element ${isCanvasOpen ? 'active' : ''}`;
        button.style.height = '40px';
        button.style.width = '180px';
        button.style.backgroundColor = isCanvasOpen ? '#17908F' : '#1D9F9F';
        button.style.borderRadius = '6px';
        button.style.display = 'flex';
        button.style.justifyContent = 'center';
        button.style.alignItems = 'center';
        button.style.color = 'white';
        button.style.fontWeight = '500';
        button.style.cursor = 'pointer';
        button.style.boxShadow = isCanvasOpen ? '0 2px 6px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.15)';
        button.style.animation = isCanvasOpen ? 'none' : 'pulse 2s infinite';
        button.style.border = 'none';
        button.style.transition = 'all 0.2s ease';
        button.textContent = 'Create Report';
        button.onclick = toggleCanvas;
        
        // Append button to container
        buttonContainer.appendChild(button);
        
        // Append to conversation content at the end
        conversationContent.appendChild(buttonContainer);
      } catch (error) {
        console.error('Failed to insert Create Report button:', error);
      }
    };
    
    // Run initially and whenever canvas state changes
    insertButtonAtEndOfConversation();
    
    // Set up a mutation observer to detect when new conversation content is added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          insertButtonAtEndOfConversation();
        }
      });
    });
    
    // Start observing the conversation container
    const conversationWrapper = document.querySelector('.conversation-wrapper');
    if (conversationWrapper) {
      observer.observe(conversationWrapper, { childList: true, subtree: true });
    }
    
    // Clean up
    return () => {
      observer.disconnect();
      const button = document.querySelector('.create-report-button-inserted');
      if (button) {
        button.remove();
      }
    };
  }, [toggleCanvas, isCanvasOpen]);

  // Animation properties
  const mainContentAnimation = {
    width: isCanvasOpen ? '440px' : '100%',
    transition: { 
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    }
  };
  
  const canvasAnimation = {
    x: isCanvasOpen ? 0 : '100%', 
    opacity: isCanvasOpen ? 1 : 0,
    width: isCanvasOpen ? 'calc(100% - 440px)' : '0px',
    transition: { 
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    }
  };

  return (
    <div className="flex flex-1 relative h-[calc(100vh-60px)] pointer-events-auto overflow-hidden">
      {/* Main Conversation Area */}
      <motion.div 
        className="relative flex flex-col h-full w-full overflow-hidden"
        animate={mainContentAnimation}
        initial={{ width: '100%' }} // Initialize to full width (canvas closed)
      >
        {/* Scrollable conversation area */}
        <div className="conversation-wrapper relative w-full h-full overflow-auto">
          <div className="conversation-content">
            <OriginalConversation />
            {/* Create Report Button is now added via DOM manipulation in the useEffect hook */}
          </div>
        </div>
        
        {/* Prompt Input at the bottom - rendered directly as a child of the motion.div 
            for better positioning and to ensure it's visible */}
        <PRImpactPromptInput 
          isCanvasOpen={isCanvasOpen}
          toggleCanvas={toggleCanvas}
        />
      </motion.div>

      {/* Canvas Panel - slides in from right */}
      {canvasContent && (
        <motion.div
          className="absolute top-0 right-0 h-full bg-white shadow-md overflow-hidden"
          initial={{ x: '100%', opacity: 0, width: '0px' }} // Start hidden
          animate={canvasAnimation}
        >
          {isCanvasOpen && (
            <div className="flex flex-col h-full overflow-auto">
              <div className="flex justify-between items-center p-4 border-b border-[rgba(33,33,33,0.12)]">
                <h2 className="text-lg font-semibold">PR Impact</h2>
                <button 
                  onClick={toggleCanvas}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close canvas"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#616161"/>
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-auto">
                {canvasContent}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
});

PRImpactWrapper.displayName = 'PRImpactWrapper';

export default PRImpactWrapper;
