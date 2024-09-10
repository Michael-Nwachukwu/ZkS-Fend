import * as React from "react";

function SaveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <rect width={24} height={24} rx={3} fill="#25252D" />
      <path
        d="M12 18.271a6.276 6.276 0 01-6.27-6.27c0-3.46 2.81-6.272 6.27-6.272 3.46 0 6.27 2.812 6.27 6.271 0 3.46-2.81 6.271-6.27 6.271zm0-11.667A5.402 5.402 0 006.604 12 5.402 5.402 0 0012 17.396 5.402 5.402 0 0017.396 12 5.402 5.402 0 0012 6.604z"
        fill="#1DE645"
      />
      <path
        d="M11.172 14.088a.437.437 0 01-.31-.128l-1.65-1.65a.44.44 0 010-.62.44.44 0 01.618 0l1.342 1.342 2.998-2.998a.44.44 0 01.618 0c.17.17.17.45 0 .618l-3.307 3.308a.437.437 0 01-.31.128z"
        fill="#1DE645"
      />
    </svg>
  );
}

const MemoSaveIcon = React.memo(SaveIcon);
export default MemoSaveIcon;
