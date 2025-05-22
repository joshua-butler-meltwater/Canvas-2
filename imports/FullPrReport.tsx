import svgPaths from "./svg-l1ohhjzgfj";

function Header() {
  return (
    <div className="relative shrink-0" data-name="Header">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative">
        <div className="css-yy66up font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#212121] text-[24px] text-center text-nowrap">
          <p className="block leading-[32px] whitespace-pre text-[24px] font-bold">{`Impact of Pepsico's Poppi Acquisition`}</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-[rgba(29,159,159,0.04)] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(29,159,159,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative w-full">
          <Header />
        </div>
      </div>
    </div>
  );
}

function Container1() {
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

function ContainedButton() {
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
        <ContainedButton />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative w-full">
        <Container1 />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none scale-y-[-100%]">
            <IconButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="bg-[rgba(29,159,159,0.04)] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-2 relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <Container />
        <Container3 />
      </div>
      <div className="absolute border border-[rgba(29,159,159,0.07)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function SocialMediaImpactContainer() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full"
      data-name="Social Media Impact Container"
    >
      <div className="[grid-area:1_/_1] css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal ml-0 mt-0 not-italic relative text-[#212121] text-[0px] text-left w-[848px]">
        <p className="block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
          Impact on Social Media
        </p>
        <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
        <p className="block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
          Twitter
          <br />
          <br />
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
            Summary:
          </span>
          <span>
            {` Twitter posts focused on PepsiCo's strategic move to acquire Poppi, highlighting its entry into the health-conscious beverage market. Some posts discussed the financial details of the acquisition, while others debated Poppi's recent controversies and its potential under PepsiCo's ownership.`}
            <br />
            <br />
          </span>
        </p>
        <ul className="css-ed5n1g list-disc mb-0 whitespace-pre-wrap">
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@notreload_ai:</span>
            <span>
              {`     "$PEP flat [PepsiCo said it has entered into a definitive agreement to acquire 'poppi,' a fast-growing prebiotic soda brand, for $1.95B. The transaction also includes an additional potential earnout consideration subject to the achievement of certain performance milestones within a specified period after closing of the transaction. The transaction is subject to customary closing conditions, including regulatory approval. Additional terms of the acquisition were not disclosed]" `}
              <br />(
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 295, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 1)`}</span>
          </li>
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@GenExDividend:</span>
            <span>
              {`     "PepsiCo (3.51% of my portfolio is $PEP) enters healthier prebiotic soda market with ~$1.65B poppi acquisition." `}
              <br />(
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 809, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 13)`}</span>
          </li>
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@LaMonicaBuzz:</span>
            <span>
              {`     "Pepsi buying sparkling prebiotic soda maker poppi for about $1.95 billion. ($1.65B after cash tax benefits.) $PEP down a bit #premarket."`}
              <br />
              {` (`}
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 548, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 2)`}</span>
          </li>
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@PoliticalMav:</span>
            <span>
              {`     "#HealthySodaWars: Pepsi Acquires Poppi for $1.6 Billion Amid Rising Demand for Healthier Drinks PepsiCo has officially entered the growing 'healthy soda' market by acquiring Poppi, a prebiotic soda brand, for $1.6 billion." `}
              <br />(
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Views: `}</span>
            <span>{`33, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 2)`}</span>
          </li>
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@WLFI:</span>
            <span>
              {`     "New York (CNN) — PepsiCo is buying Poppi, the popular prebiotic soda brand, in a $1.65 billion deal." `}
              <br />(
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 819, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 2)`}</span>
          </li>
        </ul>
        <p className="block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[22px] mb-0 text-[16px]">
          <br />
          Metrics:
          <br />
          <br />
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
            Total Mentions:
          </span>
          <span>{` 6`}</span>
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Estimated Reach: `}</span>
          59,815
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Total Views: `}</span>
          1,980
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Engagement: `}</span>
          18
        </p>
        <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
        <p className="block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
          Reddit
        </p>
        <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
            Summary:
          </span>
          <span>
            {` Reddit discussions revolved around the financial implications of the acquisition, with users debating whether PepsiCo overpaid for Poppi. Some posts criticized Poppi's claims about probiotics, while others speculated on its future under PepsiCo.`}
            <br />
            <br />
          </span>
        </p>
        <ul className="css-ed5n1g list-disc mb-0 whitespace-pre-wrap">
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@shawman123:</span>
            <span>
              {`     "Pepsi (PEP) buys probiotic soda Poppi for $1.95 billion to expand their presence in the functional soda market, paying 13x+ topline revenue." `}
              <br />(
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 8,524,500, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Reactions: `}</span>
            157)
          </li>
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@sevseg_decoder:</span>
            <span>
              {`     "Pepsi (PEP) buys probiotic soda Poppi for $1.95 billion to expand their presence in the functional soda market, paying 13x+ topline revenue." `}
              <br />(
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 8,524,515, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 12)`}</span>
          </li>
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@sir_rockabye:</span>
            <span>
              {`     "What are you talking about. It's not going anywhere and will probably increase distribution." `}
              <br />(
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 2,980,419, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 7)`}</span>
          </li>
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span>{`@intoomanyways:     "Poopi, Olipoop, Simply Poop. My laxative soda pop brands I'll be starting. Now open for venture funding." (`}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 8,524,652, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 40)`}</span>
          </li>
          <li
            className="css-ihls9j leading-[22px] mb-0 text-[16px]"
            style={{
              marginInlineStart:
                "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
            }}
          >
            <span className="text-[#1d9f9f]">@eyecue82:</span>
            <span>
              {`     "We started to drink poppi not to drink soda. Now it's time to stop drinking poppi, they already lost some trust with the whole extremely low pre-biotic debacle, now they sold out to the enemy." `}
              <br />(
            </span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Views:
            </span>
            <span>{` 8,524,684, `}</span>
            <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
              Reactions:
            </span>
            <span>{` 1)`}</span>
          </li>
        </ul>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span>
            <br />
          </span>
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
            Metrics:
          </span>
          <span>
            <br />
            <br />
          </span>
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Total Mentions: `}</span>
          10
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
            Estimated Reach:
          </span>
          <span>{` 29,000,000+`}</span>
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Total Views: `}</span>
          8,524,684
        </p>
        <p className="leading-[22px] mb-0 text-[16px]">
          <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Engagement: `}</span>
          217
        </p>
        <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
        <p className="block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[22px] mb-0 text-[16px]">
          BlueSky
        </p>
        <p className="block leading-[22px] text-[16px]">
          <br />
          No posts were found referencing the press release on BlueSky.
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start px-4 py-0 relative w-full">
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[0px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
              Overview of the Press Release
            </p>
            <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
            <p className="block leading-[22px] text-[16px]">{`PepsiCo announced its acquisition of Poppi, a prebiotic soda brand, for $1.95 billion, including $300 million in anticipated cash tax benefits. This move aligns with PepsiCo's strategy to expand its portfolio of healthier beverage options in response to consumer demand. The acquisition is subject to regulatory approval and customary closing conditions.`}</p>
          </div>
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[0px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
              Scope of This Report
            </p>
            <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
            <p className="block leading-[22px] text-[16px]">
              This report analyzes the impact of the press release across news
              articles and social media platforms, focusing on mentions,
              sentiment, engagement, and reach.
            </p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 848 1"
              >
                <line
                  id="Line 9"
                  stroke="var(--stroke-0, #212121)"
                  strokeOpacity="0.12"
                  x2="848"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[0px] text-left"
            style={{ width: "min-content" }}
          >
            <a
              className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]"
              href="https://app.meltwater.com/a/mira/chat?prompt=What+is+the+impact+of+the+press+release+https%3A%2F%2Fwww.pepsico.com%2Four-stories%2Fpress-release%2Fpepsico-to-acquire-poppi03172025%3F+#"
              role="link"
              tabIndex="0"
            >
              Impact on News Articles
            </a>
            <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
            <ul className="css-ed5n1g list-disc">
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Total Articles Referencing the Press Release: `}</span>
                868
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                  Sentiment Distribution:
                </span>
                <span>{` 658 negative, 168 positive, 19 neutral`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Geographical Distribution: `}</span>
                Predominantly in the US (619 mentions), followed by the UK (42),
                India (38), Canada (37), and Australia (26).
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                  Audience Metrics:
                </span>
                <span>{` Total views: 1,567,563; Total engagement: 1,017`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                  Topics Distribution:
                </span>
                <span>{` Company news (807 mentions), soft drinks (776 mentions), economics (30 mentions)`}</span>
              </li>
            </ul>
          </div>
          <div className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#212121] text-[0px] text-left text-nowrap">
            <p className="block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px] whitespace-pre">
              Sentiment Distribution
            </p>
            <p className="block leading-[22px] mb-0 text-[16px] whitespace-pre">
              &nbsp;
            </p>
            <ul className="css-ed5n1g list-disc">
              <li
                className="css-ihls9j mb-0"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="leading-[22px] text-[16px]">
                  Positive: 159 articles
                </span>
              </li>
              <li
                className="css-ihls9j mb-0"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="leading-[22px] text-[16px]">
                  Neutral: 629 articles
                </span>
              </li>
              <li
                className="css-ihls9j mb-0"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="leading-[22px] text-[16px]">
                  Negative: 14 articles
                </span>
              </li>
            </ul>
          </div>
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[0px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
              Geographical Distribution:
            </p>
            <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
            <ul className="css-ed5n1g list-disc">
              <li
                className="css-ihls9j mb-0"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[22px] not-italic text-[16px]">
                  Region
                </span>
              </li>
              <ul className="css-ed5n1g">
                <li
                  className="css-n4inmg mb-0"
                  style={{
                    marginInlineStart:
                      "calc(1.5 * 2 * var(--list-marker-font-size, 0))",
                  }}
                >
                  <span className="leading-[22px] text-[16px]">
                    United States: 562 articles
                  </span>
                </li>
                <li
                  className="css-n4inmg mb-0"
                  style={{
                    marginInlineStart:
                      "calc(1.5 * 2 * var(--list-marker-font-size, 0))",
                  }}
                >
                  <span className="leading-[22px] text-[16px]">
                    United Kingdom: 42 articles
                  </span>
                </li>
                <li
                  className="css-n4inmg mb-0"
                  style={{
                    marginInlineStart:
                      "calc(1.5 * 2 * var(--list-marker-font-size, 0))",
                  }}
                >
                  <span className="leading-[22px] text-[16px]">
                    India: 39 articles
                  </span>
                </li>
                <li
                  className="css-n4inmg mb-0"
                  style={{
                    marginInlineStart:
                      "calc(1.5 * 2 * var(--list-marker-font-size, 0))",
                  }}
                >
                  <span className="leading-[22px] text-[16px]">
                    Canada: 34 articles
                  </span>
                </li>
                <li
                  className="css-n4inmg mb-0"
                  style={{
                    marginInlineStart:
                      "calc(1.5 * 2 * var(--list-marker-font-size, 0))",
                  }}
                >
                  <span className="leading-[22px] text-[16px]">
                    Australia: 26 articles
                  </span>
                </li>
              </ul>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                  Total Audience Reach:
                </span>
                <span>{` 789,862`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Total Views: `}</span>
                1,461,326
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                  Total Engagement:
                </span>
                <span>{` 974`}</span>
              </li>
            </ul>
          </div>
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[0px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
              Topics Distribution:
            </p>
            <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
            <ul className="css-ed5n1g list-disc">
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Company News: `}</span>
                769 mentions
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Soft Drinks: `}</span>
                763 mentions
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Economics: `}</span>
                25 mentions
              </li>
            </ul>
          </div>
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[0px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
              Top Sources
            </p>
            <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
            <ol className="list-decimal whitespace-pre-wrap" start="1">
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                T<span className="text-[#1d9f9f]">{`he New York Times `}</span>
                <span className="text-[#1d9f9f]"> </span>
                <span className="text-[#1d9f9f]"> </span>
                <span>{`  - Reach: 134,904,703`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="text-[#1d9f9f]">M</span>
                <span className="text-[#1d9f9f]">SN.com</span>
                <span className="text-[#1d9f9f]"> </span>
                <span>{`  - Reach: 122,324,471`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="text-[#1d9f9f]">F</span>
                <span className="text-[#1d9f9f]">orbes</span>
                <span className="text-[#1d9f9f]"> </span>
                <span>{`  - Reach: 78,108,059`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="text-[#1d9f9f]">U</span>
                <span className="text-[#1d9f9f]">SA Today</span>
                <span className="text-[#1d9f9f]"> </span>
                <span>{`  - Reach: 74,070,478`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="text-[#1d9f9f]">Y</span>
                <span className="text-[#1d9f9f]">ahoo! News</span>
                <span className="text-[#1d9f9f]"> </span>
                <span>{`  - Reach: 57,046,038`}</span>
              </li>
            </ol>
          </div>
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[0px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Helvetica_Neue:Bold',_sans-serif] font-bold leading-[26px] mb-0 text-[20px]">
              Top Articles by Reach
            </p>
            <p className="block leading-[22px] mb-0 text-[16px]">&nbsp;</p>
            <ol className="list-decimal whitespace-pre-wrap" start="1">
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                T<span className="text-[#1d9f9f]">he New York Times</span>
                <span>{`     - "Why Are We Living in the Golden Age of ‘Gut Soda’?" (`}</span>
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Reach: `}</span>
                134,904,703)
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="text-[#1d9f9f]">MSN.com</span>
                <span>{`     - "PepsiCo to buy prebiotic brand Poppi for nearly $2 billion" (`}</span>
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                  Reach:
                </span>
                <span>{` 122,324,471)`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="text-[#1d9f9f]">MSN.com</span>
                <span>{`     - "Pepsi acquires Poppi prebiotic soda for $1.65 billion in a play to attract Gen Z" (`}</span>
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                  Reach:
                </span>
                <span>{` 122,324,471)`}</span>
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="text-[#1d9f9f]">MSN.com</span>
                <span>{`     - "Pepsi Is Buying Poppi For Nearly $2 Billion & Fans Are LIVID" (`}</span>
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">{`Reach: `}</span>
                122,324,471)
              </li>
              <li
                className="css-ihls9j leading-[22px] mb-0 text-[16px]"
                style={{
                  marginInlineStart:
                    "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                }}
              >
                <span className="text-[#1d9f9f]">MSN.com</span>
                <span>{`     - "PepsiCo buys controversial 'health drink' for $2BN" (`}</span>
                <span className="font-['Helvetica_Neue:Bold',_sans-serif] font-bold not-italic">
                  Reach:
                </span>
                <span>{` 119,433,275)`}</span>
              </li>
            </ol>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 848 1"
              >
                <line
                  id="Line 9"
                  stroke="var(--stroke-0, #212121)"
                  strokeOpacity="0.12"
                  x2="848"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
          <SocialMediaImpactContainer />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 848 1"
              >
                <line
                  id="Line 9"
                  stroke="var(--stroke-0, #212121)"
                  strokeOpacity="0.12"
                  x2="848"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
          <div
            className="css-yy66up font-['Helvetica_Neue:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#212121] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[22px]">{`This report provides a comprehensive overview of the press release's impact across news articles and social media platforms. Let me know if you need further analysis or additional metrics!`}</p>
          </div>
        </div>
      </div>
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
        <g clipPath="url(#clip0_57_10705)" id="Icon">
          <mask
            height="20"
            id="mask0_57_10705"
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
          <g mask="url(#mask0_57_10705)">
            <path
              d={svgPaths.pe44eb00}
              fill="var(--fill-0, #7A7A7A)"
              id="thumb_up"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_10705">
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
        <g clipPath="url(#clip0_57_10701)" id="Icon">
          <mask
            height="20"
            id="mask0_57_10701"
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
          <g mask="url(#mask0_57_10701)">
            <path
              d={svgPaths.p303b0c80}
              fill="var(--fill-0, #7A7A7A)"
              id="thumb_down"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_10701">
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

function Icon2() {
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
        <g clipPath="url(#clip0_57_10697)" id="Icon">
          <mask
            height="20"
            id="mask0_57_10697"
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
          <g mask="url(#mask0_57_10697)">
            <path
              d={svgPaths.p19142200}
              fill="var(--fill-0, #7A7A7A)"
              id="content_copy"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_10697">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative rounded-sm shrink-0 size-6" data-name="Copy">
      <Icon2 />
    </div>
  );
}

function Icon3() {
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
        <g id="Icon">
          <mask
            height="20"
            id="mask0_57_10689"
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
          <g mask="url(#mask0_57_10689)">
            <path
              d={svgPaths.p2c8f3180}
              fill="var(--fill-0, #7A7A7A)"
              id="autorenew"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Refresh() {
  return (
    <div className="relative rounded-sm shrink-0 size-6" data-name="Refresh">
      <Icon3 />
    </div>
  );
}

function Icon4() {
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
        <g id="Icon">
          <mask
            height="20"
            id="mask0_57_10693"
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
          <g mask="url(#mask0_57_10693)">
            <path
              d={svgPaths.p31f9b900}
              fill="var(--fill-0, #7A7A7A)"
              id="share"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Share() {
  return (
    <div className="relative rounded-sm shrink-0 size-6" data-name="Share">
      <Icon4 />
    </div>
  );
}

function Frame1071() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <Like />
        <Dislike />
        <Copy />
        <Refresh />
        <Share />
      </div>
    </div>
  );
}

function Reactions() {
  return (
    <div className="relative rounded shrink-0" data-name="Reactions">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <Frame1071 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
        <Container4 />
        <Container5 />
        <Reactions />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start p-0 relative w-full">
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[60px] items-start justify-start p-0 relative w-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start p-0 relative w-full">
        <Container8 />
      </div>
    </div>
  );
}

function FollowUpsHeader() {
  return (
    <div className="relative shrink-0" data-name="Follow-ups Header">
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
        <FollowUpsHeader />
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
            d={svgPaths.p27030000}
            fill="var(--fill-0, #B627A1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-5" data-name="_Avatar">
      <div className="box-border content-stretch flex flex-row gap-[5.556px] items-center justify-start p-0 relative size-5">
        <AiOutput />
      </div>
    </div>
  );
}

function Icon5() {
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

function Label() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            What are the key themes and sentiments emerging from consumer
            discussions about the Nintendo Switch 2?
          </p>
        </div>
        <Icon5 />
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
          <Avatar />
          <Label />
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
            d={svgPaths.p27030000}
            fill="var(--fill-0, #B627A1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-5" data-name="_Avatar">
      <div className="box-border content-stretch flex flex-row gap-[5.556px] items-center justify-start p-0 relative size-5">
        <AiOutput1 />
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

function Label1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            Are there any recent articles or news stories that highlight
            consumer expectations or concerns regarding the Nintendo Switch 2?
          </p>
        </div>
        <Icon6 />
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
          <Avatar1 />
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function AiOutput2() {
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
            d={svgPaths.p27030000}
            fill="var(--fill-0, #B627A1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative shrink-0 size-5" data-name="_Avatar">
      <div className="box-border content-stretch flex flex-row gap-[5.556px] items-center justify-start p-0 relative size-5">
        <AiOutput2 />
      </div>
    </div>
  );
}

function Icon7() {
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

function Label2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block mb-0 overflow-inherit">
            Can you analyze social media metrics related to the Nintendo Switch
            2 discussions over the last two months?
          </p>
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block mb-0 overflow-inherit">
            &nbsp;
          </p>
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block overflow-inherit">
            &nbsp;
          </p>
        </div>
        <Icon7 />
      </div>
    </div>
  );
}

function Wafer2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Wafer">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Avatar2 />
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function AiOutput3() {
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
            d={svgPaths.p27030000}
            fill="var(--fill-0, #B627A1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative shrink-0 size-5" data-name="_Avatar">
      <div className="box-border content-stretch flex flex-row gap-[5.556px] items-center justify-start p-0 relative size-5">
        <AiOutput3 />
      </div>
    </div>
  );
}

function Icon8() {
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

function Label3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            What engagement metrics can we gather to assess public interest in
            Nintendo Switch 2 rumors on various media channels?
          </p>
        </div>
        <Icon8 />
      </div>
    </div>
  );
}

function Wafer3() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Wafer">
      <div className="absolute border-[0px_0px_1px] border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Avatar3 />
          <Label3 />
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
            d={svgPaths.p27030000}
            fill="var(--fill-0, #B627A1)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative shrink-0 size-5" data-name="_Avatar">
      <div className="box-border content-stretch flex flex-row gap-[5.556px] items-center justify-start p-0 relative size-5">
        <AiOutput4 />
      </div>
    </div>
  );
}

function Icon9() {
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

function Label4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <div className="basis-0 css-jdk5g7 font-['Helvetica_Neue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212121] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
            How have consumer perceptions changed regarding Nintendo as a brand
            in light of these rumors?
          </p>
        </div>
        <Icon9 />
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
          <Avatar4 />
          <Label4 />
        </div>
      </div>
    </div>
  );
}

function FollowUpsContent() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Follow-ups Content"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <Wafer />
        <Wafer1 />
        <Wafer2 />
        <Wafer3 />
        <Wafer4 />
      </div>
      <div className="absolute border border-[rgba(33,33,33,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function FollowUpsContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Follow-ups Container">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Subtitle />
        <FollowUpsContent />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start p-0 relative w-full">
        <Container9 />
        <FollowUpsContainer />
      </div>
    </div>
  );
}

export default function FullPrReport() {
  return (
    <div className="relative size-full" data-name="Full PR Report">
      <div className="box-border content-stretch flex flex-row gap-[60px] items-start justify-start p-0 relative size-full">
        <Container10 />
      </div>
    </div>
  );
}