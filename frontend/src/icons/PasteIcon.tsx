import * as React from "react";

function PasteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 15" fill="none" {...props}>
      <path
        d="M8.75 13.771h-3.5c-3.167 0-4.52-1.353-4.52-4.52v-3.5c0-3.168 1.353-4.522 4.52-4.522h2.917a.44.44 0 01.437.438.44.44 0 01-.437.437H5.25c-2.69 0-3.646.957-3.646 3.646v3.5c0 2.69.957 3.646 3.646 3.646h3.5c2.69 0 3.646-.957 3.646-3.646V6.334a.44.44 0 01.437-.438.44.44 0 01.438.438V9.25c0 3.168-1.353 4.521-4.52 4.521z"
        fill="#fff"
      />
      <path
        d="M12.833 6.771H10.5c-1.995 0-2.77-.776-2.77-2.77V1.666c0-.175.104-.338.268-.402.163-.07.35-.03.478.093l4.667 4.667a.44.44 0 01-.31.746zM8.604 2.723V4c0 1.505.391 1.896 1.896 1.896h1.278L8.604 2.723zM7.583 8.52h-3.5a.44.44 0 01-.437-.437.44.44 0 01.437-.437h3.5a.44.44 0 01.438.437.44.44 0 01-.438.438zM6.417 10.854H4.083a.44.44 0 01-.437-.437.44.44 0 01.437-.438h2.334a.44.44 0 01.437.438.44.44 0 01-.437.438z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoPasteIcon = React.memo(PasteIcon);
export default MemoPasteIcon;
