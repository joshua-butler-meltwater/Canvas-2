import svgPaths from "./svg-ui9nvkkfgf";
import imgPhoto from "figma:asset/428174c035f461dde30db7ed17dc471abed28fcc.png";
import imgNyTimes from "figma:asset/8c08bf17886d2e5eded3ea02d23762fafe2f06d9.png";
import imgPhoto1 from "figma:asset/30799134881e56f3875396461e1e4479bb5daac1.png";
import imgImage from "figma:asset/f5e34dfa211ce88453c9261e9e757c50acd89170.png";
import imgYahoo from "figma:asset/401a155f5ac8d9e9f9a35b7689c468f2a8ea2fc5.png";
import imgK2QKoGla400X4001 from "figma:asset/1f99a7f22ac2dbc72598055b15fbbe9f43e28db8.png";
import imgImage1 from "figma:asset/a6c6e39f5e6e2d370623179b03f38ea76518c2b1.png";
import imgHuffingtonPost from "figma:asset/10db7d0eb5adf1a3f4779ea419bdb202e696ba38.png";
import imgImage2 from "figma:asset/f880562d6dd5a4a7f144b25675c2b7716d924f8f.png";
import imgReuters from "figma:asset/72dcf183f51c1340112c972a0548b6e69a38751a.png";
import imgImage3 from "figma:asset/d89a82b24d9c2586864ea90d91a54e0d20fb8332.png";
import imgCnbc from "figma:asset/bd34aa577c61aacc6b1857f1c008621e9fb9ee8f.png";
import imgImage4 from "figma:asset/b2d3144e9328da3803c034f137421fef358cfa3b.png";
import imgBi from "figma:asset/020a0e18beebc223845bd55d5ec396288db51e4e.png";
import imgImage5 from "figma:asset/b94253b007c5afe0d0c0365cb8917c42daa29be5.png";
import imgImage6 from "figma:asset/3e196c195222678c9ae0875ae22e4897ab4fd3df.png";
import imgImage7 from "figma:asset/88b3ad3b0f77733321c13e459cce608b0c9cd212.png";
import imgImage8 from "figma:asset/e9378c09557f326c6a5c4273de411dcbaed92fb6.png";
import imgImage9 from "figma:asset/d1fc8aed342246f38e99209611e52a4a64df7615.png";
import imgImage10 from "figma:asset/400eaf9ee9a04d5c541b35b1260be88427ccb069.png";
import imgImage11 from "figma:asset/494f0b5757f7b492436daed5ee3444c6a75b50d5.png";
import imgImage12 from "figma:asset/253b70452903580418b14b46f6a411b274f10f75.png";
import imgImage13 from "figma:asset/3b68d7ec0f0a26c41aaa014444b190205c04b9a6.png";
import imgImage14 from "figma:asset/9e70bf0cdb868b5e80cbe9f105710d030e093aa3.png";
import imgImage15 from "figma:asset/1de4d46d041ed4b2ef69a0e1be4fd1ff4d408d62.png";

function Photo() {
  return (
    <div
      className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0 rounded-[36px]"
      data-name="Photo"
      style={{ backgroundImage: `url('${imgPhoto}')` }}
    >
      <div className="size-full" />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar">
      <Photo />
      <div className="absolute inset-0 rounded-[36px]" data-name="Border">
        <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-[36px]" />
      </div>
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="relative shrink-0" data-name="Chat Header">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Avatar />
        <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[18px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">You</p>
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-4" data-name="Star">
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
          <Star />
        </div>
      </div>
    </div>
  );
}

function Frame1261158349() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <ContainedButton />
      </div>
    </div>
  );
}

function Frame1261158281() {
  return (
    <div className="relative rounded-lg shrink-0">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center px-4 py-0 relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">
              Give me brand performance report for Nike
            </p>
          </div>
          <Frame1261158349 />
        </div>
      </div>
    </div>
  );
}

function YourPrompt() {
  return (
    <div className="relative shrink-0 w-full" data-name="Your Prompt">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <ChatHeader />
        <Frame1261158281 />
      </div>
    </div>
  );
}

