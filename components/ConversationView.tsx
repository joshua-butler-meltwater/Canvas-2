
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConversationWrapper from './ConversationWrapper';
import svgPaths from "../imports/svg-rznp95eofg";
import favoritesSvgPaths from "../imports/svg-jkncvjwrnr";

// Send button with active/inactive states for conversation mode
const SendButton = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => {
  return (
    <div
      className={`${isActive ? 'bg-[#1d9f9f]' : 'bg-[rgba(33,33,33,0.12)]'} relative rounded-[36px] shrink-0 cursor-pointer`}
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <div className="h-9 relative rounded-sm shrink-0">
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-2 py-0 relative">
              <div className="relative shrink-0 size-5">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="arrow_upward">
                    <path
                      d={svgPaths.p334f57f0}
                      fill={`var(--fill-0, ${isActive ? 'white' : '#212121'})`}
                      fillOpacity={isActive ? 1 : 0.38}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// NewsletterAdd icon for Canvas toggle
const NewsletterAddIcon = () => (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
    <g id="fjord_newsletter_add">
      <g id="Vector">
        <path d={svgPaths.p226a8c80} fill="var(--fill-0, #616161)" />
        <path d={svgPaths.p22ae9d80} fill="var(--fill-0, #616161)" />
        <path d={svgPaths.p213993c0} fill="var(--fill-0, #616161)" />
        <path d={svgPaths.p848bfc0} fill="var(--fill-0, #616161)" />
        <path d={svgPaths.p3da44500} fill="var(--fill-0, #616161)" />
        <path d={svgPaths.p169ba060} fill="var(--fill-0, #616161)" />
        <path d={svgPaths.p2cff4c00} fill="var(--fill-0, #616161)" />
      </g>
    </g>
  </svg>
);

// Search icon for Search builder toggle
const SearchIcon = ({ isActive }: { isActive: boolean }) => (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
    <g id="fjord_search">
      <g id="Vector">
        <path d={svgPaths.p75d9a00} fill={`var(--fill-0, ${isActive ? '#212121' : '#616161'})`} />
        <path
          clipRule="evenodd"
          d={svgPaths.p9257dc0}
          fill={`var(--fill-0, ${isActive ? '#212121' : '#616161'})`}
          fillRule="evenodd"
        />
      </g>
    </g>
  </svg>
);

// Toggle button component (Canvas or Search builder)
const ToggleButton = ({ 
  icon, 
  label, 
  isActive, 
  onClick 
}: { 
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Background classes based on state
  const backgroundClass = isActive 
    ? 'bg-[rgba(29,159,159,0.12)]' 
    : isHovered 
      ? 'bg-[rgba(33,33,33,0.06)]' 
      : '';
  
  // Border classes based on state - updated to use rgba(33,33,33,0.12)
  const borderClass = isActive ? 'border-[#1d9f9f]' : 'border-[rgba(33,33,33,0.12)]';
  
  return (
    <div
      className={`min-w-6 relative rounded shrink-0 ${backgroundClass} cursor-pointer transition-colors duration-150`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute border border-solid inset-0 pointer-events-none rounded ${borderClass}`} />
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <div className="h-6 relative shrink-0">
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row h-6 items-center justify-start px-1 py-0 relative">
              {/* Icon */}
              <div className="relative shrink-0 size-4">
                {icon}
              </div>
              {/* Label */}
              <div className="relative shrink-0">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
                    <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap">
                      <p className="block leading-[16px] whitespace-pre text-[12px] font-bold">{label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConversationView = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [activeCanvas, setActiveCanvas] = useState(true); // Initialize as active since this view requires Canvas
  const [activeSearchBuilder, setActiveSearchBuilder] = useState(false);
  
  // Refs
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && inputValue.trim()) {
      e.preventDefault(); // Prevent default to avoid newline on Enter
      handleSendMessage();
    }
  };
  
  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      // Reset height to auto to get the correct scrollHeight
      inputRef.current.style.height = 'auto';
      // Set the height to scrollHeight to fit content
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [inputValue]);
  
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      console.log('Sending message:', inputValue);
      // In the future, we could add this message to the conversation
      setInputValue('');
    }
  };
  
  // Get border and shadow classes based on input state
  const getInputContainerClasses = () => {
    if (isFocused) {
      return 'border border-[#b627a1] shadow-[0px_0px_8px_1px_rgba(182,39,161,0.2),0px_4px_22px_0px_rgba(0,0,0,0.06)]';
    } else if (isInputHovered) {
      return 'border border-[#b627a1] shadow-[0px_0px_6px_0px_rgba(182,39,161,0.15),0px_4px_22px_0px_rgba(0,0,0,0.06)]';
    } else {
      return 'border border-[rgba(33,33,33,0.12)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)]';
    }
  };

  return (
    <div className="flex flex-col h-full w-full mx-auto relative">
      {/* Conversation component - scrollable area */}
      <div className="flex-grow overflow-y-auto pb-28">
        <ConversationWrapper />
      </div>
      
      {/* Fixed input at bottom - respecting sidebar width */}
      <div className="fixed bottom-0 left-[240px] right-0 z-10 p-4 bg-gradient-to-t from-white via-white mt-[0px] mr-[0px] mb-[25px] ml-[0px]">
        <div className="max-w-[680px] mx-auto">
          <div 
            className={`bg-white relative rounded-lg shrink-0 w-full transition-all duration-200 ${getInputContainerClasses()}`}
            style={{ boxSizing: 'border-box' }}
            onClick={() => inputRef.current?.focus()}
            onMouseEnter={() => setIsInputHovered(true)}
            onMouseLeave={() => setIsInputHovered(false)}
          >
            <div className="flex flex-col justify-end overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end pl-4 pr-2 py-2 relative w-full rounded-[8px] overflow-hidden m-[0px]">
                {/* Text input */}
                <div className="min-h-9 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row min-h-9 items-center justify-start p-0 relative w-full">
                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleInputKeyDown}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Ask a follow-up question..."
                      className="basis-0 grow min-h-px min-w-px justify-end outline-none text-[16px] text-left w-full resize-none overflow-hidden py-1"
                      rows={1}
                      style={{ height: 'auto', maxHeight: '150px' }}
                    />
                  </div>
                </div>
                
                {/* Action bar */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative w-full">
                    <div className="basis-0 grow min-h-px min-w-px relative rounded shrink-0">
                      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
                        {/* Left toggle buttons */}
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
                            <ToggleButton 
                              icon={<NewsletterAddIcon />} 
                              label="Canvas" 
                              isActive={activeCanvas}
                              onClick={() => setActiveCanvas(!activeCanvas)}
                            />
                            <ToggleButton 
                              icon={<SearchIcon isActive={activeSearchBuilder} />} 
                              label="Search builder" 
                              isActive={activeSearchBuilder}
                              onClick={() => setActiveSearchBuilder(!activeSearchBuilder)}
                            />
                          </div>
                        </div>
                        
                        {/* Send button */}
                        <div className="relative shrink-0">
                          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
                            <SendButton 
                              isActive={!!inputValue.trim()} 
                              onClick={handleSendMessage} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
