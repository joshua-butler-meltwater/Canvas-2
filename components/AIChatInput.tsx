
import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-rznp95eofg";
import favoritesSvgPaths from "../imports/svg-jkncvjwrnr";

type ToggleButtonProps = {
  icon: ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

// Toggle button component (Canvas or Search builder)
const ToggleButton = ({ icon, label, isActive, onClick }: ToggleButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Background classes based on state:
  // - Active: teal background (rgba(29,159,159,0.12))
  // - Hovered: gray background (rgba(33,33,33,0.06))
  // - Default: white/transparent background
  const backgroundClass = isActive 
    ? 'bg-[rgba(29,159,159,0.12)]' 
    : isHovered 
      ? 'bg-[rgba(33,33,33,0.06)]' 
      : '';
  
  // Border classes based on state:
  // - Active: teal border (#1d9f9f)
  // - Default/Hovered: gray border (#9e9e9e)
  const borderClass = isActive ? 'border-[#1d9f9f]' : 'border-[#9e9e9e]';
  
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

// Send button with active/inactive states
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

// SuggestionCard component for prompt suggestions
const SuggestionCard = ({ 
  iconPath, 
  label, 
  isActive = false,
  isHovered = false,
  onClick 
}: { 
  iconPath: string; 
  label: string; 
  isActive?: boolean;
  isHovered?: boolean;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(isHovered);
  
  let cardStyle = 'bg-[#ffffff]';
  let borderStyle = 'border border-[rgba(33,33,33,0.12)]';
  
  if (isActive) {
    cardStyle = 'bg-gradient-to-br from-[#F7E6F3] to-[#E0F1F2]';
    borderStyle = 'border-2 border-[#b627a1]';
  } else if (hovered) {
    cardStyle = 'bg-[#f5f5f5]';
    borderStyle = 'border border-[#b627a1]';
  }
  
  return (
    <div
      className={`basis-0 ${cardStyle} grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0 cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className={`absolute ${borderStyle} border-solid inset-0 pointer-events-none rounded-lg`} />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full bg-[rgba(0,0,0,0)]">
          <div className="relative shrink-0 size-9">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
              <g id="Alert/Mira Halo Icon">
                <circle cx="18" cy="18" fill="url(#paint0_linear_icon)" id="Halo" opacity="0.1" r="18" />
                <g id="Icons">
                  <path d={iconPath} fill="url(#paint1_linear_icon)" id="Vector" />
                </g>
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_icon"
                  x1="-2.79746e-07"
                  x2="36.0003"
                  y1="35.9677"
                  y2="35.9673"
                >
                  <stop stopColor="#8B49A0" />
                  <stop offset="1" stopColor="#497C9F" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_icon"
                  x1="9.66667"
                  x2="26.3335"
                  y1="25.4858"
                  y2="25.4856"
                >
                  <stop stopColor="#8B49A0" />
                  <stop offset="1" stopColor="#497C9F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
              <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
                <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
                  {label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Favorite Card component
const FavoriteCard = ({ 
  label, 
  isActive = false,
  isHovered = false,
  onClick 
}: { 
  label: string; 
  isActive?: boolean;
  isHovered?: boolean;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(isHovered);
  
  let borderStyle = 'border border-[rgba(33,33,33,0.12)]';
  
  if (isActive) {
    borderStyle = 'border-2 border-[#b627a1]';
  } else if (hovered) {
    borderStyle = 'border border-[#b627a1]';
  }
  
  return (
    <div
      className="bg-[#f2fafa] min-w-[200px] relative rounded-lg shrink-0 w-[247px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className={`absolute ${borderStyle} border-solid inset-0 pointer-events-none rounded-lg`} />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-4 pr-2 py-2 relative w-[247px] h-[68px]">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
              <div className="font-['Helvetica_Neue:Regular',_sans-serif] font-normal min-w-full not-italic relative text-[#212121] text-[12px] text-left overflow-hidden" style={{ width: "min-content" }}>
                <p className="block leading-[16px] line-clamp-3 text-ellipsis overflow-hidden">
                  {label}
                </p>
              </div>
            </div>
          </div>
          <div className="h-6 relative rounded-3xl shrink-0">
            <div className="box-border content-stretch flex flex-col h-6 items-start justify-start p-0 relative">
              <div className="h-6 relative rounded-3xl shrink-0">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row h-6 items-center justify-center p-[4px] relative">
                    <div className="relative shrink-0 size-4">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="StarFilled">
                          <path d={favoritesSvgPaths.p363c3800} fill="var(--fill-0, #1D9F9F)" id="Vector" />
                        </g>
                      </svg>
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

// Tab component for Core/Favorite prompts
const TabGroup = ({ activeTab, setActiveTab }: { activeTab: 'core' | 'favorite'; setActiveTab: (tab: 'core' | 'favorite') => void }) => {
  return (
    <div className="relative shrink-0">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative">
        {/* Core prompts tab */}
        <div
          className="max-w-64 min-w-32 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 cursor-pointer"
          onClick={() => setActiveTab('core')}
        >
          <div className={`absolute border-${activeTab === 'core' ? '[#00acc1]' : '[#e0e0e0]'} border-[0px_0px_${activeTab === 'core' ? '2px' : '1px'}] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]`} />
          <div className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative">
            <div className="h-9 order-3 relative shrink-0">
              <div className="flex flex-row items-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-start p-[8px] relative">
                  <div className="relative shrink-0">
                    <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative">
                      <div className="relative shrink-0">
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1 py-0 relative">
                            <div className={`css-ezl462 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[${activeTab === 'core' ? '#424242' : '#616161'}] text-[14px] text-left text-nowrap`}>
                              <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre font-bold">
                                Core prompts
                              </p>
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
        
        {/* Favorite prompts tab */}
        <div
          className="max-w-64 min-w-32 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 cursor-pointer"
          onClick={() => setActiveTab('favorite')}
        >
          <div className={`absolute border-${activeTab === 'favorite' ? '[#00acc1]' : '[#e0e0e0]'} border-[0px_0px_${activeTab === 'favorite' ? '2px' : '1px'}] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]`} />
          <div className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative">
            <div className="h-9 order-3 relative shrink-0">
              <div className="flex flex-row items-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-start p-[8px] relative">
                  <div className="relative shrink-0">
                    <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative">
                      <div className="relative shrink-0">
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1 py-0 relative">
                            <div className={`css-rlefa5 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[${activeTab === 'favorite' ? '#424242' : '#616161'}] text-[14px] text-left text-nowrap`}>
                              <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre font-bold">
                                Favorite prompts
                              </p>
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
    </div>
  );
};

// AI Avatar component
const AiAvatar = () => {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="AI Avatar">
      <div className="absolute bottom-[-5.556%] left-[-4.167%] right-[-4.167%] top-[-2.778%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 66 66"
        >
          <g filter="url(#filter0_ddd_avatar)" id="AI Avatar">
            <circle
              cx="33"
              cy="32"
              fill="url(#paint0_radial_avatar)"
              id="Ellipse 1"
              r="30"
            />
            <g clipPath="url(#clip0_avatar)" id="Meltwater Logo">
              <path
                clipRule="evenodd"
                d={svgPaths.p28160500}
                fill="var(--fill-0, white)"
                fillRule="evenodd"
                id="Fill-1"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="65"
              id="filter0_ddd_avatar"
              width="65"
              x="0.5"
              y="0.333333"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.833333" />
              <feGaussianBlur stdDeviation="1.25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_avatar"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1.66667" />
              <feGaussianBlur stdDeviation="0.833333" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="effect1_dropShadow_avatar"
                mode="normal"
                result="effect2_dropShadow_avatar"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.833333" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
              />
              <feBlend
                in2="effect2_dropShadow_avatar"
                mode="normal"
                result="effect3_dropShadow_avatar"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect3_dropShadow_avatar"
                mode="normal"
                result="shape"
              />
            </filter>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(63 2) rotate(135) scale(84.8528)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_avatar"
              r="1"
            >
              <stop stopColor="#28BBBB" />
              <stop offset="1" stopColor="#B627A1" />
            </radialGradient>
            <clipPath id="clip0_avatar">
              <rect
                fill="white"
                height="16.6667"
                transform="translate(13 24)"
                width="39.0351"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

// Beta pill component
const BetaPill = () => {
  return (
    <div className="bg-[#ede7f6] h-5 relative rounded shrink-0">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-5 items-center justify-start px-1 py-0 relative">
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
              <div className="css-4w1kd flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e35b1] text-[12px] text-left text-nowrap">
                <p className="block leading-[16px] whitespace-pre">Beta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#5e35b1] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
};

// Action buttons for cards section
const ActionButtons = ({ isExpanded, toggleExpanded }: { isExpanded: boolean, toggleExpanded: () => void }) => {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        {/* Library button */}
        <div className="relative rounded-sm shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.04)]">
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
            <div className="h-9 relative rounded-sm shrink-0">
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
                  <div className="relative shrink-0 size-5">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="GridView">
                        <path d={svgPaths.p1d245400} fill="var(--fill-0, #616161)" />
                      </g>
                    </svg>
                  </div>
                  <div className="relative shrink-0">
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
                        <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
                          <p className="block leading-[18px] whitespace-pre font-bold">Go to full prompt library</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Show more/less button */}
        <div className="relative rounded-sm shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.04)]" onClick={toggleExpanded}>
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
            <div className="h-9 relative rounded-sm shrink-0">
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
                  <div className="relative shrink-0">
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
                        <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
                          <p className="block leading-[18px] whitespace-pre font-bold">{isExpanded ? "Show less" : "Show more"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-5">
                    {isExpanded ? (
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="keyboard_arrow_up">
                          <path d={favoritesSvgPaths.p3c0c2231} fill="var(--fill-0, #616161)" />
                        </g>
                      </svg>
                    ) : (
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="KeyboardArrowDown">
                          <path d={favoritesSvgPaths.p1cd2c000} fill="var(--fill-0, #616161)" />
                        </g>
                      </svg>
                    )}
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

// Main component
export const AIChatInput = () => {
  const navigate = useNavigate();
  
  // States
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [activeCanvas, setActiveCanvas] = useState(false);
  const [activeSearchBuilder, setActiveSearchBuilder] = useState(false);
  const [activeTab, setActiveTab] = useState<'core' | 'favorite'>('core');
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false); // For animation state
  
  // Refs
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Reset state when navigating back to home
  useEffect(() => {
    // Reset specific navigation parameters when component mounts
    const resetToolbar = () => {
      setActiveCanvas(false);
      setActiveSearchBuilder(false);
      setActiveCardIndex(null);
      setInputValue('');
    };
    
    resetToolbar();
  }, []);
  
  // Event handlers
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
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
  
  // Handle the animation and navigation to conversation view
  const navigateToConversation = () => {
    // Start the animation
    setIsTransitioning(true);
    
    // Navigate after a delay for the animation to complete
    setTimeout(() => {
      navigate('/conversation');
    }, 600); // Animation duration
  };
  
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Check if we should enter conversation mode (Canvas active + PR Impact selected)
      if (activeCanvas && activeCardIndex === 5) { // PR Impact card index is 5
        navigateToConversation();
        return;
      }
      
      // Handle other navigation scenarios
      if (activeSearchBuilder && inputValue.includes("Tobii")) {
        navigate('/search-builder');
      } else if (activeCanvas && inputValue.includes("impact report") && inputValue.includes("press release")) {
        navigate('/pr-impact');
      } else if (activeCanvas) {
        navigate('/brand-report-canvas');
      } else if (inputValue.toLowerCase().includes('brand performance')) {
        navigate('/brand-report');
      }
    }
  };
  
  const handleCardClick = (index: number) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
    
    if (activeTab === 'core') {
      // Handle the specific routing scenarios
      const promptLabel = corePrompts[index].label;
      
      if (promptLabel === "Brand Performance") {
        setInputValue("Give me brand performance report for Nike");
      } else if (promptLabel === "PR Impact") {
        setInputValue("Create an impact report for this press release: https://www.pepsico.com/our-stories/press-release/pepsico-to-acquire-poppi03172025");
        
        // If Canvas is already active and PR Impact is clicked, prepare for conversation mode
        if (activeCanvas) {
          // We don't navigate immediately - wait for the send button
        }
      } else {
        setInputValue(promptLabel);
      }
    } else {
      setInputValue(favoritePrompts[index].label);
    }
    
    inputRef.current?.focus();
  };
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Get shadow classes based on input state
  const getInputContainerClasses = () => {
    if (isFocused) {
      // 2px purple border with shadow
      return 'shadow-[0px_0px_0px_2px_#b627a1,0px_4px_22px_0px_rgba(0,0,0,0.06)]';
    } else if (isInputHovered) {
      // 1px purple border with shadow
      return 'shadow-[0px_0px_0px_1px_#b627a1,0px_4px_22px_0px_rgba(0,0,0,0.06)]';
    } else {
      // Default shadow only (1px transparent border + shadow)
      return 'shadow-[0px_0px_0px_1px_rgba(0,0,0,0.10),0px_4px_22px_0px_rgba(0,0,0,0.06)]';
    }
  };
  
  // Sample prompts data
  const corePrompts = [
    { icon: svgPaths.p125e3300, label: "Media Brief" },
    { icon: svgPaths.p20434840, label: "Industry News" },
    { icon: svgPaths.p2e680300, label: "Competitive Intelligence" },
    { icon: svgPaths.p3cb96100, label: "Consumer Insights" },
    { icon: svgPaths.p421ff00, label: "Brand Performance" },
    { icon: svgPaths.p378c9880, label: "PR Impact" },
    { icon: favoritesSvgPaths.p176ecc00, label: "Identify Journalists" },
    { icon: favoritesSvgPaths.p341ca00, label: "News Trends and Topics" }
  ];
  
  // Additional prompts for expanded view
  const visibleCorePrompts = isExpanded ? corePrompts : corePrompts.slice(0, 6);
  
  // Favorite prompts data
  const favoritePrompts = [
    { label: "Key messages and anticipated questions to prepare spokespeople for media encounters." },
    { label: "Identify key journalists regularly covering Tesla with positive framing" },
    { label: "Monitor consumer forums for recurring Tesla quality concerns" },
    { label: "Identify influencers amplifying Tesla messaging without official partnerships" },
    { label: "Monitor local news coverage of Tesla factories in operating communities" },
    { label: "Analyze investor community discussions about Tesla's future prospects" }
  ];

  return (
    <div className="flex flex-col items-center gap-5 max-w-[800px] mx-auto pt-[56px] pr-[0px] pb-[0px] pl-[0px]">
      {/* AI Avatar and header */}
      <div 
        className={`relative shrink-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative">
          <AiAvatar />
          <div className="relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative">
              <div className="relative shrink-0">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#212121] text-center text-nowrap">
                  <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[0px]">
                    <p className="leading-[26px] text-[20px] text-nowrap whitespace-pre">
                      Hello Leya,
                      <span className="font-['Helvetica_Neue:Regular',_sans-serif] font-normal not-italic">{` I'm Mira.`}</span>
                    </p>
                  </div>
                  <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[20px]">
                    <p className="block leading-[26px] text-nowrap whitespace-pre text-[20px]">
                      How can I help you today?
                    </p>
                  </div>
                </div>
              </div>
              <BetaPill />
            </div>
          </div>
        </div>
      </div>

      {/* Main search card - with transition styles */}
      <div 
        className={`relative rounded-lg shrink-0 w-full transition-all duration-500 ease-in-out ${
          isTransitioning 
            ? 'transform translate-y-[80vh]' 
            : 'transform translate-y-0'
        }`}
      >
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-[20px] relative w-full">
            {/* Text input section - with dynamic border and shadow */}
            <div className="relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end relative w-full p-[0px] px-[0px] py-[10px]">
                <div 
                  className={`bg-[#ffffff] relative rounded-lg shrink-0 w-full max-w-[800px] mx-auto transition-all duration-200 z-10 ${getInputContainerClasses()}`}
                  style={{ boxSizing: 'border-box' }}
                  onClick={() => inputRef.current?.focus()}
                  onMouseEnter={() => setIsInputHovered(true)}
                  onMouseLeave={() => setIsInputHovered(false)}
                >
                  <div className="flex flex-col justify-end overflow-clip relative size-full">
                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end pl-4 pr-2 py-2 relative w-full rounded-[8px] overflow-hidden">
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
                            placeholder="Ask me a question..."
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
                                    onClick={() => {
                                      setActiveCanvas(!activeCanvas);
                                      // If switching to inactive, and search builder is active,
                                      // also turn off search builder to avoid confusing state
                                      if (activeCanvas && activeSearchBuilder) {
                                        setActiveSearchBuilder(false);
                                      }
                                    }} 
                                  />
                                  <ToggleButton 
                                    icon={<SearchIcon isActive={activeSearchBuilder} />} 
                                    label="Search builder" 
                                    isActive={activeSearchBuilder}
                                    onClick={() => {
                                      setActiveSearchBuilder(!activeSearchBuilder);
                                      // If enabling search builder, automatically set input
                                      if (!activeSearchBuilder) {
                                        setInputValue("Tobii, Tobii AB");
                                      }
                                    }} 
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
            
            {/* Tabs section - with fade-out animation when transitioning */}
            <div 
              className={`relative shrink-0 w-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-44 items-center justify-center pl-4 pr-3 py-0 relative w-full max-w-[800px] mx-auto border-b border-[rgba(33,33,33,0.12)]">
                  <TabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
              </div>
            </div>
            
            {/* Prompts cards - with fade-out animation when transitioning */}
            <div 
              className={`relative shrink-0 w-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative max-w-[800px] mx-auto">
                {/* Cards grid */}
                <div className="relative shrink-0 w-full">
                  <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start p-0 relative w-full">
                    {activeTab === 'core' ? (
                      // Core prompts tab
                      visibleCorePrompts.map((prompt, index) => (
                        <SuggestionCard 
                          key={index}
                          iconPath={prompt.icon}
                          label={prompt.label}
                          isActive={activeCardIndex === index}
                          isHovered={hoveredCardIndex === index}
                          onClick={() => handleCardClick(index)}
                        />
                      ))
                    ) : (
                      // Favorite prompts tab
                      favoritePrompts.map((prompt, index) => (
                        <FavoriteCard 
                          key={index}
                          label={prompt.label}
                          isActive={activeCardIndex === index}
                          isHovered={hoveredCardIndex === index}
                          onClick={() => handleCardClick(index)}
                        />
                      ))
                    )}
                  </div>
                </div>
                
                {/* Action buttons */}
                <ActionButtons isExpanded={isExpanded} toggleExpanded={toggleExpanded} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