function MeltwaterLogo() {
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
        <g clipPath="url(#clip0_33_7297)" id="Meltwater Logo">
          <path
            clipRule="evenodd"
            d={svgPaths.p32d2d00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill-1"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_7297">
            <rect fill="white" height="6.83146" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AiAvatar() {
  return (
    <div
      className="relative rounded-[36px] shrink-0 size-6"
      data-name="AI Avatar"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 24 24\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.4 2.4 -2.4 -2.4 24 0.0000014305)\\\'><stop stop-color=\\\'rgba(40,187,187,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(76,150,181,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(111,113,174,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(147,76,168,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(182,39,161,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <MeltwaterLogo />
    </div>
  );
}

function ChatHeader1() {
  return (
    <div className="relative shrink-0" data-name="Chat Header">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <AiAvatar />
        <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[18px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Mira</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative">
        <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[24px] text-center text-nowrap">
          <p className="block leading-[32px] whitespace-pre">
            Nike: Brand Performance
          </p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="bg-[rgba(29,159,159,0.04)] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(29,159,159,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative size-full">
        <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[16px] text-left">
          <p className="block leading-[22px]">Generation complete</p>
        </div>
      </div>
    </div>
  );
}

function Collapse() {
  return (
    <div className="relative shrink-0 size-5" data-name="Collapse">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="keyboard_arrow_up">
          <path
            d={svgPaths.p3c0c2231}
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
      className="h-9 relative rounded-sm shrink-0"
      data-name="Contained Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-center p-[8px] relative">
          <Collapse />
        </div>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div className="relative rounded-sm" data-name="Icon Button">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <ContainedButton1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative w-full">
        <Container2 />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none scale-y-[-100%]">
            <IconButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="bg-[rgba(29,159,159,0.04)] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-2 relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <Container1 />
        <Container4 />
      </div>
      <div className="absolute border border-[rgba(29,159,159,0.07)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Margins() {
  return (
    <div className="relative shrink-0" data-name="Margins">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-1 pr-6 py-0 relative">
          <div className="css-jdk5g7 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
              Response
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
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
          <Text />
        </div>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div
      className="bg-[rgba(29,159,159,0.12)] max-w-64 min-w-32 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0"
      data-name="Tabs"
    >
      <div className="absolute border-[#00acc1] border-[0px_0px_2px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative">
        <div className="absolute flex h-[20px] items-center justify-center order-4 right-0 top-2 w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-5" data-name="Line">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 1"
                >
                  <line
                    id="Line"
                    stroke="var(--stroke-0, #E0E0E0)"
                    x2="20"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Tabs />
        <div className="absolute flex h-[20px] items-center justify-center order-2 right-0 top-2 w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-5" data-name="Line">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 1"
                >
                  <line
                    id="Line"
                    stroke="var(--stroke-0, #E0E0E0)"
                    x2="20"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margins1() {
  return (
    <div className="relative shrink-0" data-name="Margins">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-1 pr-6 py-0 relative">
          <div className="css-rlefa5 flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#616161] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
              Sources
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
        <Margins1 />
      </div>
    </div>
  );
}

function Tabs2() {
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

function Component3() {
  return (
    <div
      className="max-w-64 min-w-32 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0"
      data-name="Component 3"
    >
      <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative">
        <div className="absolute flex h-[20px] items-center justify-center order-4 right-0 top-2 w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-5" data-name="Line">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 1"
                >
                  <line
                    id="Line"
                    stroke="var(--stroke-0, #E0E0E0)"
                    x2="20"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Tabs2 />
        <div className="absolute flex h-[20px] items-center justify-center order-2 right-0 top-2 w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-5" data-name="Line">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 1"
                >
                  <line
                    id="Line"
                    stroke="var(--stroke-0, #E0E0E0)"
                    x2="20"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab Group">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <Tabs1 />
        <Component3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic p-0 relative text-[rgba(0,0,0,0.8)] text-left w-full">
        <div className="css-97ahe6 font-['Helvetica_Neue:Bold',_sans-serif] font-bold relative shrink-0 text-[18px] w-[672px]">
          <p className="block leading-[24px]">Today’s breakdown</p>
        </div>
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[16px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[22px]">{`Nike has announced a major leadership change, with CEO John Donahoe stepping down and longtime employee Elliott Hill taking over as the new CEO effective October 14, 2024. This move is seen as a potential turnaround for the company, which has struggled in recent years due to strategic missteps, particularly in its direct-to-consumer approach. The announcement has been well-received by investors, with Nike's stock price rising 7%.`}</p>
        </div>
      </div>
    </div>
  );
}

function CountryTimestamp() {
  return (
    <div
      className="absolute left-[60px] top-8 w-[180px]"
      data-name="Country/Timestamp"
    >
      <div className="box-border content-stretch flex flex-row font-['Helvetica_Neue:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative text-[#595959] text-[12px] text-left text-nowrap w-[180px]">
        <div className="css-1yvite flex flex-col justify-center relative shrink-0 uppercase">
          <p className="block leading-[16px] text-nowrap whitespace-pre">US</p>
        </div>
        <div className="css-1yvite flex flex-col justify-center relative shrink-0">
          <p className="block leading-[16px] text-nowrap whitespace-pre">|</p>
        </div>
        <div className="css-udq5m0 flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
          <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit text-[12px] text-nowrap whitespace-pre">
            Jan 1, 2025 1:48 PM
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthorHandle() {
  return (
    <div
      className="absolute left-[60px] top-3 w-[180px]"
      data-name="Author/Handle"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-[180px]">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
            The New York Times
          </p>
        </div>
      </div>
    </div>
  );
}

function Companies() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Companies">
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-0 rounded-[48px] size-9 top-0"
        data-name="NY Times"
        style={{ backgroundImage: `url('${imgNyTimes}')` }}
      />
    </div>
  );
}

function Photo1() {
  return (
    <div className="absolute inset-0" data-name="Photo">
      <div className="absolute left-0 size-9 top-0" data-name="Photo">
        <img
          alt
          className="block max-w-none size-full"
          height="36"
          loading="lazy"
          src={imgPhoto1}
          width="36"
        />
      </div>
      <Companies />
      <div className="absolute left-0 size-9 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            id="Ellipse 1"
            r="17.5"
            stroke="var(--stroke-0, #E0E0E0)"
          />
        </svg>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute left-0 size-9 top-0" data-name="Avatar">
      <Photo1 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="absolute left-4 size-10 top-3" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute bg-[#ffffff] inset-0" data-name="BG" />
      <CountryTimestamp />
      <AuthorHandle />
      <Avatar2 />
    </div>
  );
}

function TitleIngressHitSentenceImage() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title, Ingress + Hit Sentence + Image"
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="-webkit-box css-zbaoay font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] max-h-12 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[18px] text-left w-full">
          <p className="block leading-[24px]">
            Nike sneaker ad labeled ‘misleading’ for marketing $35 kids’ shoes
            to adults
          </p>
        </div>
      </div>
    </div>
  );
}

function BodyImage() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body + Image">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <TitleIngressHitSentenceImage />
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">87.2M Reach</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute left-0 top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab1 />
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">6.99k Views</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute left-[91px] top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute bottom-[44.444%] contents left-[79.209%] right-[0.128%] top-[11.111%]"
      data-name="Container"
    >
      <div
        className="absolute css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic right-[12.333px] text-[#212121] text-[12px] text-nowrap text-right"
        style={{ top: "calc(50% - 14px)" }}
      >
        <p className="block leading-[16px] whitespace-pre">Neutral</p>
      </div>
      <div
        className="absolute right-[0.333px] size-2 translate-y-[-50%]"
        style={{ top: "calc(50% - 5px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            id="Ellipse 2"
            r="3.5"
            stroke="var(--stroke-0, #9E9E9E)"
          />
        </svg>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name=".Data">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative w-full">
          <BodyImage />
          <Data />
        </div>
      </div>
    </div>
  );
}

function WithTitle() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-60 relative rounded shrink-0"
      data-name="With title"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat h-[168px] shrink-0 w-[303.614px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <Header />
        <Body />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function CountryTimestamp1() {
  return (
    <div
      className="absolute left-[60px] top-8 w-[180px]"
      data-name="Country/Timestamp"
    >
      <div className="box-border content-stretch flex flex-row font-['Helvetica_Neue:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative text-[#595959] text-[12px] text-left text-nowrap w-[180px]">
        <div className="css-1yvite flex flex-col justify-center relative shrink-0 uppercase">
          <p className="block leading-[16px] text-nowrap whitespace-pre">US</p>
        </div>
        <div className="css-1yvite flex flex-col justify-center relative shrink-0">
          <p className="block leading-[16px] text-nowrap whitespace-pre">|</p>
        </div>
        <div className="css-udq5m0 flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
          <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit text-[12px] text-nowrap whitespace-pre">
            Jan 1, 2025 1:48 PM
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthorHandle1() {
  return (
    <div
      className="absolute left-[60px] top-3 w-[180px]"
      data-name="Author/Handle"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-[180px]">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
            The Guardian
          </p>
        </div>
      </div>
    </div>
  );
}

function Companies1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Companies">
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-0 rounded-[48px] size-9 top-0"
        data-name="Yahoo"
        style={{ backgroundImage: `url('${imgYahoo}')` }}
      />
    </div>
  );
}

function Photo2() {
  return (
    <div className="absolute inset-0" data-name="Photo">
      <div className="absolute left-0 size-9 top-0" data-name="Photo">
        <img
          alt
          className="block max-w-none size-full"
          height="36"
          loading="lazy"
          src={imgPhoto1}
          width="36"
        />
      </div>
      <Companies1 />
      <div className="absolute left-0 size-9 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            id="Ellipse 1"
            r="17.5"
            stroke="var(--stroke-0, #E0E0E0)"
          />
        </svg>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="absolute left-0 size-9 top-0" data-name="Avatar">
      <Photo2 />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
        data-name="K2qKoGla_400x400 1"
        style={{ backgroundImage: `url('${imgK2QKoGla400X4001}')` }}
      />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="absolute left-4 size-10 top-3" data-name="Avatar">
      <Avatar3 />
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute bg-[#ffffff] inset-0" data-name="BG" />
      <CountryTimestamp1 />
      <AuthorHandle1 />
      <Avatar4 />
    </div>
  );
}

function TitleIngressHitSentenceImage1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title, Ingress + Hit Sentence + Image"
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="-webkit-box css-zbaoay font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] max-h-12 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[18px] text-left w-full">
          <p className="block leading-[24px]">
            Nike Goes Back To Its Roots In Hopes Of Getting Back In Shape
          </p>
        </div>
      </div>
    </div>
  );
}

function BodyImage1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body + Image">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <TitleIngressHitSentenceImage1 />
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">87.2M Reach</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute left-0 top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab3 />
      </div>
    </div>
  );
}

function Tab4() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">6.99k Views</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-[91px] top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab4 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="absolute bottom-[44.444%] contents left-[79.209%] right-[0.128%] top-[11.111%]"
      data-name="Container"
    >
      <div
        className="absolute css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic right-[12.333px] text-[#212121] text-[12px] text-nowrap text-right"
        style={{ top: "calc(50% - 14px)" }}
      >
        <p className="block leading-[16px] whitespace-pre">Neutral</p>
      </div>
      <div
        className="absolute right-[0.333px] size-2 translate-y-[-50%]"
        style={{ top: "calc(50% - 5px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            id="Ellipse 2"
            r="3.5"
            stroke="var(--stroke-0, #9E9E9E)"
          />
        </svg>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name=".Data">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative w-full">
          <BodyImage1 />
          <Data1 />
        </div>
      </div>
    </div>
  );
}

function WithTitle1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-60 relative rounded shrink-0"
      data-name="With title"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat h-[168px] shrink-0 w-[345.205px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage1}')` }}
        />
        <Header1 />
        <Body1 />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function CountryTimestamp2() {
  return (
    <div
      className="absolute left-[60px] top-8 w-[180px]"
      data-name="Country/Timestamp"
    >
      <div className="box-border content-stretch flex flex-row font-['Helvetica_Neue:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative text-[#595959] text-[12px] text-left text-nowrap w-[180px]">
        <div className="css-1yvite flex flex-col justify-center relative shrink-0 uppercase">
          <p className="block leading-[16px] text-nowrap whitespace-pre">US</p>
        </div>
        <div className="css-1yvite flex flex-col justify-center relative shrink-0">
          <p className="block leading-[16px] text-nowrap whitespace-pre">|</p>
        </div>
        <div className="css-udq5m0 flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
          <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit text-[12px] text-nowrap whitespace-pre">
            Jan 1, 2025 1:48 PM
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthorHandle2() {
  return (
    <div
      className="absolute left-[60px] top-3 w-[180px]"
      data-name="Author/Handle"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-[180px]">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
            Hufffington Post
          </p>
        </div>
      </div>
    </div>
  );
}

function Companies2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Companies">
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-0 rounded-[48px] size-9 top-0"
        data-name="Huffington Post"
        style={{ backgroundImage: `url('${imgHuffingtonPost}')` }}
      />
    </div>
  );
}

function Photo3() {
  return (
    <div className="absolute inset-0" data-name="Photo">
      <div className="absolute left-0 size-9 top-0" data-name="Photo">
        <img
          alt
          className="block max-w-none size-full"
          height="36"
          loading="lazy"
          src={imgPhoto1}
          width="36"
        />
      </div>
      <Companies2 />
      <div className="absolute left-0 size-9 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            id="Ellipse 1"
            r="17.5"
            stroke="var(--stroke-0, #E0E0E0)"
          />
        </svg>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="absolute left-0 size-9 top-0" data-name="Avatar">
      <Photo3 />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="absolute left-4 size-10 top-3" data-name="Avatar">
      <Avatar5 />
    </div>
  );
}

function Header2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute bg-[#ffffff] inset-0" data-name="BG" />
      <CountryTimestamp2 />
      <AuthorHandle2 />
      <Avatar6 />
    </div>
  );
}

function TitleIngressHitSentenceImage2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title, Ingress + Hit Sentence + Image"
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="-webkit-box css-zbaoay font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] max-h-12 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[18px] text-left w-full">
          <p className="block leading-[24px]">
            Nike’s new CEO signals a return to its old values
          </p>
        </div>
      </div>
    </div>
  );
}

function BodyImage2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body + Image">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <TitleIngressHitSentenceImage2 />
      </div>
    </div>
  );
}

