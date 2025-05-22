import svgPaths from "./svg-6fss2amaeb";

function AiAvatar() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="AI Avatar">
      <div className="absolute bottom-[-5.556%] left-[-4.167%] right-[-4.167%] top-[-2.778%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 66 66"
        >
          <g filter="url(#filter0_ddd_34_4488)" id="AI Avatar">
            <circle
              cx="33"
              cy="32"
              fill="url(#paint0_radial_34_4488)"
              id="Ellipse 1"
              r="30"
            />
            <g clipPath="url(#clip0_34_4488)" id="Meltwater Logo">
              <path
                clipRule="evenodd"
                d={svgPaths.p580ea00}
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
              id="filter0_ddd_34_4488"
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
                result="effect1_dropShadow_34_4488"
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
                in2="effect1_dropShadow_34_4488"
                mode="normal"
                result="effect2_dropShadow_34_4488"
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
                in2="effect2_dropShadow_34_4488"
                mode="normal"
                result="effect3_dropShadow_34_4488"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect3_dropShadow_34_4488"
                mode="normal"
                result="shape"
              />
            </filter>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(63 2) rotate(135) scale(84.8528)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_34_4488"
              r="1"
            >
              <stop stopColor="#28BBBB" />
              <stop offset="1" stopColor="#B627A1" />
            </radialGradient>
            <clipPath id="clip0_34_4488">
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
}

function Header() {
  return (
    <div className="relative shrink-0" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative">
        <AiAvatar />
      </div>
    </div>
  );
}

function Initials() {
  return (
    <div className="absolute h-9 left-0 top-0 w-6" data-name="Initials">
      <div className="absolute bottom-[33.333%] css-xb0uby flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] left-0 not-italic right-0 text-[#ffffff] text-[12px] text-center top-0">
        <p className="block leading-[16px]">LH</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="bg-[#1e88e5] relative rounded-[30px] shrink-0 size-6"
      data-name="avatar"
    >
      <div className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Initials />
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Star icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Star">
          <path
            d={svgPaths.p3a272c00}
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
      className="h-6 relative rounded-3xl shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-center p-[4px] relative">
          <StarIcon />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="relative shrink-0" data-name="Button container">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <ContainedButton />
      </div>
    </div>
  );
}

function MessageTextContainer() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Message text container"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center overflow-clip p-0 relative w-full">
        <div
          className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[16px] text-left"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[22px]">{`can you give me a PR attribution report for this Press Release: https://www.pepsico.com/our-stories/press-release/pepsico-to-acquire-poppi03172025"`}</p>
        </div>
        <ButtonContainer />
      </div>
    </div>
  );
}

function MessageContent() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Message content"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[12px] relative w-full border border-[rgba(33,33,33,0.12)] rounded-[8px]">
          <MessageTextContainer />
        </div>
      </div>
    </div>
  );
}

function MessageContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message container">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold h-6 justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-[400px]">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit font-bold">
            Leya
          </p>
        </div>
        <MessageContent />
      </div>
    </div>
  );
}

function Message() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="message"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        <MessageContainer />
      </div>
    </div>
  );
}

function ChatMessage() {
  return (
    <div className="relative shrink-0 w-full" data-name="chat message">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <Avatar />
        <Message />
      </div>
    </div>
  );
}

function MeltwaterLogo1() {
  return (
    <div
      className="absolute bottom-[34.036%] left-[16.667%] right-[16.667%] top-[37.5%]"
      data-name="Meltwater Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 7"
      >
        <g clipPath="url(#clip0_34_4493)" id="Meltwater Logo">
          <path
            clipRule="evenodd"
            d={svgPaths.p32d2d00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill-1"
          />
        </g>
        <defs>
          <clipPath id="clip0_34_4493">
            <rect fill="white" height="6.83146" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AiAvatar1() {
  return (
    <div
      className="relative rounded-[36px] shrink-0 size-6"
      data-name="AI Avatar"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 24 24\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.4 2.4 -2.4 -2.4 24 0.0000014305)\\\'><stop stop-color=\\\'rgba(40,187,187,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(76,150,181,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(111,113,174,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(147,76,168,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(182,39,161,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <MeltwaterLogo1 />
    </div>
  );
}

function MessageContainer1() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Message container"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[12px] relative w-full border border-[rgba(33,33,33,0.12)] rounded-[8px]">
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22px]">
              Before I give you the report, I need some more details about the
              attribution specifications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="css-jat1mc font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#424242] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre font-bold text-[16px]">Time range</p>
        </div>
      </div>
    </div>
  );
}

