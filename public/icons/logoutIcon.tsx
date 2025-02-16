import * as React from "react";

interface IconProps {
  fill: string;
}

const logoutIcon: React.FC<IconProps> = ({ fill }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3405_8)">
      <path
        d="M17.7084 7.29167L16.2396 8.76042L18.9271 11.4583H8.33337V13.5417H18.9271L16.2396 16.2292L17.7084 17.7083L22.9167 12.5L17.7084 7.29167ZM4.16671 5.20833H12.5V3.125H4.16671C3.02087 3.125 2.08337 4.0625 2.08337 5.20833V19.7917C2.08337 20.9375 3.02087 21.875 4.16671 21.875H12.5V19.7917H4.16671V5.20833Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_3405_8">
        <rect width="25" height="25" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default logoutIcon;
