
import { SVGProps } from "react";
export const Edit = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150%"
        height="150%"
        fill="none"
        viewBox="0 0 50 30"
        {...props}
    >
        <path
            stroke="#385C85"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 3.121H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            opacity={0.6}
        />
        <path
            stroke="#385C85"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.5 1.621a2.121 2.121 0 1 1 3 3l-9.5 9.5-4 1 1-4 9.5-9.5Z"
        />
    </svg>
);
