import svgPaths from "./svg-rznp95eofg";

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
          <g filter="url(#filter0_ddd_2_13024)" id="AI Avatar">
            <circle
              cx="33"
              cy="32"
              fill="url(#paint0_radial_2_13024)"
              id="Ellipse 1"
              r="30"
            />
            <g clipPath="url(#clip0_2_13024)" id="Meltwater Logo">
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
              id="filter0_ddd_2_13024"
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
                result="effect1_dropShadow_2_13024"
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
                in2="effect1_dropShadow_2_13024"
                mode="normal"
                result="effect2_dropShadow_2_13024"
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
                in2="effect2_dropShadow_2_13024"
                mode="normal"
                result="effect3_dropShadow_2_13024"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect3_dropShadow_2_13024"
                mode="normal"
                result="shape"
              />
            </filter>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(63 2) rotate(135) scale(84.8528)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_2_13024"
              r="1"
            >
              <stop stopColor="#28BBBB" />
              <stop offset="1" stopColor="#B627A1" />
            </radialGradient>
            <clipPath id="clip0_2_13024">
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

function Text() {
  return (
    <div className="relative shrink-0" data-name="text">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#212121] text-center text-nowrap">
        <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[0px]">
          <p className="leading-[26px] text-[20px] text-nowrap whitespace-pre">
            Hello Leya,
            <span className="font-['Helvetica_Neue:Regular',_sans-serif] font-normal not-italic">{` I’m Mira.`}</span>
          </p>
        </div>
        <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[20px]">
          <p className="block leading-[26px] text-nowrap whitespace-pre">
            How can I help you today?
          </p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-4w1kd flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e35b1] text-[12px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Beta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorChips() {
  return (
    <div
      className="bg-[#ede7f6] h-5 relative rounded shrink-0"
      data-name="Color Chips"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-5 items-center justify-start px-1 py-0 relative">
          <Label />
        </div>
      </div>
      <div className="absolute border border-[#5e35b1] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function PillAndText() {
  return (
    <div className="relative shrink-0" data-name="pill and text">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative">
        <Text />
        <ColorChips />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative">
        <AiAvatar />
        <PillAndText />
      </div>
    </div>
  );
}

function TextInputs() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="_Text Inputs">
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative w-full">
        <div className="-webkit-box basis-0 css-93639g flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#757575] text-[16px] text-left">
          <p className="block leading-[22px]">Ask me a question...</p>
        </div>
      </div>
    </div>
  );
}

function FjordNewsletterAdd() {
  return (
    <div className="relative shrink-0 size-4" data-name="fjord_newsletter_add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
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
    </div>
  );
}

function TextPadding() {
  return (
    <div className="relative shrink-0" data-name="Text + Padding">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Canvas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-6 relative shrink-0" data-name="Toggle">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-start px-1 py-0 relative">
          <FjordNewsletterAdd />
          <TextPadding />
        </div>
      </div>
    </div>
  );
}

function ToggleButton() {
  return (
    <div
      className="min-w-6 relative rounded shrink-0"
      data-name="Toggle Button"
    >
      <div className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <Toggle />
      </div>
    </div>
  );
}

function FjordSearch() {
  return (
    <div className="relative shrink-0 size-4" data-name="fjord_search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="fjord_search">
          <g id="Vector">
            <path d={svgPaths.p75d9a00} fill="var(--fill-0, #616161)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p9257dc0}
              fill="var(--fill-0, #616161)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="relative shrink-0" data-name="Text + Padding">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap">
            <p className="block leading-[16px] whitespace-pre">
              Search builder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="h-6 relative shrink-0" data-name="Toggle">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-start px-1 py-0 relative">
          <FjordSearch />
          <TextPadding1 />
        </div>
      </div>
    </div>
  );
}

function ToggleButton1() {
  return (
    <div
      className="bg-[rgba(33,33,33,0.06)] min-w-6 relative rounded shrink-0"
      data-name="Toggle Button"
    >
      <div className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <Toggle1 />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Left"
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <ToggleButton />
        <ToggleButton1 />
      </div>
    </div>
  );
}

function ArrowUpward() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_upward">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_upward">
          <path
            d={svgPaths.p334f57f0}
            fill="var(--fill-0, #212121)"
            fillOpacity="0.38"
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
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-2 py-0 relative">
          <ArrowUpward />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[rgba(33,33,33,0.12)] relative rounded-[36px] shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <ContainedButton />
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="relative shrink-0" data-name="Right">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Button />
      </div>
    </div>
  );
}

