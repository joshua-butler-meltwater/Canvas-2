import svgPaths from "./svg-1pjymd8cqn";

function Title() {
  return (
    <div className="relative shrink-0" data-name="Title">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">History</p>
        </div>
      </div>
    </div>
  );
}

function LeftSideFull() {
  return (
    <div className="min-h-9 relative shrink-0" data-name="_Left Side Full">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Title />
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-5" data-name="Close">
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

function ContainedButton() {
  return (
    <div
      className="h-9 relative rounded-sm shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-center p-[8px] relative">
          <Close />
        </div>
      </div>
    </div>
  );
}

function Close1() {
  return (
    <div className="relative rounded-sm shrink-0" data-name="Close">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <ContainedButton />
      </div>
    </div>
  );
}

function ButtonSetA() {
  return (
    <div className="relative shrink-0" data-name="_Button Set A">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Close1 />
      </div>
    </div>
  );
}

function SideBarHeader() {
  return (
    <div
      className="bg-[#ffffff] min-h-[52px] relative shrink-0 w-full"
      data-name="_Side Bar Header"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-6 pr-3 py-2 relative w-full">
          <LeftSideFull />
          <ButtonSetA />
        </div>
      </div>
    </div>
  );
}

function Frame1261158278() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-jdk5g7 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`Tesla's Stock Performance`}</p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="bg-[rgba(29,159,159,0.12)] h-9 relative shrink-0 w-full"
      data-name="Component 2"
    >
      <div className="absolute border-[#1d9f9f] border-[0px_0px_0px_3px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158278 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158279() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Cybertruck Delivery Timeline Update
          </p>
        </div>
      </div>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-4" data-name="MoreVert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="MoreVert">
          <path
            d={svgPaths.p433a800}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContainedButton1() {
  return (
    <div
      className="bg-[rgba(33,33,33,0.12)] h-6 relative rounded-3xl shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-center p-[4px] relative">
          <MoreVert />
        </div>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div className="h-6 relative rounded-3xl shrink-0" data-name="Icon Button">
      <div className="box-border content-stretch flex flex-col h-6 items-start justify-start p-0 relative">
        <ContainedButton1 />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158279 />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function Frame1261158280() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Preparing for Q4 Earnings Call
          </p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 4">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158280 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158281() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Handling Media Inquiry: Autopilot Safety
          </p>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158281 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158282() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Crisis Response: Factory Unionization
          </p>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 6">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158282 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158283() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Supercharger Network Expansion Messaging
          </p>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 7">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158283 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158284() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Investor Relations: Stock Performance
          </p>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 8">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158284 />
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

function ListComponents() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="List Components"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Separator />
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Section Title"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative w-full">
        <div className="css-1yvite font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap uppercase">
          <p className="block leading-[16px] whitespace-pre">last 7 days</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-start pb-1.5 pl-6 pr-4 pt-2 relative w-full">
          <SectionTitle />
        </div>
      </div>
    </div>
  );
}

function ListComponents1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Components">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Header />
      </div>
    </div>
  );
}

function Frame1261158285() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Responding to Misinformation on Social Media
          </p>
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 9">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158285 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158286() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            PR Strategy for FSD Beta Rollout
          </p>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 10">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158286 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158287() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`Media Training for Executives	`}</p>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 11">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158287 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158288() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`Addressing Customer Concerns on Battery Tech	`}</p>
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158288 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158289() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`ESG (Environmental, Social, Governance) Reporting	`}</p>
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 13">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158289 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158290() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`Gigafactory Expansion Public Relations	`}</p>
        </div>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 14">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158290 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158291() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Recall Communication Strategy
          </p>
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 15">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158291 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158292() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Handling High-Profile Twitter Mentions
          </p>
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 16">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158292 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158293() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`Press Release Draft: Tesla Energy Growth	`}</p>
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 17">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158293 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158294() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Responding to Late-Night News Inquiries
          </p>
        </div>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 18">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158294 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158295() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Content Strategy for Tesla Blog
          </p>
        </div>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 19">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158295 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158296() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`AI-Generated Sentiment Analysis Review	`}</p>
        </div>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158296 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158297() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Reviewing Potential Brand Partnerships
          </p>
        </div>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 21">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158297 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158298() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Planning for Tesla’s Next Major Event
          </p>
        </div>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 22">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158298 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158299() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`Press Release Draft: Tesla Energy Growth	`}</p>
        </div>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 23">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158299 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158300() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Responding to Late-Night News Inquiries
          </p>
        </div>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 24">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158300 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158301() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`AI-Generated Sentiment Analysis Review	`}</p>
        </div>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 25">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158301 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Section Title"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative w-full">
        <div className="css-1yvite font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap uppercase">
          <p className="block leading-[16px] whitespace-pre">last 30 days</p>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-start pb-1.5 pl-6 pr-4 pt-2 relative w-full">
          <SectionTitle1 />
        </div>
      </div>
    </div>
  );
}

function ListComponents3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Components">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Header1 />
      </div>
    </div>
  );
}

function Frame1261158302() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Reviewing Potential Brand Partnerships
          </p>
        </div>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 26">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158302 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158303() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Planning for Tesla’s Next Major Event
          </p>
        </div>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 27">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158303 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158304() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div
          className="css-q9ks32 flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Preparing for Q3 Earnings Call
          </p>
        </div>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Component 28">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start pl-6 pr-3 py-1 relative w-full">
          <Frame1261158304 />
        </div>
      </div>
    </div>
  );
}

function Frame1261158222() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
        <Component8 />
        <ListComponents />
        <ListComponents1 />
        <Component9 />
        <Component10 />
        <Component11 />
        <Component12 />
        <Component13 />
        <Component14 />
        <Component15 />
        <Component16 />
        <Component17 />
        <Component18 />
        <Component19 />
        <Component20 />
        <Component21 />
        <Component22 />
        <Component23 />
        <Component24 />
        <Component25 />
        <ListComponents />
        <ListComponents3 />
        <Component26 />
        <Component27 />
        <Component28 />
      </div>
    </div>
  );
}

export default function HistoryDrawer() {
  return (
    <div
      className="bg-[#ffffff] relative shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] size-full"
      data-name="History Drawer"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start p-0 relative size-full">
        <SideBarHeader />
        <Frame1261158222 />
      </div>
    </div>
  );
}