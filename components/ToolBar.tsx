
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-y4a48zdedy";

function ChatBubble() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat_bubble">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chat_bubble">
          <path
            d={svgPaths.p32258880}
            fill="var(--fill-0, #1D9F9F)" // Changed from #616161 to teal color to indicate active state
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-ihtrzz font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-[#1D9F9F] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre font-bold">New Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-9 relative rounded-sm shrink-0 cursor-pointer bg-[rgba(29,159,159,0.08)] hover:bg-[rgba(29,159,159,0.16)]" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <ChatBubble />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="relative rounded-sm shrink-0 cursor-pointer" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <Button onClick={onClick} />
      </div>
    </div>
  );
}

function Frame1261158352({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Button1 onClick={onClick} />
      </div>
    </div>
  );
}

function Memory() {
  return (
    <div className="relative shrink-0 size-5" data-name="memory">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="memory">
          <path
            d={svgPaths.p1c6a2800}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContainedButton() {
  return (
    <div
      className="h-9 relative rounded-sm shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-center p-[8px] relative">
          <Memory />
        </div>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div className="relative rounded-sm shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.04)]" data-name="Icon Button">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <ContainedButton />
      </div>
    </div>
  );
}

function Folder() {
  return (
    <div className="relative shrink-0 size-5" data-name="folder">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="folder">
          <path
            d={svgPaths.p2b230e80}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre font-bold">AlphaPoint</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_drop_down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_drop_down">
          <path
            d={svgPaths.p1a511f40}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-9 relative rounded-sm shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <Folder />
          <Text1 />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-sm shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.04)]" data-name="Button">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <Button2 />
      </div>
    </div>
  );
}

function Frame1261158361() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <IconButton />
        <div
          className="bg-[rgba(33,33,33,0.12)] h-7 shrink-0 w-px"
          data-name="Seperator 1"
        />
        <Button3 />
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <div className="relative shrink-0 size-5" data-name="schedule">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="schedule">
          <path
            d={svgPaths.p258b3e00}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre font-bold">View History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-9 relative rounded-sm shrink-0" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <Schedule />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Button5({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="relative rounded-sm shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.04)]" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <Button4 onClick={onClick} />
      </div>
    </div>
  );
}

function Frame1261158360({ onToggleHistory }: { onToggleHistory: () => void }) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Frame1261158361 />
        <div
          className="bg-[rgba(33,33,33,0.12)] h-7 shrink-0 w-px"
          data-name="Seperator 1"
        />
        <Button5 onClick={onToggleHistory} />
      </div>
    </div>
  );
}

export function ToolBar({ onToggleHistory }: { onToggleHistory?: () => void }) {
  const navigate = useNavigate();

  // Handler for "New Chat" button - always navigates to home route
  const handleNewChat = () => {
    navigate('/');
  };

  // Handler for toggling history drawer
  const handleToggleHistory = () => {
    if (onToggleHistory) {
      onToggleHistory();
    }
  };

  return (
    <div className="bg-[#ffffff] h-[52px] border-b border-[rgba(33,33,33,0.12)] w-full flex-shrink-0">
      <div className="flex flex-row items-center h-full relative">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-0 relative w-full">
          <Frame1261158352 onClick={handleNewChat} />
          <Frame1261158360 onToggleHistory={handleToggleHistory} />
        </div>
      </div>
    </div>
  );
}
