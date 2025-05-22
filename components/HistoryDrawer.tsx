
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-1pjymd8cqn";

function Title() {
  return (
    <div className="relative shrink-0" data-name="Title">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre font-bold">History</p>
        </div>
      </div>
    </div>
  );
}

function LeftSideFull() {
  return (
    <div className="min-h-9 relative shrink-0 flex items-center" data-name="_Left Side Full">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Title />
      </div>
    </div>
  );
}

function Close({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-5 cursor-pointer" data-name="Close" onClick={onClick}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Close">
          <path
            d={svgPaths.p3bdee980}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContainedButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="h-9 relative rounded-sm shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.04)]"
      data-name="Contained Button"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-center p-[8px] relative">
          <Close onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function Close1({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="relative rounded-sm shrink-0" 
      data-name="Close"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <ContainedButton onClick={onClick} />
      </div>
    </div>
  );
}

function ButtonSetA({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0" data-name="_Button Set A">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Close1 onClick={onClick} />
      </div>
    </div>
  );
}

function SideBarHeader({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="bg-[#ffffff] min-h-[52px] relative shrink-0 w-full"
      data-name="_Side Bar Header"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-6 pr-3 py-2 relative w-full">
          <LeftSideFull />
          <ButtonSetA onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

// Simplified implementation of the different components
// Since we want them to be clickable with specific routes

function HistoryItem({ 
  label, 
  isActive = false, 
  onClick 
}: { 
  label: string; 
  isActive?: boolean; 
  onClick?: () => void;
}) {
  // Only show active styling if isActive is explicitly true (not just truthy)
  const isActiveExplicit = isActive === true;
  
  return (
    <div 
      className={`h-9 relative shrink-0 w-full ${isActiveExplicit ? 'bg-[rgba(29,159,159,0.12)]' : 'hover:bg-[rgba(0,0,0,0.04)]'} cursor-pointer`}
      onClick={onClick}
    >
      <div className={`absolute ${isActiveExplicit ? 'border-[#1d9f9f] border-[0px_0px_0px_3px]' : ''} border-solid inset-0 pointer-events-none`} />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
              <div
                className={`css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap`}
                style={{ width: "min-content" }}
              >
                <p className="[text-overflow:inherit] [text-wrap-mode:inherit]' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
                  {label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="bg-[#ffffff] h-9 relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-start pb-1.5 pl-6 pr-4 pt-2 relative w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative w-full">
              <div className="css-1yvite font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap uppercase">
                <p className="block leading-[16px] whitespace-pre">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="relative shrink-0 w-full" data-name="Separator">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[7px] pt-2 px-0 relative w-full">
          <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="Line" />
        </div>
      </div>
    </div>
  );
}

// Main HistoryDrawer component
export function HistoryDrawer({ 
  isOpen, 
  onClose,
  activeItemIndex = null
}: { 
  isOpen: boolean; 
  onClose: () => void;
  activeItemIndex?: number | null;
}) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<number | null>(activeItemIndex);
  const drawerRef = useRef<HTMLDivElement>(null);

  // History item data: scenarios with route mapping
  const historyItems = [
    { label: "v1 Brand Performance (Basic Mira)", route: "/brand-report" },
    { label: "v2 Brand Performance (Canvas)", route: "/brand-report-canvas" },
    { label: "v3 PR Attribution: PepsiCo (Convo&Canvas)", route: "/pr-impact" },
    { label: "v4 Search Builder", route: "/search-builder" },
    { label: "Tesla's Stock Performance", route: "/brand-report" },
    { label: "Cybertruck Delivery Timeline Update", route: "/" },
    { label: "Preparing for Q4 Earnings Call", route: "/" },
    { label: "Handling Media Inquiry: Autopilot Safety", route: "/" },
    { label: "Crisis Response: Factory Unionization", route: "/" },
  ];
  
  // Recent items section
  const recentItems = [
    { label: "Responding to Misinformation on Social Media", route: "/" },
    { label: "PR Strategy for FSD Beta Rollout", route: "/" },
    { label: "Media Training for Executives", route: "/" },
    { label: "Addressing Customer Concerns on Battery Tech", route: "/" },
  ];
  
  // Last 30 days section
  const olderItems = [
    { label: "Reviewing Potential Brand Partnerships", route: "/" },
    { label: "Planning for Tesla's Next Major Event", route: "/" },
    { label: "Preparing for Q3 Earnings Call", route: "/" },
  ];

  // Sync activeItem with the prop value when it changes
  useEffect(() => {
    setActiveItem(activeItemIndex);
  }, [activeItemIndex]);

  // Handle click on a history item
  const handleItemClick = (index: number, route: string) => {
    setActiveItem(index);
    navigate(route);
    onClose();
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <div 
      className={`fixed top-14 right-0 bottom-0 z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ width: '360px' }}
    >
      <div 
        ref={drawerRef}
        className="bg-[#ffffff] relative shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] size-full overflow-y-auto"
      >
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start p-0 relative size-full">
          <SideBarHeader onClose={onClose} />
          
          <div className="relative shrink-0 w-full overflow-y-auto">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
              {/* Featured scenarios */}
              {historyItems.slice(0, 4).map((item, index) => (
                <HistoryItem 
                  key={index}
                  label={item.label}
                  isActive={activeItem !== null && activeItem === index}
                  onClick={() => handleItemClick(index, item.route)}
                />
              ))}
              
              <Separator />
              
              {/* Tesla history items */}
              <HistoryItem 
                label={historyItems[4].label}
                isActive={activeItem !== null && activeItem === 4}
                onClick={() => handleItemClick(4, historyItems[4].route)}
              />
              
              {historyItems.slice(5).map((item, index) => (
                <HistoryItem 
                  key={index + 5}
                  label={item.label}
                  isActive={activeItem !== null && activeItem === index + 5}
                  onClick={() => handleItemClick(index + 5, item.route)}
                />
              ))}
              
              <Separator />
              
              {/* Last 7 days section */}
              <SectionHeader title="last 7 days" />
              
              {recentItems.map((item, index) => (
                <HistoryItem 
                  key={index + historyItems.length}
                  label={item.label}
                  isActive={activeItem !== null && activeItem === index + historyItems.length}
                  onClick={() => handleItemClick(index + historyItems.length, item.route)}
                />
              ))}
              
              <Separator />
              
              {/* Last 30 days section */}
              <SectionHeader title="last 30 days" />
              
              {olderItems.map((item, index) => (
                <HistoryItem 
                  key={index + historyItems.length + recentItems.length}
                  label={item.label}
                  isActive={activeItem !== null && activeItem === index + historyItems.length + recentItems.length}
                  onClick={() => handleItemClick(index + historyItems.length + recentItems.length, item.route)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