function Tab5() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">87.2M Reach</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute left-0 top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab5 />
      </div>
    </div>
  );
}

function Tab6() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">6.99k Views</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute left-[91px] top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab6 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="absolute bottom-[44.444%] contents left-[79.209%] right-[0.128%] top-[11.111%]"
      data-name="Container"
    >
      <div
        className="absolute css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic right-[12.333px] text-[#212121] text-[12px] text-nowrap text-right"
        style={{ top: "calc(50% - 14px)" }}
      >
        <p className="block leading-[16px] whitespace-pre">Neutral</p>
      </div>
      <div
        className="absolute right-[0.333px] size-2 translate-y-[-50%]"
        style={{ top: "calc(50% - 5px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            id="Ellipse 2"
            r="3.5"
            stroke="var(--stroke-0, #9E9E9E)"
          />
        </svg>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name=".Data">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative w-full">
          <BodyImage2 />
          <Data2 />
        </div>
      </div>
    </div>
  );
}

function WithTitle2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-60 relative rounded shrink-0"
      data-name="With title"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat h-[168px] shrink-0 w-full"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage2}')` }}
        />
        <Header2 />
        <Body2 />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function CountryTimestamp3() {
  return (
    <div
      className="absolute left-[60px] top-8 w-[180px]"
      data-name="Country/Timestamp"
    >
      <div className="box-border content-stretch flex flex-row font-['Helvetica_Neue:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative text-[#595959] text-[12px] text-left text-nowrap w-[180px]">
        <div className="css-1yvite flex flex-col justify-center relative shrink-0 uppercase">
          <p className="block leading-[16px] text-nowrap whitespace-pre">US</p>
        </div>
        <div className="css-1yvite flex flex-col justify-center relative shrink-0">
          <p className="block leading-[16px] text-nowrap whitespace-pre">|</p>
        </div>
        <div className="css-udq5m0 flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
          <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit text-[12px] text-nowrap whitespace-pre">
            Jan 1, 2025 1:48 PM
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthorHandle3() {
  return (
    <div
      className="absolute left-[60px] top-3 w-[180px]"
      data-name="Author/Handle"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-[180px]">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
            Reuters
          </p>
        </div>
      </div>
    </div>
  );
}

function Companies3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Companies">
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-0 rounded-[48px] size-9 top-0"
        data-name="Reuters"
        style={{ backgroundImage: `url('${imgReuters}')` }}
      />
    </div>
  );
}

