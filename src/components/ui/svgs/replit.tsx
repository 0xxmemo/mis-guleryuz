import type { SVGProps } from "react";

const Replit = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 20 24" fill="none">
    <path
      d="M0 1.5C0 0.67 0.67 0 1.5 0H8.5C9.33 0 10 0.67 10 1.5V8H1.5C0.67 8 0 7.33 0 6.5V1.5Z"
      fill="#F26207"
    />
    <path
      d="M10 8H18.5C19.33 8 20 8.67 20 9.5V14.5C20 15.33 19.33 16 18.5 16H10V8Z"
      fill="#F26207"
    />
    <path
      d="M0 17.5C0 16.67 0.67 16 1.5 16H10V22.5C10 23.33 9.33 24 8.5 24H1.5C0.67 24 0 23.33 0 22.5V17.5Z"
      fill="#F26207"
    />
  </svg>
);

export { Replit };
