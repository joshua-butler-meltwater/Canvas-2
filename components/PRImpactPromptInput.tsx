
import React, { useState, useRef, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-rznp95eofg";

interface PRImpactPromptInputProps {
  isCanvasOpen: boolean;
  toggleCanvas: () => void;
}

// Send button with active/inactive states for conversation mode
const SendButton = memo(({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => {
  return (
    <div
      className={`${isActive ? 'bg-[#1d9f9f]' : 'bg-[rgba(33,33,33,0.12)]'} relative rounded-[36px] shrink-0 cursor-pointer transition-colors duration-200`}
      onClick={onClick}
      role="button"
      aria-label="Send message"
      tabIndex={0}
    >
      <div className="flex items-center justify-center h-9 w-9">
        <svg className="size-5" fill="none" viewBox="0 0 20 20">
          <path
            d={svgPaths.p334f57f0 || "M13.125 11.75H4.74958C4.53722 11.75 4.35917 11.6785 4.21542 11.5356C4.07181 11.3927 4 11.2156 4 11.0043C4 10.7931 4.07181 10.6145 4.21542 10.4687C4.35917 10.3229 4.53722 10.25 4.74958 10.25H13.125L9.45396 6.57892C9.3041 6.42906 9.22917 6.25343 9.22917 6.05204C9.22917 5.85065 9.30556 5.67024 9.45833 5.51079C9.61111 5.36468 9.78819 5.29163 9.98958 5.29163C10.191 5.29163 10.3667 5.36677 10.5169 5.51704L15.4708 10.4773C15.5458 10.5524 15.6007 10.6338 15.6354 10.7214C15.6701 10.8091 15.6875 10.903 15.6875 11.0033C15.6875 11.1034 15.6701 11.1974 15.6354 11.2852C15.6007 11.3728 15.5486 11.4513 15.4792 11.5208L10.5208 16.4791C10.3681 16.6319 10.1944 16.7048 10 16.6979C9.80556 16.6909 9.63194 16.6144 9.47917 16.4683C9.32639 16.3088 9.25 16.1273 9.25 15.9235C9.25 15.7199 9.32639 15.544 9.47917 15.3958L13.125 11.75Z"}
            fill={isActive ? 'white' : '#212121'}
            fillOpacity={isActive ? 1 : 0.38}
          />
        </svg>
      </div>
    </div>
  );
});

SendButton.displayName = 'SendButton';

// Toggle button component for Canvas
const ToggleButton = memo(({ 
  label, 
  isActive, 
  onClick 
}: { 
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Background and border classes based on state
  const backgroundClass = isActive 
    ? 'bg-[rgba(29,159,159,0.12)]' 
    : isHovered 
      ? 'bg-[rgba(33,33,33,0.06)]' 
      : '';
  
  const borderClass = isActive ? 'border-[#1d9f9f]' : 'border-[rgba(33,33,33,0.12)]';
  
  return (
    <div
      className={`flex items-center py-0 px-1 h-6 min-w-6 relative rounded ${backgroundClass} cursor-pointer transition-colors duration-150`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      aria-pressed={isActive}
      tabIndex={0}
    >
      <div className={`absolute border border-solid inset-0 pointer-events-none rounded ${borderClass}`} />
      
      {/* Icon */}
      <svg className="size-4 mr-1" viewBox="0 0 16 16" fill="none">
        <g fill="#212121">
          <path d="M3.6 13.5999C3.27 13.5999 2.9875 13.4824 2.7525 13.2474C2.5175 13.0124 2.4 12.7299 2.4 12.3999V3.59993C2.4 3.26993 2.5175 2.98743 2.7525 2.75243C2.9875 2.51743 3.27 2.39993 3.6 2.39993H8.20533C8.36845 2.39993 8.50833 2.45709 8.625 2.57143C8.74167 2.68576 8.8 2.82743 8.8 2.99643C8.8 3.16543 8.7425 3.30826 8.6275 3.42493C8.5125 3.54159 8.37 3.59993 8.2 3.59993H3.6V12.3999H12.4V7.79459C12.4 7.63148 12.4572 7.49159 12.5715 7.37493C12.6858 7.25826 12.8275 7.19993 12.9965 7.19993C13.1655 7.19993 13.3083 7.25743 13.425 7.37243C13.5417 7.48743 13.6 7.62993 13.6 7.79993V12.3999C13.6 12.7299 13.4825 13.0124 13.2475 13.2474C13.0125 13.4824 12.73 13.5999 12.4 13.5999H3.6Z" />
          <path d="M13.8486 3.09709H12.8886V2.13713C12.8886 1.73713 12.5686 1.41711 12.1686 1.41711C11.7686 1.41711 11.4486 1.73713 11.4486 2.13713V3.09709H10.4886C10.0886 3.09709 9.76856 3.41711 9.76856 3.81711C9.76856 4.21711 10.0886 4.53713 10.4886 4.53713H11.5286V5.41711C11.5286 5.81711 11.8486 6.13713 12.2486 6.13713C12.6486 6.13713 12.9686 5.81711 12.9686 5.41711V4.45715H13.9286C14.3286 4.45715 14.6486 4.13713 14.6486 3.73713C14.5686 3.33713 14.2486 3.09709 13.8486 3.09709Z" />
          <path d="M8.7942 7.99987C8.7942 8.35804 8.50384 8.6484 8.14566 8.6484H5.18818C4.83001 8.6484 4.53965 8.35804 4.53965 7.99987C4.53965 7.64169 4.83001 7.35133 5.18818 7.35133H8.14566C8.50384 7.35133 8.7942 7.64169 8.7942 7.99987Z" />
          <path d="M8.15311 4.79133C8.5095 4.79133 8.7984 5.08024 8.7984 5.43662C8.7984 5.79553 8.50554 6.08547 8.14665 6.08187L5.16368 6.05199C4.81803 6.04852 4.53965 5.76734 4.53965 5.42167C4.53965 5.07355 4.82186 4.79133 5.16999 4.79133H8.15311Z" />
          <path d="M10.8117 9.91133C11.1698 9.91133 11.4602 10.2017 11.4602 10.5599C11.4602 10.918 11.1698 11.2084 10.8116 11.2084H7.79938C7.44121 11.2084 7.15085 10.918 7.15085 10.5599C7.15085 10.2017 7.44121 9.91133 7.79938 9.91133H10.8117Z" />
          <path d="M5.89823 9.91135C6.2564 9.91135 6.54676 10.2017 6.54676 10.5599C6.54676 10.9181 6.2564 11.2084 5.89823 11.2084L5.18818 11.2085C4.83001 11.2085 4.53965 10.9181 4.53965 10.5599C4.53965 10.2018 4.83001 9.91141 5.18818 9.91141L5.89823 9.91135Z" />
          <path d="M10.8117 7.35129C11.1699 7.35129 11.4602 7.64165 11.4602 7.99983C11.4602 8.358 11.1699 8.64836 10.8117 8.64836L10.1017 8.64842C9.74348 8.64842 9.45313 8.35806 9.45313 7.99988C9.45313 7.64171 9.74348 7.35135 10.1017 7.35135L10.8117 7.35129Z" />
        </g>
      </svg>
      
      {/* Label */}
      <span className="text-xs font-bold">{label}</span>
    </div>
  );
});

ToggleButton.displayName = 'ToggleButton';

export const PRImpactPromptInput: React.FC<PRImpactPromptInputProps> = memo(({ 
  isCanvasOpen, 
  toggleCanvas 
}) => {
  // Input state management
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  
  // References to DOM elements
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Ensure visibility
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.display = 'block';
      containerRef.current.style.opacity = '1';
      containerRef.current.style.visibility = 'visible';
    }
  }, []);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  
  // Handle keyboard events (Enter to send)
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && inputValue.trim()) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Auto-resize textarea based on content
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 150)}px`;
    }
  }, [inputValue]);
  
  // Send message handler (placeholder)
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // In a real implementation, this would send the message
      console.log('Sending message:', inputValue);
      setInputValue('');
    }
  };
  
  // Get styling classes for input container based on state
  const getInputContainerClasses = () => {
    if (isFocused) {
      return 'border border-[#1d9f9f] shadow-[0px_0px_8px_1px_rgba(29,159,159,0.2),0px_4px_22px_0px_rgba(0,0,0,0.06)]';
    } else if (isInputHovered) {
      return 'border border-[#1d9f9f] shadow-[0px_0px_6px_0px_rgba(29,159,159,0.15),0px_4px_22px_0px_rgba(0,0,0,0.06)]';
    } else {
      return 'border border-[rgba(33,33,33,0.12)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)]';
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-0 left-0 right-0 z-[2000] p-5" 
      style={{ 
        position: 'fixed',
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        pointerEvents: 'auto',
        padding: '20px',
        marginLeft: '220px'
      }}
      id="pr-impact-prompt-input"
    >
      {/* Outer container that spans the entire width */}
      <motion.div 
        className="w-full flex"
        initial={false}
        animate={{
          justifyContent: isCanvasOpen ? 'flex-start' : 'center', // Dynamic justification based on canvas state
          paddingLeft: '0px' // No padding since we have marginLeft on parent
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {/* Input container with dynamic width */}
        <motion.div 
          initial={false}
          animate={{
            width: isCanvasOpen ? '372px' : '760px'
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div 
            className={`bg-white w-full relative rounded-lg h-24 ${getInputContainerClasses()}`}
            onClick={() => inputRef.current?.focus()}
            onMouseEnter={() => setIsInputHovered(true)}
            onMouseLeave={() => setIsInputHovered(false)}
          >
            <div className="p-2 pl-4 flex flex-col h-full justify-end m-[0px]">
              {/* Text input */}
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Ask a question"
                className="w-full resize-none outline-none text-[16px] py-1"
                rows={1}
                style={{ height: 'auto', maxHeight: '150px' }}
              />
              
              {/* Action bar */}
              <div className="flex items-center justify-between mt-2">
                {/* Canvas toggle button */}
                <ToggleButton 
                  label="Canvas" 
                  isActive={isCanvasOpen}
                  onClick={toggleCanvas}
                />
                
                {/* Send button */}
                <SendButton 
                  isActive={!!inputValue.trim()} 
                  onClick={handleSendMessage} 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

PRImpactPromptInput.displayName = 'PRImpactPromptInput';

export default PRImpactPromptInput;