function Photo4() {
  return (
    <div className="absolute inset-0" data-name="Photo">
      <div className="absolute left-0 size-9 top-0" data-name="Photo">
        <img
          alt
          className="block max-w-none size-full"
          height="36"
          loading="lazy"
          src={imgPhoto1}
          width="36"
        />
      </div>
      <Companies3 />
      <div className="absolute left-0 size-9 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            id="Ellipse 1"
            r="17.5"
            stroke="var(--stroke-0, #E0E0E0)"
          />
        </svg>
      </div>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="absolute left-0 size-9 top-0" data-name="Avatar">
      <Photo4 />
    </div>
  );
}

function Avatar8() {
  return (
    <div className="absolute left-4 size-10 top-3" data-name="Avatar">
      <Avatar7 />
    </div>
  );
}

function Header3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute bg-[#ffffff] inset-0" data-name="BG" />
      <CountryTimestamp3 />
      <AuthorHandle3 />
      <Avatar8 />
    </div>
  );
}

function TitleIngressHitSentenceImage3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title, Ingress + Hit Sentence + Image"
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="-webkit-box css-zbaoay font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] max-h-12 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[18px] text-left w-full">
          <p className="block leading-[24px]">
            This Week: Nike’s Nex Chapter Begins
          </p>
        </div>
      </div>
    </div>
  );
}

function BodyImage3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body + Image">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <TitleIngressHitSentenceImage3 />
      </div>
    </div>
  );
}

function Tab7() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">87.2M Reach</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-0 top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab7 />
      </div>
    </div>
  );
}

function Tab8() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">6.99k Views</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute left-[91px] top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab8 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="absolute bottom-[44.444%] contents left-[79.209%] right-[0.128%] top-[11.111%]"
      data-name="Container"
    >
      <div
        className="absolute css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic right-[12.333px] text-[#212121] text-[12px] text-nowrap text-right"
        style={{ top: "calc(50% - 14px)" }}
      >
        <p className="block leading-[16px] whitespace-pre">Neutral</p>
      </div>
      <div
        className="absolute right-[0.333px] size-2 translate-y-[-50%]"
        style={{ top: "calc(50% - 5px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            id="Ellipse 2"
            r="3.5"
            stroke="var(--stroke-0, #9E9E9E)"
          />
        </svg>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name=".Data">
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Body3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative w-full">
          <BodyImage3 />
          <Data3 />
        </div>
      </div>
    </div>
  );
}

function WithTitle3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-60 relative rounded shrink-0"
      data-name="With title"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat h-[168px] shrink-0 w-full"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage3}')` }}
        />
        <Header3 />
        <Body3 />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function CountryTimestamp4() {
  return (
    <div
      className="absolute left-[60px] top-8 w-[180px]"
      data-name="Country/Timestamp"
    >
      <div className="box-border content-stretch flex flex-row font-['Helvetica_Neue:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative text-[#595959] text-[12px] text-left text-nowrap w-[180px]">
        <div className="css-1yvite flex flex-col justify-center relative shrink-0 uppercase">
          <p className="block leading-[16px] text-nowrap whitespace-pre">US</p>
        </div>
        <div className="css-1yvite flex flex-col justify-center relative shrink-0">
          <p className="block leading-[16px] text-nowrap whitespace-pre">|</p>
        </div>
        <div className="css-udq5m0 flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
          <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit text-[12px] text-nowrap whitespace-pre">
            Jan 1, 2025 1:48 PM
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthorHandle4() {
  return (
    <div
      className="absolute left-[60px] top-3 w-[180px]"
      data-name="Author/Handle"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-[180px]">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
            CNBS
          </p>
        </div>
      </div>
    </div>
  );
}

function Companies4() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Companies">
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-0 rounded-[48px] size-9 top-0"
        data-name="CNBC"
        style={{ backgroundImage: `url('${imgCnbc}')` }}
      />
    </div>
  );
}

function Photo5() {
  return (
    <div className="absolute inset-0" data-name="Photo">
      <div className="absolute left-0 size-9 top-0" data-name="Photo">
        <img
          alt
          className="block max-w-none size-full"
          height="36"
          loading="lazy"
          src={imgPhoto1}
          width="36"
        />
      </div>
      <Companies4 />
      <div className="absolute left-0 size-9 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            id="Ellipse 1"
            r="17.5"
            stroke="var(--stroke-0, #E0E0E0)"
          />
        </svg>
      </div>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="absolute left-0 size-9 top-0" data-name="Avatar">
      <Photo5 />
    </div>
  );
}

function Avatar10() {
  return (
    <div className="absolute left-4 size-10 top-3" data-name="Avatar">
      <Avatar9 />
    </div>
  );
}

function Header4() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute bg-[#ffffff] inset-0" data-name="BG" />
      <CountryTimestamp4 />
      <AuthorHandle4 />
      <Avatar10 />
    </div>
  );
}

function TitleIngressHitSentenceImage4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title, Ingress + Hit Sentence + Image"
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="-webkit-box css-zbaoay font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] max-h-12 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[18px] text-left w-full">
          <p className="block leading-[24px]">
            This Skate Shop’s Nike SB Dunk Collaboration Is Full of Hidden
            Details
          </p>
        </div>
      </div>
    </div>
  );
}

function BodyImage4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body + Image">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <TitleIngressHitSentenceImage4 />
      </div>
    </div>
  );
}

function Tab9() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">87.2M Reach</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute left-0 top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab9 />
      </div>
    </div>
  );
}

function Tab10() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">6.99k Views</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute left-[91px] top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab10 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute bottom-[44.444%] contents left-[79.209%] right-[0.128%] top-[11.111%]"
      data-name="Container"
    >
      <div
        className="absolute css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic right-[12.333px] text-[#212121] text-[12px] text-nowrap text-right"
        style={{ top: "calc(50% - 14px)" }}
      >
        <p className="block leading-[16px] whitespace-pre">Neutral</p>
      </div>
      <div
        className="absolute right-[0.333px] size-2 translate-y-[-50%]"
        style={{ top: "calc(50% - 5px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            id="Ellipse 2"
            r="3.5"
            stroke="var(--stroke-0, #9E9E9E)"
          />
        </svg>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name=".Data">
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Body4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative w-full">
          <BodyImage4 />
          <Data4 />
        </div>
      </div>
    </div>
  );
}

function WithTitle4() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-60 relative rounded shrink-0"
      data-name="With title"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat h-[168px] shrink-0 w-[345.205px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage4}')` }}
        />
        <Header4 />
        <Body4 />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function CountryTimestamp5() {
  return (
    <div
      className="absolute left-[60px] top-8 w-[180px]"
      data-name="Country/Timestamp"
    >
      <div className="box-border content-stretch flex flex-row font-['Helvetica_Neue:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative text-[#595959] text-[12px] text-left text-nowrap w-[180px]">
        <div className="css-1yvite flex flex-col justify-center relative shrink-0 uppercase">
          <p className="block leading-[16px] text-nowrap whitespace-pre">US</p>
        </div>
        <div className="css-1yvite flex flex-col justify-center relative shrink-0">
          <p className="block leading-[16px] text-nowrap whitespace-pre">|</p>
        </div>
        <div className="css-udq5m0 flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
          <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit text-[12px] text-nowrap whitespace-pre">
            Jan 1, 2025 1:48 PM
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthorHandle5() {
  return (
    <div
      className="absolute left-[60px] top-3 w-[180px]"
      data-name="Author/Handle"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-[180px]">
        <div className="css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
            Business Insider
          </p>
        </div>
      </div>
    </div>
  );
}

function Companies5() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Companies">
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat left-0 rounded-[36px] size-9 top-0"
        data-name="BI"
        style={{ backgroundImage: `url('${imgBi}')` }}
      />
    </div>
  );
}

