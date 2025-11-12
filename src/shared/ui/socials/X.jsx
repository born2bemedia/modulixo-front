import Link from "next/link";
import React from "react";

const X = () => {
  return (
    <Link href="https://x.com/modulixocom" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_20_81)">
          <mask
            id="mask0_20_81"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="25"
          >
            <path d="M0 0.5H24V24.5H0V0.5Z" fill="white" />
          </mask>
          <g mask="url(#mask0_20_81)">
            <path
              d="M18.9 1.62457H22.5806L14.5406 10.8371L24 23.3754H16.5943L10.7897 15.7726L4.15543 23.3754H0.471429L9.07029 13.5183L0 1.62629H7.59429L12.8331 8.57429L18.9 1.62457ZM17.6057 21.1674H19.6457L6.48 3.71772H4.29257L17.6057 21.1674Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_20_81">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default X;