function AiTextInputActionbar() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="AI Text Input actionbar"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <Left />
        <Right />
      </div>
    </div>
  );
}

function TextContextBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Text Context Bar">
      <div className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative w-full">
        <AiTextInputActionbar />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-lg shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col justify-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end pl-4 pr-2 py-2 relative size-full">
          <TextInputs />
          <TextContextBar />
        </div>
      </div>
      <div className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="h-24 relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0px_4px_22px_0px_rgba(0,0,0,0.06)] shrink-0 w-full"
      data-name="_Text input"
    >
      <div className="box-border content-stretch flex flex-col gap-2 h-24 items-start justify-end overflow-clip p-0 relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Margins() {
  return (
    <div className="relative shrink-0" data-name="Margins">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1 py-0 relative">
          <div className="css-ezl462 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#424242] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
              Core prompts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative">
        <Margins />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="h-9 order-3 relative shrink-0" data-name="Tabs">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-start p-[8px] relative">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function TabsSeparate() {
  return (
    <div
      className="max-w-64 min-w-32 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0"
      data-name="_Tabs Separate"
    >
      <div className="absolute border-[#00acc1] border-[0px_0px_2px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative">
        <Tabs />
      </div>
    </div>
  );
}

function Margins1() {
  return (
    <div className="relative shrink-0" data-name="Margins">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1 py-0 relative">
          <div className="css-rlefa5 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
              Favorite prompts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative">
        <Margins1 />
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="h-9 order-3 relative shrink-0" data-name="Tabs">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-start p-[8px] relative">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div
      className="max-w-64 min-w-32 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0"
      data-name="Component 3"
    >
      <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative">
        <Tabs1 />
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0" data-name="Tab Group">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative">
        <TabsSeparate />
        <Component3 />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-44 items-center justify-center pl-4 pr-3 py-0 relative w-full">
          <TabGroup />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13099)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p125e3300}
              fill="url(#paint1_linear_2_13099)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13099"
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
            id="paint1_linear_2_13099"
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
  );
}

function Label1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Media Brief
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon />
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon1() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13109)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p20434840}
              fill="url(#paint1_linear_2_13109)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13109"
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
            id="paint1_linear_2_13109"
            x1="9.66667"
            x2="26.3335"
            y1="25.4865"
            y2="25.4864"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Industry News
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon1 />
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon2() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13104)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p2e680300}
              fill="url(#paint1_linear_2_13104)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13104"
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
            id="paint1_linear_2_13104"
            x1="11.3333"
            x2="24.6668"
            y1="26.3184"
            y2="26.3183"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Competitive Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon2 />
          <Label3 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon3() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13132)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p3cb96100}
              fill="url(#paint1_linear_2_13132)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13132"
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
            id="paint1_linear_2_13132"
            x1="10.5"
            x2="25.5001"
            y1="25.4865"
            y2="25.4864"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Consumer Insights
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon3 />
          <Label4 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon4() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13137)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p421ff00}
              fill="url(#paint1_linear_2_13137)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13137"
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
            id="paint1_linear_2_13137"
            x1="12.1667"
            x2="23.8334"
            y1="24.6547"
            y2="24.6546"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Brand Performance
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions4() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon4 />
          <Label5 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon5() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13127)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p378c9880}
              fill="url(#paint1_linear_2_13127)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13127"
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
            id="paint1_linear_2_13127"
            x1="9.66667"
            x2="26.3335"
            y1="25.4865"
            y2="25.4864"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label6() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            PR Impact
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions5() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon5 />
          <Label6 />
        </div>
      </div>
    </div>
  );
}

function Briefs() {
  return (
    <div className="relative shrink-0 w-[757px]" data-name="_Briefs">
      <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start p-0 relative w-[757px]">
        <Suggestions />
        <Suggestions1 />
        <Suggestions2 />
        <Suggestions3 />
        <Suggestions4 />
        <Suggestions5 />
      </div>
    </div>
  );
}