function Photo6() {
  return (
    <div className="absolute inset-0" data-name="Photo">
      <div className="absolute left-0 size-9 top-0" data-name="Photo">
        <img
          alt
          className="block max-w-none size-full"
          height="36"
          loading="lazy"
          src={imgPhoto1}
          width="36"
        />
      </div>
      <Companies5 />
      <div className="absolute left-0 size-9 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            id="Ellipse 1"
            r="17.5"
            stroke="var(--stroke-0, #E0E0E0)"
          />
        </svg>
      </div>
    </div>
  );
}

function Avatar11() {
  return (
    <div className="absolute left-0 size-9 top-0" data-name="Avatar">
      <Photo6 />
    </div>
  );
}

function Avatar12() {
  return (
    <div className="absolute left-4 size-10 top-3" data-name="Avatar">
      <Avatar11 />
    </div>
  );
}

function Header5() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute bg-[#ffffff] inset-0" data-name="BG" />
      <CountryTimestamp5 />
      <AuthorHandle5 />
      <Avatar12 />
    </div>
  );
}

function TitleIngressHitSentenceImage5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title, Ingress + Hit Sentence + Image"
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="-webkit-box css-zbaoay font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] max-h-12 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[18px] text-left w-full">
          <p className="block leading-[24px]">
            Why Nike Shoes Aren’t Cool Anymore
          </p>
        </div>
      </div>
    </div>
  );
}

function BodyImage5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body + Image">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <TitleIngressHitSentenceImage5 />
      </div>
    </div>
  );
}

function Tab11() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">87.2M Reach</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute left-0 top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab11 />
      </div>
    </div>
  );
}

