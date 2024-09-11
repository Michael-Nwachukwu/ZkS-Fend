import * as React from "react";

function Solana(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" {...props}>
      <circle cx={7.5} cy={7.5} r={7} fill="#000" />
      <path
        d="M11.54 9.594l-1.347 1.437a.314.314 0 01-.23.099h-6.39a.157.157 0 01-.143-.094.155.155 0 01.03-.168l1.348-1.437a.313.313 0 01.228-.099h6.39a.157.157 0 01.155.182.155.155 0 01-.04.08zm-1.347-2.893a.313.313 0 00-.23-.1h-6.39a.157.157 0 00-.143.094.155.155 0 00.03.168L4.807 8.3a.313.313 0 00.228.1h6.39a.157.157 0 00.155-.183.155.155 0 00-.04-.08l-1.348-1.436zm-6.62-1.033h6.39a.315.315 0 00.23-.098l1.348-1.437a.155.155 0 00-.115-.262h-6.39a.315.315 0 00-.228.099L3.46 5.407a.155.155 0 00.114.261z"
        fill="url(#prefix__paint0_linear_72_16746)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_72_16746"
          x1={4.106}
          y1={11.303}
          x2={10.762}
          y2={3.754}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.08} stopColor="#9945FF" />
          <stop offset={0.3} stopColor="#8752F3" />
          <stop offset={0.5} stopColor="#5497D5" />
          <stop offset={0.6} stopColor="#43B4CA" />
          <stop offset={0.72} stopColor="#28E0B9" />
          <stop offset={0.97} stopColor="#19FB9B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoSolana = React.memo(Solana);
export default MemoSolana;
