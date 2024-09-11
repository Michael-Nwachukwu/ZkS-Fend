import * as React from "react";

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M7.583 2.333a.583.583 0 10-1.166 0v4.084H2.333a.583.583 0 100 1.166h4.084v4.084a.583.583 0 001.166 0V7.583h4.084a.583.583 0 000-1.166H7.583V2.333z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoPlusIcon = React.memo(PlusIcon);
export default MemoPlusIcon;