function Tab12() {
  return (
    <div className="relative shrink-0" data-name="Tab 1">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-start p-0 relative">
        <div className="css-1yvite flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#595959] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">6.99k Views</p>
        </div>
        <div
          className="bg-[rgba(255,255,255,0)] h-0.5 shrink-0 w-full"
          data-name="Indicator"
        />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute left-[91px] top-1" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tab12 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="absolute bottom-[44.444%] contents left-[79.209%] right-[0.128%] top-[11.111%]"
      data-name="Container"
    >
      <div
        className="absolute css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic right-[12.333px] text-[#212121] text-[12px] text-nowrap text-right"
        style={{ top: "calc(50% - 14px)" }}
      >
        <p className="block leading-[16px] whitespace-pre">Neutral</p>
      </div>
      <div
        className="absolute right-[0.333px] size-2 translate-y-[-50%]"
        style={{ top: "calc(50% - 5px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            id="Ellipse 2"
            r="3.5"
            stroke="var(--stroke-0, #9E9E9E)"
          />
        </svg>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name=".Data">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Body5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative w-full">
          <BodyImage5 />
          <Data5 />
        </div>
      </div>
    </div>
  );
}

function WithTitle5() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-60 relative rounded shrink-0"
      data-name="With title"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative w-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat h-[168px] shrink-0 w-full"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage5}')` }}
        />
        <Header5 />
        <Body5 />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative w-full">
        <WithTitle />
        <WithTitle1 />
        <WithTitle2 />
        <WithTitle3 />
        <WithTitle4 />
        <WithTitle5 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[26px]">
            Today’s Top 6 Stories driving Nike
          </p>
        </div>
        <Container25 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        <div className="basis-0 css-97ahe6 font-['Helvetica_Neue:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.8)] text-left">
          <ol className="list-decimal" start="1">
            <li
              className="css-ihls9j leading-[22px] mb-0 text-[16px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Nike’s Financial Outlook: `}</span>
              <span>
                <br />
                Investors are closely watching Nike ahead of its quarterly
                earnings report, expecting key updates on its global
                performance.
                <br />
                <br />
              </span>
            </li>
            <li
              className="css-ihls9j leading-[22px] mb-0 text-[16px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`New CEO Transition: `}</span>
              <span>
                <br />
                {`Nike's recent decision to appoint Elliott Hill taking over as the new CEO, has sparked discussions about the future direction of the brand.`}
                <br />
                <br />
              </span>
            </li>
            <li
              className="css-ihls9j leading-[22px] mb-0 text-[16px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Major Sneaker Drops: `}</span>
              <span>
                <br />
                Nike’s Air Jordan line remains a major focus. The release of
                highly anticipated models like the A Ma Maniere x Air Jordan 4
                and Travis Scott x Air Jordan 1 Low has garnered significant
                attention from sneakerheads, reinforcing Nike’s influence in
                streetwear and sneaker culture
                <br />
                <br />
              </span>
            </li>
            <li
              className="css-ihls9j leading-[22px] mb-0 text-[16px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Sustainability Initiatives: `}</span>
              <span>
                <br />
                Nike continues to expand its environmental efforts with new
                product lines focused on sustainability. This includes
                introducing more eco-friendly materials and innovations as part
                of its ongoing commitment to reducing its carbon footprint
                <br />
                <br />
              </span>
            </li>
            <li
              className="css-ihls9j leading-[22px] mb-0 text-[16px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Nike’s Financial Outlook: `}</span>
              <span>
                <br />
                {`Nike's Financial Outlook: Investors are closely watching Nike ahead of its quarterly earnings report, expecting key updates on its global performance. `}
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative w-full">
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[26px]">
            Today’s 5 topics that are driving Nike storylines:
          </p>
        </div>
        <Container28 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <ol className="list-decimal" start="1">
            <li
              className="css-ihls9j leading-[18px] mb-0 text-[14px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                How can we address the stock price volatility?
              </span>
              <span>{` - Nike's stock price has shown significant fluctuations over the past week. On September 20, 2024, the stock opened at $87.87 and closed at $86.52, with a high of $88.00 and a low of $84.812. Nike might consider how to communicate stability and long-term value to investors despite short-term price movements.`}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <ol className="list-decimal" start="2">
            <li
              className="css-ihls9j leading-[18px] mb-0 text-[14px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`What's driving the recent earnings beat?`}</span>
              <span>{` Nike reported a significant bottom-line beat in its latest earnings report5. PR should investigate the factors contributing to this performance, such as cost-cutting measures, increased sales, or improved margins, to effectively communicate the company's financial strength.`}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <ol className="list-decimal" start="3">
            <li
              className="css-ihls9j leading-[18px] mb-0 text-[14px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                How are we addressing market share concerns?
              </span>
              <span>{` There have been discussions about Nike's market share in relation to competitors. PR should be prepared to highlight Nike's strategies for maintaining and growing its market position, including product innovations, marketing initiatives, and expansion plans.`}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <ol className="list-decimal" start="4">
            <li
              className="css-ihls9j leading-[18px] mb-0 text-[14px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`What's Nike’s response to the changing retail landscape?`}</span>
              <span>
                {` With the ongoing shift towards `}
                <br />
                {`e-commerce and direct-to-consumer sales, a Nike should be ready to articulate Nike's omnichannel strategy and how the company is adapting to changing consumer preferences.`}
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <ol className="list-decimal" start="5">
            <li
              className="css-ihls9j leading-[18px] mb-0 text-[14px]"
              style={{
                marginInlineStart:
                  "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
              }}
            >
              <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`What's driving the recent earnings beat?`}</span>
              <span>{` Nike reported a significant bottom-line beat in its latest earnings report5. PR should investigate the factors contributing to this performance, such as cost-cutting measures, increased sales, or improved margins, to effectively communicate the company's financial strength.`}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-7 items-end justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[26px]">
            Today’s Top 5 Questions Nike should be addressing:
          </p>
        </div>
        <Container30 />
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Infotip() {
  return (
    <div className="relative shrink-0 size-5" data-name="infotip">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="infotip">
          <path
            d={svgPaths.p8b9d680}
            fill="var(--fill-0, #595959)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Infotip1() {
  return (
    <div className="relative shrink-0" data-name="Infotip">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-0 py-px relative">
          <Infotip />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative w-full">
        <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Hashtags</p>
        </div>
        <Infotip1 />
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
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Title />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[22.222%]" data-name="Icon ✏️">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon âï¸">
          <path
            d={svgPaths.p14ed1500}
            fill="var(--fill-0, #595959)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div
      className="relative rounded-[36px] shrink-0 size-9"
      data-name="Icon Button"
    >
      <Icon />
    </div>
  );
}

function Actions() {
  return (
    <div className="relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row items-center justify-end p-0 relative">
        <IconButton1 />
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="relative shrink-0" data-name="Right">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-end p-0 relative">
        <Actions />
      </div>
    </div>
  );
}

function WidgetHeader() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full"
      data-name="Widget Header"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-4 py-2 relative w-full">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

function DonutSlicesChart() {
  return (
    <div
      className="relative shrink-0 size-[200px]"
      data-name="Donut Slices Chart"
    >
      <div className="absolute bottom-[-1.5%] left-[-1.5%] right-[-1.5%] top-[-1.5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 206 206"
        >
          <g id="5 Slice">
            <g id="Ellipse 5">
              <mask
                fill="black"
                height="206"
                id="path-1-outside-1_7_29386"
                maskUnits="userSpaceOnUse"
                width="206"
                x="0"
                y="0"
              >
                <rect fill="white" height="206" width="206" />
                <path d={svgPaths.p1b700f80} />
              </mask>
              <path d={svgPaths.p1b700f80} fill="var(--fill-0, #00ACC1)" />
              <path
                d={svgPaths.p1b700f80}
                mask="url(#path-1-outside-1_7_29386)"
                stroke="var(--stroke-0, white)"
                strokeWidth="6"
              />
            </g>
            <g id="Ellipse 4">
              <mask
                fill="black"
                height="207"
                id="path-2-outside-2_7_29386"
                maskUnits="userSpaceOnUse"
                width="207"
                x="0"
                y="0"
              >
                <rect fill="white" height="207" width="207" />
                <path d={svgPaths.p506d080} />
              </mask>
              <path d={svgPaths.p506d080} fill="var(--fill-0, #F06292)" />
              <path
                d={svgPaths.p506d080}
                mask="url(#path-2-outside-2_7_29386)"
                stroke="var(--stroke-0, white)"
                strokeWidth="6"
              />
            </g>
            <path
              d={svgPaths.p1711b600}
              fill="var(--fill-0, #FDD835)"
              id="Ellipse 3"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
            />
            <path
              d={svgPaths.p1f34c5f0}
              fill="var(--fill-0, #1E88E5)"
              id="Ellipse 2"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
            />
            <g id="Ellipse 1">
              <mask
                fill="black"
                height="67"
                id="path-5-outside-3_7_29386"
                maskUnits="userSpaceOnUse"
                width="66"
                x="100"
                y="0"
              >
                <rect fill="white" height="67" width="66" x="100" />
                <path d={svgPaths.pe687700} />
              </mask>
              <path d={svgPaths.pe687700} fill="var(--fill-0, #F57C00)" />
              <path
                d={svgPaths.pe687700}
                mask="url(#path-5-outside-3_7_29386)"
                stroke="var(--stroke-0, white)"
                strokeWidth="6"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Swatch() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #1E88E5)"
            id="Color"
            r="6"
          />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">#CaitlinClark</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric1() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">52.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric2() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">9.7k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[210px]">
          <Swatch />
          <Label />
          <Metric1 />
          <Metric2 />
        </div>
      </div>
    </div>
  );
}

function Swatch1() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #F9A825)"
            id="Color"
            r="6"
          />
        </g>
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
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">#AirJordan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric3() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">40.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric4() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">5.7k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta1() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[210px]">
          <Swatch1 />
          <Label1 />
          <Metric3 />
          <Metric4 />
        </div>
      </div>
    </div>
  );
}

function Swatch2() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #F06292)"
            id="Color"
            r="6"
          />
        </g>
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
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">#traviscott</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric5() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">20.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric6() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">1.2k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta2() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[210px]">
          <Swatch2 />
          <Label2 />
          <Metric5 />
          <Metric6 />
        </div>
      </div>
    </div>
  );
}

function Swatch3() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #00ACC1)"
            id="Color"
            r="6"
          />
        </g>
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
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">#addidas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric7() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">12.0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric8() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">125</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta3() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[210px]">
          <Swatch3 />
          <Label3 />
          <Metric7 />
          <Metric8 />
        </div>
      </div>
    </div>
  );
}

function Swatch4() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #F57C00)"
            id="Color"
            r="6"
          />
        </g>
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
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">#nikeair</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric9() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">10.3%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric10() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">83</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta4() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[210px]">
          <Swatch4 />
          <Label4 />
          <Metric9 />
          <Metric10 />
        </div>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="relative shrink-0" data-name="Legend">
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative">
        <DonutLabelDelta />
        <DonutLabelDelta1 />
        <DonutLabelDelta2 />
        <DonutLabelDelta3 />
        <DonutLabelDelta4 />
      </div>
    </div>
  );
}

function Visualization() {
  return (
    <div className="relative shrink-0 w-full" data-name="Visualization">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-[24px] relative w-full">
          <DonutSlicesChart />
          <Legend />
        </div>
      </div>
    </div>
  );
}