function Collapse() {
  return (
    <div className="relative shrink-0 size-5" data-name="collapse">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="collapse">
          <path
            d={svgPaths.pf177000}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function AccordionContent() {
  return (
    <div
      className="h-12 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full"
      data-name="_Accordion Content"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-4 py-0 relative w-full">
          <Title />
          <Collapse />
        </div>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <RadioButton />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Last 7 days</p>
        </div>
      </div>
    </div>
  );
}

function RadioList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Radio List">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel />
      </div>
    </div>
  );
}

function Vector1() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector1 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel1() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <RadioButton1 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Last month</p>
        </div>
      </div>
    </div>
  );
}

function RadioList1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Radio List">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel1 />
      </div>
    </div>
  );
}

function Vector2() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p13292900}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector2 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel2() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <RadioButton2 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Last quarter</p>
        </div>
      </div>
    </div>
  );
}

function RadioList2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Radio List">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel2 />
      </div>
    </div>
  );
}

function Vector3() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton3() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector3 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel3() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <RadioButton3 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Custom</p>
        </div>
      </div>
    </div>
  );
}

function RadioList3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Radio List">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel3 />
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="relative shrink-0 w-full" data-name="time">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <RadioList />
        <RadioList1 />
        <RadioList2 />
        <RadioList3 />
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="relative shrink-0 w-full" data-name="Accordion">
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <AccordionContent />
        <Time />
      </div>
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre font-bold text-[16px]">Channels</p>
        </div>
      </div>
    </div>
  );
}

function Collapse1() {
  return (
    <div className="relative shrink-0 size-5" data-name="collapse">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="collapse">
          <path
            d={svgPaths.pf177000}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function AccordionHeader() {
  return (
    <div className="h-12 relative shrink-0 w-full" data-name="_AccordionHeader">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-4 py-0 relative w-full">
          <Title1 />
          <Collapse1 />
        </div>
      </div>
    </div>
  );
}

function Vector4() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c99800}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector4 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel4() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Online news</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel4 />
      </div>
    </div>
  );
}

function Vector5() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c99800}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector5 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel6() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox1 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Broadcasts</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel6 />
      </div>
    </div>
  );
}

function Vector6() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c99800}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector6 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel8() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox2 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Print</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel8 />
      </div>
    </div>
  );
}

function Vector7() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p15a1b680}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector7 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel10() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox3 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Social media</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel10 />
      </div>
    </div>
  );
}

function Frame1261158357() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel5 />
        <CheckboxLabel7 />
        <CheckboxLabel9 />
        <CheckboxLabel11 />
      </div>
    </div>
  );
}

function Vector8() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p15a1b680}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector8 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel12() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox4 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Blogs</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel12 />
      </div>
    </div>
  );
}

function Vector9() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p15a1b680}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector9 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel14() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox5 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Forums</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel14 />
      </div>
    </div>
  );
}

function Vector10() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p15a1b680}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector10 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel16() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox6 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Podcasts</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel16 />
      </div>
    </div>
  );
}

function Frame1261158356() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel13 />
        <CheckboxLabel15 />
        <CheckboxLabel17 />
      </div>
    </div>
  );
}

function Media() {
  return (
    <div className="relative shrink-0 w-full" data-name="media">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <Frame1261158357 />
        <Frame1261158356 />
      </div>
    </div>
  );
}

function Accordion1() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Accordion">
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <AccordionHeader />
        <Media />
      </div>
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Title2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="css-jat1mc font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#424242] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre font-bold text-[16px]">
            Audience segmentation
          </p>
        </div>
      </div>
    </div>
  );
}

function Collapse2() {
  return (
    <div className="relative shrink-0 size-5" data-name="collapse">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="collapse">
          <path
            d={svgPaths.pf177000}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function AccordionContent1() {
  return (
    <div
      className="h-12 relative shrink-0 w-full"
      data-name="_Accordion Content"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-4 py-0 relative w-full">
          <Title2 />
          <Collapse2 />
        </div>
      </div>
    </div>
  );
}

function Vector11() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c99800}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector11 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel18() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox7 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Online news</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel18 />
      </div>
    </div>
  );
}