function GridView() {
  return (
    <div className="relative shrink-0 size-5" data-name="GridView">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="GridView">
          <path
            d={svgPaths.p1d245400}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre">
              Go to full prompt library
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainedButton1() {
  return (
    <div
      className="h-9 relative rounded-sm shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <GridView />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <ContainedButton1 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Show more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-5" data-name="KeyboardArrowDown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="KeyboardArrowDown">
          <path
            d={svgPaths.p1cd2c000}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContainedButton2() {
  return (
    <div
      className="h-9 relative rounded-sm shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <Text4 />
          <KeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <ContainedButton2 />
      </div>
    </div>
  );
}

function Frame1261158309() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function CorePromptCards() {
  return (
    <div className="relative shrink-0" data-name="Core Prompt Cards">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative">
        <Briefs />
        <Frame1261158309 />
      </div>
    </div>
  );
}

function SearchCard() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-[800px]"
      data-name="Search Card"
    >
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-[20px] relative w-[800px]">
          <TextInput />
          <Header1 />
          <CorePromptCards />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative">
        <Header />
        <SearchCard />
      </div>
    </div>
  );
}

function Highlight() {
  return (
    <div
      className="absolute left-[-7px] size-9 top-[-7px]"
      data-name="Highlight"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Highlight">
          <circle
            cx="18"
            cy="18"
            fill="var(--fill-0, #F06292)"
            id="Border"
            opacity="0.12"
            r="12"
          />
          <circle
            cx="18"
            cy="18"
            id="Border_2"
            opacity="0.5"
            r="17.5"
            stroke="var(--stroke-0, #D81B60)"
          />
          <circle
            cx="18"
            cy="18"
            fill="var(--fill-0, #F06292)"
            id="Center"
            r="4"
          />
        </g>
      </svg>
    </div>
  );
}

function Cursor() {
  return (
    <div
      className="absolute h-[20.417px] left-[8.316px] top-[12.2px] w-[17.454px]"
      data-name="Cursor"
    >
      <div className="absolute bottom-[-41.632%] left-[-37.239%] right-[-37.239%] top-[-22.041%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 31 34"
        >
          <g filter="url(#filter0_ddd_2_13077)" id="Cursor">
            <path
              d={svgPaths.p2bb14980}
              fill="var(--fill-0, white)"
              id="Shape"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2bb14980}
              fillRule="evenodd"
              id="Shape_2"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p3519c200}
              fill="var(--fill-0, #121212)"
              id="Shape_3"
            />
            <path
              d={svgPaths.p13b23800}
              fill="var(--fill-0, #121212)"
              id="Shape_4"
            />
            <path
              d={svgPaths.p1867c6c0}
              fill="var(--fill-0, #121212)"
              id="Shape_5"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="33.4174"
              id="filter0_ddd_2_13077"
              width="30.4545"
              x="0.500011"
              y="0.499841"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_2_13077"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="effect1_dropShadow_2_13077"
                mode="normal"
                result="effect2_dropShadow_2_13077"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="effect2_dropShadow_2_13077"
                mode="normal"
                result="effect3_dropShadow_2_13077"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect3_dropShadow_2_13077"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Cursors() {
  return (
    <div
      className="absolute left-[183px] size-6 top-[206px]"
      data-name="Cursors"
    >
      <Highlight />
      <Cursor />
    </div>
  );
}

function Group625883() {
  return (
    <div className="absolute contents left-[183px] top-[206px]">
      <Cursors />
    </div>
  );
}

function Frame1261158272() {
  return (
    <div
      className="absolute top-0 translate-x-[-50%] w-[800px]"
      style={{ left: "calc(50% - 446px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-7 items-start justify-start p-0 relative w-[800px]">
        <Frame1 />
        <Group625883 />
      </div>
    </div>
  );
}

function AiAvatar1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="AI Avatar">
      <div className="absolute bottom-[-5.556%] left-[-4.167%] right-[-4.167%] top-[-2.778%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 66 66"
        >
          <g filter="url(#filter0_ddd_2_13024)" id="AI Avatar">
            <circle
              cx="33"
              cy="32"
              fill="url(#paint0_radial_2_13024)"
              id="Ellipse 1"
              r="30"
            />
            <g clipPath="url(#clip0_2_13024)" id="Meltwater Logo">
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
              id="filter0_ddd_2_13024"
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
                result="effect1_dropShadow_2_13024"
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
                in2="effect1_dropShadow_2_13024"
                mode="normal"
                result="effect2_dropShadow_2_13024"
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
                in2="effect2_dropShadow_2_13024"
                mode="normal"
                result="effect3_dropShadow_2_13024"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect3_dropShadow_2_13024"
                mode="normal"
                result="shape"
              />
            </filter>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(63 2) rotate(135) scale(84.8528)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_2_13024"
              r="1"
            >
              <stop stopColor="#28BBBB" />
              <stop offset="1" stopColor="#B627A1" />
            </radialGradient>
            <clipPath id="clip0_2_13024">
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

function Text5() {
  return (
    <div className="relative shrink-0" data-name="text">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start leading-[0] not-italic p-0 relative text-[#212121] text-center text-nowrap">
        <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[0px]">
          <p className="leading-[26px] text-[20px] text-nowrap whitespace-pre">
            Hello Leya,
            <span className="font-['Helvetica_Neue:Regular',_sans-serif] font-normal not-italic">{` I’m Mira.`}</span>
          </p>
        </div>
        <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[20px]">
          <p className="block leading-[26px] text-nowrap whitespace-pre">
            How can I help you today?
          </p>
        </div>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-4w1kd flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e35b1] text-[12px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Beta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorChips1() {
  return (
    <div
      className="bg-[#ede7f6] h-5 relative rounded shrink-0"
      data-name="Color Chips"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-5 items-center justify-start px-1 py-0 relative">
          <Label7 />
        </div>
      </div>
      <div className="absolute border border-[#5e35b1] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function PillAndText1() {
  return (
    <div className="relative shrink-0" data-name="pill and text">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative">
        <Text5 />
        <ColorChips1 />
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0" data-name="Header">
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative">
        <AiAvatar1 />
        <PillAndText1 />
      </div>
    </div>
  );
}

function TextInputs1() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="_Text Inputs">
      <div className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative w-full">
        <div className="-webkit-box basis-0 css-kwpy2h flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[16px] text-left">
          <p className="block leading-[22px]">Tobii, Tobii AB</p>
        </div>
      </div>
    </div>
  );
}

function FjordNewsletterAdd1() {
  return (
    <div className="relative shrink-0 size-4" data-name="fjord_newsletter_add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
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
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="relative shrink-0" data-name="Text + Padding">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Canvas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle2() {
  return (
    <div className="h-6 relative shrink-0" data-name="Toggle">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-start px-1 py-0 relative">
          <FjordNewsletterAdd1 />
          <TextPadding2 />
        </div>
      </div>
    </div>
  );
}

function ToggleButton2() {
  return (
    <div
      className="min-w-6 relative rounded shrink-0"
      data-name="Toggle Button"
    >
      <div className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <Toggle2 />
      </div>
    </div>
  );
}

function FjordSearch1() {
  return (
    <div className="relative shrink-0 size-4" data-name="fjord_search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="fjord_search">
          <g id="Vector">
            <path d={svgPaths.p75d9a00} fill="var(--fill-0, #212121)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p9257dc0}
              fill="var(--fill-0, #212121)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="relative shrink-0" data-name="Text + Padding">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap">
            <p className="block leading-[16px] whitespace-pre">
              Search builder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle3() {
  return (
    <div className="h-6 relative shrink-0" data-name="Toggle">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-start px-1 py-0 relative">
          <FjordSearch1 />
          <TextPadding3 />
        </div>
      </div>
    </div>
  );
}

function ToggleButton3() {
  return (
    <div
      className="bg-[rgba(29,159,159,0.12)] min-w-6 relative rounded shrink-0"
      data-name="Toggle Button"
    >
      <div className="absolute border border-[#1d9f9f] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <Toggle3 />
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Left"
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <ToggleButton2 />
        <ToggleButton3 />
      </div>
    </div>
  );
}

function ArrowUpward1() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_upward">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_upward">
          <path
            d={svgPaths.p334f57f0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContainedButton3() {
  return (
    <div
      className="h-9 relative rounded-sm shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-2 py-0 relative">
          <ArrowUpward1 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#1d9f9f] relative rounded-[36px] shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <ContainedButton3 />
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="relative shrink-0" data-name="Right">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Button3 />
      </div>
    </div>
  );
}

function AiTextInputActionbar1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="AI Text Input actionbar"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <Left1 />
        <Right1 />
      </div>
    </div>
  );
}

function TextContextBar1() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Text Context Bar">
      <div className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative w-full">
        <AiTextInputActionbar1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col justify-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end pl-4 pr-2 py-2 relative w-full">
          <TextInputs1 />
          <TextContextBar1 />
        </div>
      </div>
      <div className="absolute border-2 border-[#b627a1] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextInput1() {
  return (
    <div
      className="relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0px_4px_22px_0px_rgba(0,0,0,0.06)] shrink-0 w-full"
      data-name="_Text input"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end overflow-clip p-0 relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Margins2() {
  return (
    <div className="relative shrink-0" data-name="Margins">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1 py-0 relative">
          <div className="css-ezl462 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#424242] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
              Core prompts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative">
        <Margins2 />
      </div>
    </div>
  );
}

function Tabs2() {
  return (
    <div className="h-9 order-3 relative shrink-0" data-name="Tabs">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-start p-[8px] relative">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function TabsSeparate1() {
  return (
    <div
      className="max-w-64 min-w-32 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0"
      data-name="_Tabs Separate"
    >
      <div className="absolute border-[#00acc1] border-[0px_0px_2px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative">
        <Tabs2 />
      </div>
    </div>
  );
}

function Margins3() {
  return (
    <div className="relative shrink-0" data-name="Margins">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1 py-0 relative">
          <div className="css-rlefa5 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
              Favorite prompts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative">
        <Margins3 />
      </div>
    </div>
  );
}

function Tabs3() {
  return (
    <div className="h-9 order-3 relative shrink-0" data-name="Tabs">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-start p-[8px] relative">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div
      className="max-w-64 min-w-32 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0"
      data-name="Component 3"
    >
      <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative">
        <Tabs3 />
      </div>
    </div>
  );
}

function TabGroup1() {
  return (
    <div className="relative shrink-0" data-name="Tab Group">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative">
        <TabsSeparate1 />
        <Component4 />
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-44 items-center justify-center pl-4 pr-3 py-0 relative w-full">
          <TabGroup1 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon6() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13099)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p125e3300}
              fill="url(#paint1_linear_2_13099)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13099"
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
            id="paint1_linear_2_13099"
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
  );
}

function Label8() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Media Brief
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions6() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon6 />
          <Label8 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon7() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13109)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p20434840}
              fill="url(#paint1_linear_2_13109)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13109"
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
            id="paint1_linear_2_13109"
            x1="9.66667"
            x2="26.3335"
            y1="25.4865"
            y2="25.4864"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label9() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Industry News
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions7() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon7 />
          <Label9 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon8() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13104)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p2e680300}
              fill="url(#paint1_linear_2_13104)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13104"
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
            id="paint1_linear_2_13104"
            x1="11.3333"
            x2="24.6668"
            y1="26.3184"
            y2="26.3183"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label10() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Competitive Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions8() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon8 />
          <Label10 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon9() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13132)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p3cb96100}
              fill="url(#paint1_linear_2_13132)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13132"
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
            id="paint1_linear_2_13132"
            x1="10.5"
            x2="25.5001"
            y1="25.4865"
            y2="25.4864"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label11() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Consumer Insights
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions9() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon9 />
          <Label11 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon10() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13137)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p421ff00}
              fill="url(#paint1_linear_2_13137)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13137"
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
            id="paint1_linear_2_13137"
            x1="12.1667"
            x2="23.8334"
            y1="24.6547"
            y2="24.6546"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label12() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Brand Performance
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions10() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon10 />
          <Label12 />
        </div>
      </div>
    </div>
  );
}