function Component5SliceDonut() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="5 slice donut"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <WidgetHeader />
        <Visualization />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Infotip2() {
  return (
    <div className="relative shrink-0 size-5" data-name="infotip">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="infotip">
          <path
            d={svgPaths.p8b9d680}
            fill="var(--fill-0, #595959)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Infotip3() {
  return (
    <div className="relative shrink-0" data-name="Infotip">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-0 py-px relative">
          <Infotip2 />
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative w-full">
        <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">Sentiment</p>
        </div>
        <Infotip3 />
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
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Title1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[22.222%]" data-name="Icon ✏️">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon âï¸">
          <path
            d={svgPaths.p14ed1500}
            fill="var(--fill-0, #595959)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div
      className="relative rounded-[36px] shrink-0 size-9"
      data-name="Icon Button"
    >
      <Icon1 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="relative shrink-0" data-name="Actions">
      <div className="box-border content-stretch flex flex-row items-center justify-end p-0 relative">
        <IconButton2 />
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="relative shrink-0" data-name="Right">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-end p-0 relative">
        <Actions1 />
      </div>
    </div>
  );
}

function WidgetHeader1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full"
      data-name="Widget Header"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-4 py-2 relative w-full">
          <Left1 />
          <Right1 />
        </div>
      </div>
    </div>
  );
}

function DonutSlicesChart1() {
  return (
    <div
      className="h-[201px] overflow-clip relative shrink-0 w-[200px]"
      data-name="Donut Slices Chart"
    >
      <div className="absolute bottom-[-0.498%] left-[-0.5%] right-[-0.5%] top-[-0.498%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 202 203"
        >
          <g id="4 Slice">
            <g id="Ellipse 4">
              <mask
                fill="black"
                height="203"
                id="path-1-outside-1_33_7341"
                maskUnits="userSpaceOnUse"
                width="202"
                x="0"
                y="0"
              >
                <rect fill="white" height="203" width="202" />
                <path d={svgPaths.p19a1f700} />
              </mask>
              <path d={svgPaths.p19a1f700} fill="var(--fill-0, #E0E0E0)" />
              <path
                d={svgPaths.p19a1f700}
                mask="url(#path-1-outside-1_33_7341)"
                stroke="var(--stroke-0, white)"
                strokeWidth="2"
              />
            </g>
            <g id="Ellipse 3">
              <mask
                fill="black"
                height="203"
                id="path-2-outside-2_33_7341"
                maskUnits="userSpaceOnUse"
                width="202"
                x="0"
                y="0"
              >
                <rect fill="white" height="203" width="202" />
                <path d={svgPaths.p1a192d00} />
              </mask>
              <path d={svgPaths.p1a192d00} fill="var(--fill-0, #BDBDBD)" />
              <path
                d={svgPaths.p1a192d00}
                mask="url(#path-2-outside-2_33_7341)"
                stroke="var(--stroke-0, white)"
                strokeWidth="2"
              />
            </g>
            <g id="Ellipse 2">
              <mask
                fill="black"
                height="203"
                id="path-3-outside-3_33_7341"
                maskUnits="userSpaceOnUse"
                width="162"
                x="40"
                y="0"
              >
                <rect fill="white" height="203" width="162" x="40" />
                <path d={svgPaths.p16ffd8f1} />
              </mask>
              <path d={svgPaths.p16ffd8f1} fill="var(--fill-0, #FF4545)" />
              <path
                d={svgPaths.p16ffd8f1}
                mask="url(#path-3-outside-3_33_7341)"
                stroke="var(--stroke-0, white)"
                strokeWidth="2"
              />
            </g>
            <g id="Ellipse 1">
              <mask
                fill="black"
                height="162"
                id="path-4-outside-4_33_7341"
                maskUnits="userSpaceOnUse"
                width="102"
                x="100"
                y="0"
              >
                <rect fill="white" height="162" width="102" x="100" />
                <path d={svgPaths.p21fa7880} />
              </mask>
              <path d={svgPaths.p21fa7880} fill="var(--fill-0, #2DC95A)" />
              <path
                d={svgPaths.p21fa7880}
                mask="url(#path-4-outside-4_33_7341)"
                stroke="var(--stroke-0, white)"
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Swatch5() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #2DC95A)"
            id="Color"
            r="6"
          />
        </g>
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
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">Positive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric11() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">35.8%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric12() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">1.9k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta5() {
  return (
    <div className="relative shrink-0 w-[216px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[216px]">
          <Swatch5 />
          <Label5 />
          <Metric11 />
          <Metric12 />
        </div>
      </div>
    </div>
  );
}

function Swatch6() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #FF4545)"
            id="Color"
            r="6"
          />
        </g>
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
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">Negative</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric13() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">25.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric14() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">1.4k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta6() {
  return (
    <div className="relative shrink-0 w-[216px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[216px]">
          <Swatch6 />
          <Label6 />
          <Metric13 />
          <Metric14 />
        </div>
      </div>
    </div>
  );
}

function Swatch7() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #BDBDBD)"
            id="Color"
            r="6"
          />
        </g>
      </svg>
    </div>
  );
}

function Label7() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">Neutral</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric15() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">20.3%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric16() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">1.1k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta7() {
  return (
    <div className="relative shrink-0 w-[216px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[216px]">
          <Swatch7 />
          <Label7 />
          <Metric15 />
          <Metric16 />
        </div>
      </div>
    </div>
  );
}