function Vector12() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c99800}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector12 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel20() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox8 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Broadcasts</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel20 />
      </div>
    </div>
  );
}

function Vector13() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c99800}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector13 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel22() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox9 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Print</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel22 />
      </div>
    </div>
  );
}

function Vector14() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p15a1b680}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector14 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel24() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox10 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Social media</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel24 />
      </div>
    </div>
  );
}

function Frame1261158358() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel19 />
        <CheckboxLabel21 />
        <CheckboxLabel23 />
        <CheckboxLabel25 />
      </div>
    </div>
  );
}

function Vector15() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p15a1b680}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector15 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel26() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox11 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Blogs</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel26 />
      </div>
    </div>
  );
}

function Vector16() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p15a1b680}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector16 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel28() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox12 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Forums</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel28 />
      </div>
    </div>
  );
}

function Vector17() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p15a1b680}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Checkbox">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative">
          <Vector17 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel30() {
  return (
    <div className="relative shrink-0" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Checkbox13 />
        <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Podcasts</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel30 />
      </div>
    </div>
  );
}

function Frame1261158359() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel27 />
        <CheckboxLabel29 />
        <CheckboxLabel31 />
      </div>
    </div>
  );
}

function MediaContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Media content">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <Frame1261158358 />
        <Frame1261158359 />
      </div>
    </div>
  );
}

function Accordion2() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Accordion">
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <AccordionContent1 />
        <MediaContent />
      </div>
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Title3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="css-jat1mc font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#424242] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre font-bold text-[16px]">Benchmarks</p>
        </div>
      </div>
    </div>
  );
}

function Collapse3() {
  return (
    <div className="relative shrink-0 size-5" data-name="collapse">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="collapse">
          <path
            d={svgPaths.pf177000}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function AccordionContent2() {
  return (
    <div
      className="h-12 relative shrink-0 w-full"
      data-name="_Accordion Content"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-4 py-0 relative w-full">
          <Title3 />
          <Collapse3 />
        </div>
      </div>
    </div>
  );
}

function Vector18() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p13292900}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton4() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector18 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton4 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            Previous period
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel32 />
      </div>
    </div>
  );
}

function Vector19() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton5() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector19 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton5 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            Tyear-over-year
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel34 />
      </div>
    </div>
  );
}

function Vector20() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton6() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector20 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton6 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            Industry average
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel36 />
      </div>
    </div>
  );
}

function Vector21() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton7() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector21 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton7 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            Competitor benchmark
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel38 />
      </div>
    </div>
  );
}

function MediaContent1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Media content"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel33 />
        <CheckboxLabel35 />
        <CheckboxLabel37 />
        <CheckboxLabel39 />
      </div>
    </div>
  );
}

function Media1() {
  return (
    <div className="relative shrink-0 w-full" data-name="media">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <MediaContent1 />
      </div>
    </div>
  );
}

function Accordion3() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Accordion">
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <AccordionContent2 />
        <Media1 />
      </div>
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Title4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="css-jat1mc font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#424242] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre font-bold text-[16px]">
            Atttribution modal
          </p>
        </div>
      </div>
    </div>
  );
}

function Collapse4() {
  return (
    <div className="relative shrink-0 size-5" data-name="collapse">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="collapse">
          <path
            d={svgPaths.pf177000}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function AccordionContent3() {
  return (
    <div
      className="h-12 relative shrink-0 w-full"
      data-name="_Accordion Content"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start px-4 py-0 relative w-full">
          <Title4 />
          <Collapse4 />
        </div>
      </div>
    </div>
  );
}

function Vector22() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p13292900}
            fill="var(--fill-0, #1D9F9F)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton8() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector22 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton8 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            First-touch (100% credit to first interaction)
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative w-full">
          <CheckboxLabel40 />
        </div>
      </div>
    </div>
  );
}

function Vector23() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton9() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector23 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton9 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            Broadcasts
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative w-full">
          <CheckboxLabel42 />
        </div>
      </div>
    </div>
  );
}

function Vector24() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton10() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector24 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton10 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            Linear (equal credit across all touchpoints)
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative w-full">
          <CheckboxLabel44 />
        </div>
      </div>
    </div>
  );
}

