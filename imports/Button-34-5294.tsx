
function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-5 ml-1" data-name="Arrow Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_forward">
          <path
            d="M8.33333 5L7.15833 6.175L10.975 10L7.15833 13.825L8.33333 15L13.3333 10L8.33333 5Z"
            fill="var(--fill-0, #ffffff)"
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
          <div className="css-xb0uby font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Create Report</p>
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
        <div className="box-border content-stretch flex flex-row gap-1 h-9 items-center justify-center px-2 py-0 relative">
          <Text />
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}

export default function Button1() {
  return (
    <div
      className="bg-[#1d9f9f] relative rounded-sm size-full"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
        <Button />
      </div>
    </div>
  );
}
