import svgPaths from "./svg-y4a48zdedy";

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
            fill="var(--fill-0, #616161)"
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
          <div className="css-ihtrzz font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(33,33,33,0.38)] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre">New Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-9 relative rounded-sm shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <ChatBubble />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <Button />
      </div>
    </div>
  );
}

function Frame1261158352() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Button1 />
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
    <div className="relative rounded-sm shrink-0" data-name="Icon Button">
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
            <p className="block leading-[18px] whitespace-pre">AlphaPoint</p>
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
    <div className="relative rounded-sm shrink-0" data-name="Button">
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
            <p className="block leading-[18px] whitespace-pre">View History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-9 relative rounded-sm shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <Schedule />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <Button4 />
      </div>
    </div>
  );
}

function Frame1261158360() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Frame1261158361 />
        <div
          className="bg-[rgba(33,33,33,0.12)] h-7 shrink-0 w-px"
          data-name="Seperator 1"
        />
        <Button5 />
      </div>
    </div>
  );
}

export default function Frame1261158362() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[8px] relative size-full">
          <Frame1261158352 />
          <Frame1261158360 />
        </div>
      </div>
    </div>
  );
}