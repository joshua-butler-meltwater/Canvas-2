
import React from 'react';

interface PRImpactConversationProps {
  toggleCanvas?: () => void;
  isCanvasOpen?: boolean;
}

export const PRImpactConversation: React.FC<PRImpactConversationProps> = ({ 
  toggleCanvas = () => {}, // Simplified default function
  isCanvasOpen = false 
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* User Message */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 size-6 rounded-full bg-[#1e88e5] flex items-center justify-center text-white text-xs font-bold">
            LE
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm mb-1">Leya</div>
            <div className="p-3 bg-white rounded-lg border border-[rgba(33,33,33,0.01)]">
              <p>
                can you give me a PR attribution report for this Press Release: 
                https://www.pepsico.com/our-stories/press-release/pepsico-to-acquire-poppi03172025
              </p>
            </div>
          </div>
        </div>
        
        {/* AI Message */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 size-6 rounded-full bg-gradient-to-br from-[#28BBBB] via-[#6F71AE] to-[#B627A1]">
            <div className="absolute inset-[35%] flex items-center justify-center">
              <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.01582 0.111641C9.84126 0.111641 11.3213 1.59083 11.3213 3.41663C11.3213 5.24225 9.84126 6.7218 8.01582 6.7218C6.18984 6.7218 4.71065 5.24225 4.71065 3.41663C4.71065 1.59083 6.18984 0.111641 8.01582 0.111641Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm mb-1">Mira</div>
            <div className="p-3 bg-white rounded-lg border border-[rgba(33,33,33,0.01)]">
              <p className="mb-2">
                Before I give you the report, I need some more details about the attribution specifications
              </p>
              
              {/* Form sections with 1px borders, 8px radius and spacing as specified */}
              <div className="space-y-4 mt-4">
                {/* Time Range Accordion */}
                <div className="border border-[rgba(33,33,33,0.12)] rounded-lg">
                  <div className="h-12 px-4 flex items-center justify-between">
                    <div className="font-bold text-[#424242]">Time range</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#616161">
                      <path d="M9.41222 7.49887L5.58547 11.3256C5.26033 11.6508 5.26033 12.176 5.58547 12.5011C5.91062 12.8263 6.43586 12.8263 6.76101 12.5011L10.0042 9.26634L13.239 12.5011C13.5641 12.8263 14.0893 12.8263 14.4145 12.5011C14.7396 12.176 14.7396 11.6508 14.4145 11.3256L10.5878 7.49887C10.2709 7.17372 9.73737 7.17372 9.41222 7.49887Z"/>
                    </svg>
                  </div>
                  <div className="px-4 pb-2">
                    <div className="flex items-center mb-2">
                      <svg className="size-5 mr-2" viewBox="0 0 20 20" fill="#616161">
                        <path clipRule="evenodd" d="M10 2C5.58401 2 2 5.584 2 10C2 14.416 5.58401 18 10 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 10 2ZM10 16.4001C6.46401 16.4001 3.60001 13.536 3.60001 10C3.60001 6.46401 6.46401 3.6 10 3.6C13.536 3.6 16.4001 6.46401 16.4001 10C16.4001 13.536 13.536 16.4001 10 16.4001Z" fillRule="evenodd"/>
                      </svg>
                      <span>Last 7 days</span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <svg className="size-5 mr-2" viewBox="0 0 20 20" fill="#616161">
                        <path clipRule="evenodd" d="M10 2C5.58401 2 2 5.584 2 10C2 14.416 5.58401 18 10 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 10 2ZM10 16.4001C6.46401 16.4001 3.60001 13.536 3.60001 10C3.60001 6.46401 6.46401 3.6 10 3.6C13.536 3.6 16.4001 6.46401 16.4001 10C16.4001 13.536 13.536 16.4001 10 16.4001Z" fillRule="evenodd"/>
                      </svg>
                      <span>Last month</span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <svg className="size-5 mr-2" viewBox="0 0 20 20" fill="#1D9F9F">
                        <path clipRule="evenodd" d="M2 9.99995C2 5.58399 5.58399 2 9.99995 2C14.4159 2 18 5.58399 18 9.99995C18 14.4159 14.4159 18 9.99995 18C5.58399 18 2 14.4159 2 9.99995ZM3.6 9.99995C3.6 13.536 6.46399 16.4 9.99995 16.4C13.536 16.4 16.4 13.536 16.4 9.99995C16.4 6.46399 13.536 3.6 9.99995 3.6C6.46399 3.6 3.6 6.46399 3.6 9.99995ZM14 9.99995C14 12.2091 12.2091 14 9.99995 14C7.79085 14 6 12.2091 6 9.99995C6 7.79085 7.79085 6 9.99995 6C12.2091 6 14 7.79085 14 9.99995Z" fillRule="evenodd"/>
                      </svg>
                      <span>Last quarter</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="size-5 mr-2" viewBox="0 0 20 20" fill="#616161">
                        <path clipRule="evenodd" d="M10 2C5.58401 2 2 5.584 2 10C2 14.416 5.58401 18 10 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 10 2ZM10 16.4001C6.46401 16.4001 3.60001 13.536 3.60001 10C3.60001 6.46401 6.46401 3.6 10 3.6C13.536 3.6 16.4001 6.46401 16.4001 10C16.4001 13.536 13.536 16.4001 10 16.4001Z" fillRule="evenodd"/>
                      </svg>
                      <span>Custom</span>
                    </div>
                  </div>
                </div>
                
                {/* Attribution Model Accordion */}
                <div className="border border-[rgba(33,33,33,0.12)] rounded-lg" data-name="AttributionModel">
                  <div className="h-12 px-4 flex items-center justify-between">
                    <div className="font-bold text-[#424242]">Attribution model</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#616161">
                      <path d="M9.41222 7.49887L5.58547 11.3256C5.26033 11.6508 5.26033 12.176 5.58547 12.5011C5.91062 12.8263 6.43586 12.8263 6.76101 12.5011L10.0042 9.26634L13.239 12.5011C13.5641 12.8263 14.0893 12.8263 14.4145 12.5011C14.7396 12.176 14.7396 11.6508 14.4145 11.3256L10.5878 7.49887C10.2709 7.17372 9.73737 7.17372 9.41222 7.49887Z"/>
                    </svg>
                  </div>
                  <div className="px-4 pb-2">
                    <div className="flex items-center mb-2">
                      <svg className="size-5 mr-2" viewBox="0 0 20 20" fill="#1D9F9F">
                        <path clipRule="evenodd" d="M2 9.99995C2 5.58399 5.58399 2 9.99995 2C14.4159 2 18 5.58399 18 9.99995C18 14.4159 14.4159 18 9.99995 18C5.58399 18 2 14.4159 2 9.99995ZM3.6 9.99995C3.6 13.536 6.46399 16.4 9.99995 16.4C13.536 16.4 16.4 13.536 16.4 9.99995C16.4 6.46399 13.536 3.6 9.99995 3.6C6.46399 3.6 3.6 6.46399 3.6 9.99995ZM14 9.99995C14 12.2091 12.2091 14 9.99995 14C7.79085 14 6 12.2091 6 9.99995C6 7.79085 7.79085 6 9.99995 6C12.2091 6 14 7.79085 14 9.99995Z" fillRule="evenodd"/>
                      </svg>
                      <span>First-touch (100% credit to first interaction)</span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <svg className="size-5 mr-2" viewBox="0 0 20 20" fill="#616161">
                        <path clipRule="evenodd" d="M10 2C5.58401 2 2 5.584 2 10C2 14.416 5.58401 18 10 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 10 2ZM10 16.4001C6.46401 16.4001 3.60001 13.536 3.60001 10C3.60001 6.46401 6.46401 3.6 10 3.6C13.536 3.6 16.4001 6.46401 16.4001 10C16.4001 13.536 13.536 16.4001 10 16.4001Z" fillRule="evenodd"/>
                      </svg>
                      <span>Linear (equal credit across all touchpoints)</span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <svg className="size-5 mr-2" viewBox="0 0 20 20" fill="#616161">
                        <path clipRule="evenodd" d="M10 2C5.58401 2 2 5.584 2 10C2 14.416 5.58401 18 10 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 10 2ZM10 16.4001C6.46401 16.4001 3.60001 13.536 3.60001 10C3.60001 6.46401 6.46401 3.6 10 3.6C13.536 3.6 16.4001 6.46401 16.4001 10C16.4001 13.536 13.536 16.4001 10 16.4001Z" fillRule="evenodd"/>
                      </svg>
                      <span>Position-based (40/20/40)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final Report Generated Message */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 size-6 rounded-full bg-gradient-to-br from-[#28BBBB] via-[#6F71AE] to-[#B627A1]">
            <div className="absolute inset-[35%] flex items-center justify-center">
              <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.01582 0.111641C9.84126 0.111641 11.3213 1.59083 11.3213 3.41663C11.3213 5.24225 9.84126 6.7218 8.01582 6.7218C6.18984 6.7218 4.71065 5.24225 4.71065 3.41663C4.71065 1.59083 6.18984 0.111641 8.01582 0.111641Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm mb-1">Mira</div>
            <div className="p-3 bg-white rounded-lg border border-[rgba(33,33,33,0.01)]">
              <p>Report generated</p>
              
              <div className="bg-white p-2 rounded-lg mt-3 flex items-center gap-3 border border-[rgba(33,33,33,0.01)]">
                <div className="bg-[rgba(73,124,159,0.1)] rounded-full p-2">
                  <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="url(#paint0_linear_35_24279)" opacity="0.1"/>
                    <path d="M9.66667 26.3335H26.3333V10.8335H16.5V21.1668L13.0833 17.7502L9.66667 21.1668V26.3335Z" fill="url(#paint1_linear_35_24279)"/>
                    <defs>
                      <linearGradient id="paint0_linear_35_24279" x1="-2.79746e-07" y1="35.9677" x2="36.0003" y2="35.9673" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8B49A0"/>
                        <stop offset="1" stopColor="#497C9F"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_35_24279" x1="9.66667" y1="25.4865" x2="26.3335" y2="25.4864" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8B49A0"/>
                        <stop offset="1" stopColor="#497C9F"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex-1">PR Impact</div>
                <button 
                  onClick={toggleCanvas}
                  className="text-[#616161] hover:text-[#1D9F9F]"
                  aria-label="Open canvas"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3.75 17C3.54361 17 3.36458 16.9282 3.21875 16.7846C3.07292 16.641 3 16.4631 3 16.2508V11.7558C3 11.5436 3.07146 11.3646 3.21437 11.2188C3.35729 11.0729 3.53437 11 3.74562 11C3.95687 11 4.13542 11.0716 4.28125 11.2148C4.42708 11.358 4.5 11.5355 4.5 11.7473V14.4375L14.4375 4.5H11.7473C11.5356 4.5 11.3581 4.42854 11.2148 4.28563C11.0716 4.14271 11 3.96563 11 3.75438C11 3.54313 11.0718 3.36458 11.2154 3.21875C11.359 3.07292 11.5369 3 11.7492 3H16.2442C16.4564 3 16.6354 3.07181 16.7813 3.21542C16.9271 3.35903 17 3.53694 17 3.74917V8.24417C17 8.45639 16.9285 8.63542 16.7856 8.78125C16.6427 8.92708 16.4656 9 16.2544 9C16.0431 9 15.8646 8.9284 15.7188 8.78521C15.5729 8.64188 15.5 8.46438 15.5 8.25271V5.5625L5.5625 15.5H8.25271C8.46451 15.5 8.64201 15.5715 8.78521 15.7144C8.9284 15.8573 9 16.0344 9 16.2456C9 16.4569 8.92819 16.6354 8.78458 16.7813C8.64097 16.9271 8.46306 17 8.25083 17H3.75583Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Input - 240px from left edge as specified */}
      <div className="p-4">
        <div className="border border-[#bdbdbd] rounded-lg max-w-[680px] mx-auto">
          <div className="p-4 text-[#757575]">Ask a question</div>
          <div className="border-t border-[rgba(33,33,33,0.12)] p-2 flex justify-between items-center">
            <button 
              className={`flex items-center gap-1 text-xs px-1 py-0 ${isCanvasOpen ? 'bg-[rgba(29,159,159,0.12)] text-[#1D9F9F] border border-[#1D9F9F]' : 'hover:bg-gray-100'} rounded`}
              onClick={toggleCanvas}
              aria-label={isCanvasOpen ? "Close canvas" : "Open canvas"}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.6 13.6C3.27 13.6 2.9875 13.48 2.7525 13.25C2.5175 13.01 2.4 12.73 2.4 12.4V3.6C2.4 3.27 2.5175 2.99 2.7525 2.75C2.9875 2.52 3.27 2.4 3.6 2.4H8.2C8.37 2.4 8.51 2.46 8.63 2.57C8.74 2.69 8.8 2.83 8.8 3C8.8 3.17 8.74 3.31 8.63 3.42C8.51 3.54 8.37 3.6 8.2 3.6H3.6V12.4H12.4V7.8C12.4 7.63 12.46 7.49 12.57 7.37C12.69 7.26 12.83 7.2 13 7.2C13.17 7.2 13.31 7.26 13.43 7.37C13.54 7.49 13.6 7.63 13.6 7.8V12.4C13.6 12.73 13.48 13.01 13.25 13.25C13.01 13.48 12.73 13.6 12.4 13.6H3.6Z"/>
                <path d="M13.9 3.1H13V2.1C13 1.7 12.7 1.4 12.3 1.4C11.9 1.4 11.6 1.7 11.6 2.1V3.1H10.6C10.2 3.1 9.9 3.4 9.9 3.8C9.9 4.2 10.2 4.5 10.6 4.5H11.6V5.4C11.6 5.8 11.9 6.1 12.3 6.1C12.7 6.1 13 5.8 13 5.4V4.5H13.9C14.3 4.5 14.6 4.2 14.6 3.8C14.6 3.4 14.3 3.1 13.9 3.1Z"/>
              </svg>
              <span>Canvas</span>
            </button>
            
            <button className="bg-[rgba(33,33,33,0.12)] text-[rgba(33,33,33,0.38)] p-2 rounded-full" aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2L2 10L18 18" />
                <path d="M22 2L11 10" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRImpactConversation;