function AlertMiraHaloIcon11() {
  return (
    <div className="relative shrink-0 size-9" data-name="Alert/Mira Halo Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Alert/Mira Halo Icon">
          <circle
            cx="18"
            cy="18"
            fill="url(#paint0_linear_2_13127)"
            id="Halo"
            opacity="0.1"
            r="18"
          />
          <g id="Icons">
            <path
              d={svgPaths.p378c9880}
              fill="url(#paint1_linear_2_13127)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_13127"
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
            id="paint1_linear_2_13127"
            x1="9.66667"
            x2="26.3335"
            y1="25.4865"
            y2="25.4864"
          >
            <stop stopColor="#8B49A0" />
            <stop offset="1" stopColor="#497C9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Label13() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Regular',_sans-serif] font-normal h-4 leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap w-full">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            PR Impact
          </p>
        </div>
      </div>
    </div>
  );
}

function Suggestions11() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[52px] min-h-px min-w-[200px] relative rounded-lg shrink-0"
      data-name="Suggestions"
    >
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[52px] items-center justify-start px-2 py-1 relative w-full">
          <AlertMiraHaloIcon11 />
          <Label13 />
        </div>
      </div>
    </div>
  );
}

function Briefs1() {
  return (
    <div className="relative shrink-0 w-[757px]" data-name="_Briefs">
      <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start p-0 relative w-[757px]">
        <Suggestions6 />
        <Suggestions7 />
        <Suggestions8 />
        <Suggestions9 />
        <Suggestions10 />
        <Suggestions11 />
      </div>
    </div>
  );
}

