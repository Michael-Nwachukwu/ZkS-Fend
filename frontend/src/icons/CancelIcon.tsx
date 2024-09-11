import * as React from "react";

function CancelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <rect width={24} height={24} rx={3} fill="#25252D" />
      <path
        d="M12 18.271a6.276 6.276 0 01-6.27-6.27c0-3.46 2.81-6.272 6.27-6.272 3.46 0 6.27 2.812 6.27 6.271 0 3.46-2.81 6.271-6.27 6.271zm0-11.667A5.402 5.402 0 006.604 12 5.402 5.402 0 0012 17.396 5.402 5.402 0 0017.396 12 5.402 5.402 0 0012 6.604z"
        fill="#E2320F"
      />
      <path
        d="M10.35 14.088a.433.433 0 01-.31-.128.44.44 0 010-.618l3.302-3.302a.44.44 0 01.618 0c.17.17.17.45 0 .618l-3.302 3.302a.423.423 0 01-.309.128z"
        fill="#E2320F"
      />
      <path
        d="M13.65 14.088a.433.433 0 01-.308-.128l-3.302-3.302a.44.44 0 010-.618.44.44 0 01.618 0l3.302 3.302c.17.169.17.449 0 .618a.433.433 0 01-.31.128z"
        fill="#E2320F"
      />
    </svg>
  );
}

const MemoCancelIcon = React.memo(CancelIcon);
export default MemoCancelIcon;