function Swatch8() {
  return (
    <div className="h-6 relative shrink-0 w-3" data-name="Swatch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Swatch">
          <circle
            cx="6"
            cy="12"
            fill="var(--fill-0, #E0E0E0)"
            id="Color"
            r="6"
          />
        </g>
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
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[3px] relative w-full">
          <div className="basis-0 css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212121] text-[14px] text-left">
            <p className="block leading-[18px]">Not Rated</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric17() {
  return (
    <div className="relative shrink-0" data-name="Metric 1">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative">
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">20.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric18() {
  return (
    <div className="relative shrink-0 w-7" data-name="Metric 2">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-end px-0 py-[3px] relative w-7">
          <div className="css-1yvite font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-nowrap text-right">
            <p className="block leading-[18px] whitespace-pre">1k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutLabelDelta8() {
  return (
    <div className="relative shrink-0 w-[216px]" data-name="Donut label delta">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-2 py-1 relative w-[216px]">
          <Swatch8 />
          <Label8 />
          <Metric17 />
          <Metric18 />
        </div>
      </div>
    </div>
  );
}

function Legend1() {
  return (
    <div className="relative shrink-0" data-name="Legend">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <DonutLabelDelta5 />
        <DonutLabelDelta6 />
        <DonutLabelDelta7 />
        <DonutLabelDelta8 />
      </div>
    </div>
  );
}

function Visualization1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Visualization">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-[24px] relative w-full">
          <DonutSlicesChart1 />
          <Legend1 />
        </div>
      </div>
    </div>
  );
}

function SentimentDonut() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative rounded shrink-0"
      data-name="Sentiment donut"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <WidgetHeader1 />
        <Visualization1 />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-7 items-start justify-start p-0 relative w-full">
        <Component5SliceDonut />
        <SentimentDonut />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-7 items-start justify-start p-0 relative w-full">
        <div className="css-97ahe6 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] text-left w-[672px]">
          <p className="block leading-[26px]">
            What’s driving social media today
          </p>
        </div>
        <Container36 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="h-[245px] relative shrink-0 w-[818.276px]"
      data-name="Container"
    >
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[135.172px] left-0 top-[109.828px] w-[203.966px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage6}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[72.414px] left-[217.241px] top-[172.586px] w-[129.138px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage7}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[135.172px] left-[638.448px] top-[109.828px] w-[179.828px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage8}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[71.207px] left-[359.655px] top-[172.586px] w-[126.724px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage9}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[102.586px] left-0 top-0 w-[203.966px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage10}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[76.034px] left-[494.828px] top-0 w-[135.172px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage11}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[96.552px] left-[494.828px] top-[83.275px] w-[135.172px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage12}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[152.069px] left-[217.241px] top-0 w-[270.345px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage13}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[100.172px] left-[639.655px] top-0 w-[178.621px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage14}')` }}
      />
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[42.241px] left-[491.207px] top-[191.897px] w-[141.207px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage15}')` }}
      />
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-4" data-name="KeyboardArrowDown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="KeyboardArrowDown">
          <path
            d={svgPaths.pec6e800}
            fill="var(--fill-0, #757575)"
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
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Button</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-6 relative rounded-sm shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-center px-0.5 py-0 relative">
          <KeyboardArrowDown />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-6 relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col h-6 items-start justify-start p-0 relative">
        <Button />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Button1 />
      </div>
    </div>
  );
}

function KeyboardArrowDown1() {
  return (
    <div className="relative shrink-0 size-4" data-name="KeyboardArrowDown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="KeyboardArrowDown">
          <path
            d={svgPaths.pec6e800}
            fill="var(--fill-0, #757575)"
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
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Button</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-6 relative rounded-sm shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-center px-0.5 py-0 relative">
          <KeyboardArrowDown1 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-6 relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col h-6 items-start justify-start p-0 relative">
        <Button2 />
      </div>
    </div>
  );
}

function ContentCopy() {
  return (
    <div className="relative shrink-0 size-4" data-name="ContentCopy">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="ContentCopy">
          <path
            d={svgPaths.p38927000}
            fill="var(--fill-0, #757575)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative">
          <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[12px] text-center text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Button</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-6 relative rounded-sm shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-center px-0.5 py-0 relative">
          <ContentCopy />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-6 relative rounded-sm shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-col h-6 items-start justify-start p-0 relative">
        <Button4 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Button3 />
        <Button5 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[363px] relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-6 h-[363px] items-start justify-start p-0 relative w-full">
        <div
          className="css-97ahe6 font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] text-left"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[26px]">Top Images in media and social</p>
        </div>
        <Container38 />
        <Container41 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-0 relative">
          <div className="css-yy66up flex flex-col font-['Helvetica_Neue:Bold',_sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">
              Suggested follow-ups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="relative shrink-0" data-name="Subtitle">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Container43 />
      </div>
    </div>
  );
}

function AiOutput() {
  return (
    <div className="relative shrink-0 size-5" data-name="AiOutput">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="AiOutput">
          <path
            d={svgPaths.p114c2100}
            fill="var(--fill-0, #B627A1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar13() {
  return (
    <div className="relative shrink-0 size-5" data-name="_Avatar">
      <div className="box-border content-stretch flex flex-row gap-[5.556px] items-center justify-start p-0 relative size-5">
        <AiOutput />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon ✏️">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon âï¸">
          <path
            d={svgPaths.p2b50df60}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
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
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`How do Tesla's sustainability initiatives compare with those of its competitors?`}</p>
        </div>
        <Icon2 />
      </div>
    </div>
  );
}

function Wafer() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Wafer">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Avatar13 />
          <Label9 />
        </div>
      </div>
    </div>
  );
}

function AiOutput1() {
  return (
    <div className="relative shrink-0 size-5" data-name="AiOutput">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="AiOutput">
          <path
            d={svgPaths.p114c2100}
            fill="var(--fill-0, #B627A1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar14() {
  return (
    <div className="relative shrink-0 size-5" data-name="_Avatar">
      <div className="box-border content-stretch flex flex-row gap-[5.556px] items-center justify-start p-0 relative size-5">
        <AiOutput1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon ✏️">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon âï¸">
          <path
            d={svgPaths.p2b50df60}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
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
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`What specific demographic segments are responding most positively to Nike's recent campaigns?`}</p>
        </div>
        <Icon3 />
      </div>
    </div>
  );
}

function Wafer1() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Wafer">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Avatar14 />
          <Label10 />
        </div>
      </div>
    </div>
  );
}

function AiOutput4() {
  return (
    <div className="relative shrink-0 size-5" data-name="AiOutput">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="AiOutput">
          <path
            d={svgPaths.p114c2100}
            fill="var(--fill-0, #B627A1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar17() {
  return (
    <div className="relative shrink-0 size-5" data-name="_Avatar">
      <div className="box-border content-stretch flex flex-row gap-[5.556px] items-center justify-start p-0 relative size-5">
        <AiOutput4 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon ✏️">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon âï¸">
          <path
            d={svgPaths.p2b50df60}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
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
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Are there any unexpected influencers driving conversations about
            Nike?
          </p>
        </div>
        <Icon6 />
      </div>
    </div>
  );
}

function Wafer4() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Wafer">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Avatar17 />
          <Label13 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <Wafer />
        {[...Array(3).keys()].map((_, i) => (
          <Wafer1 key={i} />
        ))}
        <Wafer4 />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function FollowUp() {
  return (
    <div className="relative shrink-0 w-full" data-name="Follow up">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Subtitle />
        <FollowUp />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start p-0 relative w-full">
        <Container6 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 928 1"
            >
              <line
                id="Line 12"
                stroke="var(--stroke-0, #DBDBDB)"
                x2="928"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
        <Container26 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 928 1"
            >
              <line
                id="Line 12"
                stroke="var(--stroke-0, #DBDBDB)"
                x2="928"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
        <Container29 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 928 1"
            >
              <line
                id="Line 12"
                stroke="var(--stroke-0, #DBDBDB)"
                x2="928"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
        <Container35 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 928 1"
            >
              <line
                id="Line 12"
                stroke="var(--stroke-0, #DBDBDB)"
                x2="928"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
        <Container37 />
        <Container42 />
        <Container45 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[60px] items-start justify-start p-0 relative w-full">
        <Container46 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[4503px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-0.5 h-[4503px] items-center justify-start px-4 py-0 relative w-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
        <ChatHeader1 />
        <Container5 />
        <TabGroup />
        <Container48 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start p-0 relative w-full px-[36px] py-[0px]">
        <YourPrompt />
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[3706px] relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-9 h-[3706px] items-start justify-start p-0 relative w-full">
        <Container50 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="absolute h-[3706px] left-0 top-0 w-[960px]"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-9 h-[3706px] items-start justify-start p-0 relative w-[960px]">
        <Container51 />
      </div>
    </div>
  );
}

export default function BrandPerformance() {
  return (
    <div className="relative size-full" data-name="Brand-Performance">
      <Container52 />
    </div>
  );
}