function GridView1() {
  return (
    <div className="relative shrink-0 size-5" data-name="GridView">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="GridView">
          <path
            d={svgPaths.p1d245400}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre">
              Go to full prompt library
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainedButton4() {
  return (
    <div
      className="h-9 relative rounded-sm shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <GridView1 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <ContainedButton4 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Show more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyboardArrowDown1() {
  return (
    <div className="relative shrink-0 size-5" data-name="KeyboardArrowDown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="KeyboardArrowDown">
          <path
            d={svgPaths.p1cd2c000}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContainedButton5() {
  return (
    <div
      className="h-9 relative rounded-sm shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-1 py-0 relative">
          <Text9 />
          <KeyboardArrowDown1 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <ContainedButton5 />
      </div>
    </div>
  );
}

function Frame1261158310() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function CorePromptCards1() {
  return (
    <div className="relative shrink-0" data-name="Core Prompt Cards">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative">
        <Briefs1 />
        <Frame1261158310 />
      </div>
    </div>
  );
}

function SearchCard1() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-[800px]"
      data-name="Search Card"
    >
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-[20px] relative w-[800px]">
          <TextInput1 />
          <Header3 />
          <CorePromptCards1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative">
        <Header2 />
        <SearchCard1 />
      </div>
    </div>
  );
}

function Highlight1() {
  return (
    <div
      className="absolute left-[-7px] size-9 top-[-7px]"
      data-name="Highlight"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="Highlight">
          <circle
            cx="18"
            cy="18"
            fill="var(--fill-0, #F06292)"
            id="Border"
            opacity="0.12"
            r="12"
          />
          <circle
            cx="18"
            cy="18"
            id="Border_2"
            opacity="0.5"
            r="17.5"
            stroke="var(--stroke-0, #D81B60)"
          />
          <circle
            cx="18"
            cy="18"
            fill="var(--fill-0, #F06292)"
            id="Center"
            r="4"
          />
        </g>
      </svg>
    </div>
  );
}

function Cursor1() {
  return (
    <div
      className="absolute h-[20.417px] left-[8.316px] top-[12.2px] w-[17.454px]"
      data-name="Cursor"
    >
      <div className="absolute bottom-[-41.632%] left-[-37.239%] right-[-37.239%] top-[-22.041%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 31 34"
        >
          <g filter="url(#filter0_ddd_2_13077)" id="Cursor">
            <path
              d={svgPaths.p2bb14980}
              fill="var(--fill-0, white)"
              id="Shape"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2bb14980}
              fillRule="evenodd"
              id="Shape_2"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p3519c200}
              fill="var(--fill-0, #121212)"
              id="Shape_3"
            />
            <path
              d={svgPaths.p13b23800}
              fill="var(--fill-0, #121212)"
              id="Shape_4"
            />
            <path
              d={svgPaths.p1867c6c0}
              fill="var(--fill-0, #121212)"
              id="Shape_5"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="33.4174"
              id="filter0_ddd_2_13077"
              width="30.4545"
              x="0.500011"
              y="0.499841"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_2_13077"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="effect1_dropShadow_2_13077"
                mode="normal"
                result="effect2_dropShadow_2_13077"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="effect2_dropShadow_2_13077"
                mode="normal"
                result="effect3_dropShadow_2_13077"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect3_dropShadow_2_13077"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Cursors1() {
  return (
    <div
      className="absolute left-[764px] size-6 top-[228px]"
      data-name="Cursors"
    >
      <Highlight1 />
      <Cursor1 />
    </div>
  );
}

function Group625884() {
  return (
    <div className="absolute contents left-[764px] top-[228px]">
      <Cursors1 />
    </div>
  );
}

function Frame1261158273() {
  return (
    <div
      className="absolute top-0 translate-x-[-50%] w-[800px]"
      style={{ left: "calc(50% + 446px)" }}
    >
      <div className="box-border content-stretch flex flex-col gap-7 items-start justify-start p-0 relative w-[800px]">
        <Frame2 />
        <Group625884 />
      </div>
    </div>
  );
}

export default function Frame1261158363() {
  return (
    <div className="relative size-full">
      <Frame1261158272 />
      <Frame1261158273 />
    </div>
  );
}