function Vector25() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton11() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector25 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton11 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            Position-based (40/20/40)
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative w-full">
          <CheckboxLabel46 />
        </div>
      </div>
    </div>
  );
}

function Vector26() {
  return (
    <div className="relative shrink-0 size-5" data-name="Vector">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Vector">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f893500}
            fill="var(--fill-0, #616161)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton12() {
  return (
    <div className="relative rounded-[36px] shrink-0" data-name="Radio Button">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <Vector26 />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox + Label">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <RadioButton12 />
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[22px] overflow-inherit">
            Custom weighting
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox Label">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative w-full">
          <CheckboxLabel48 />
        </div>
      </div>
    </div>
  );
}

function MediaContent2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Media content"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <CheckboxLabel41 />
        <CheckboxLabel43 />
        <CheckboxLabel45 />
        <CheckboxLabel47 />
        <CheckboxLabel49 />
      </div>
    </div>
  );
}

function Media2() {
  return (
    <div className="relative shrink-0 w-full" data-name="media">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <MediaContent2 />
      </div>
    </div>
  );
}

function Accordion4() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Accordion">
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <AccordionContent3 />
        <Media2 />
      </div>
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function AccordionSet() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="Accordion Set"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Accordion />
        <Accordion1 />
        <Accordion2 />
        <Accordion3 />
        <Accordion4 />
      </div>
    </div>
  );
}

function AccordionContainer() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="Accordion container"
    >
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center overflow-clip p-0 relative w-full">
        <AccordionSet />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function AccordionContainer1() {
  return (
    <div
      className="relative rounded shrink-0 w-full"
      data-name="Accordion container"
    >
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center overflow-clip p-0 relative w-full">
        <AccordionContainer />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_34_4534)" id="Icon">
          <mask
            height="20"
            id="mask0_34_4534"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_34_4534)">
            <path
              d={svgPaths.pe44eb00}
              fill="var(--fill-0, #7A7A7A)"
              id="thumb_up"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_34_4534">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Like() {
  return (
    <div className="relative rounded-sm shrink-0 size-6" data-name="Like">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_34_4530)" id="Icon">
          <mask
            height="20"
            id="mask0_34_4530"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_34_4530)">
            <path
              d={svgPaths.p303b0c80}
              fill="var(--fill-0, #7A7A7A)"
              id="thumb_down"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_34_4530">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dislike() {
  return (
    <div className="relative rounded-sm shrink-0 size-6" data-name="Dislike">
      <Icon1 />
    </div>
  );
}

function ReactionsContainer() {
  return (
    <div className="relative shrink-0" data-name="Reactions container">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <Like />
        <Dislike />
      </div>
    </div>
  );
}

function DefaultReactions() {
  return (
    <div className="relative rounded shrink-0" data-name="Default reactions">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <ReactionsContainer />
      </div>
    </div>
  );
}

function MessageContent1() {
  return (
    <div
      className="h-[118px] relative shrink-0 w-full"
      data-name="Message content"
    >
      <div className="box-border content-stretch flex flex-col gap-2 h-[118px] items-start justify-start relative w-full p-[0px]">
        <AccordionContainer1 />
        <DefaultReactions />
      </div>
    </div>
  );
}

function Message1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="message"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold h-6 justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit font-bold">
            Mira
          </p>
        </div>
        <MessageContainer1 />
        <MessageContent1 />
      </div>
    </div>
  );
}

function ChatMessage1() {
  return (
    <div className="relative shrink-0 w-full" data-name="chat message">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <AiAvatar1 />
        <Message1 />
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div
      className="h-[1320px] relative shrink-0 w-full"
      data-name="Right Section"
    >
      <div className="relative size-full m-[0px]">
        <div className="box-border content-stretch flex flex-col gap-6 h-[1320px] items-start justify-start px-0 py-5 relative w-full pt-[17px] pr-[0px] pb-[0px] pl-[0px] m-[0px]">
          <ChatMessage />
          <ChatMessage1 />
        </div>
      </div>
    </div>
  );
}

export default function Conversation() {
  return (
    <div className="relative size-full" data-name="conversation">
      <div className="box-border content-stretch flex flex-col gap-3.5 items-center justify-start p-0 relative size-full px-[0px] py-[28px] pt-[56px] pr-[20px] pb-[0px] pl-[20px]">
        <Header />
        <RightSection />
      </div>
    </div>
  );
}