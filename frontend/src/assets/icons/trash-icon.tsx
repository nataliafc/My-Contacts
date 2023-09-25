
import { SVGProps } from "react";
export const Trash = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={22}
        fill="none"
        {...props}
    >
        <g opacity={0.6}>
            <path fill="#BB3838" d="M1 5h18" />
            <path
                stroke="#BB3838"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h18"
            />
        </g>
        <path
            fill="#BB3838"
            fillRule="evenodd"
            d="M7.293 2.293A1 1 0 0 1 8 2h4a1 1 0 0 1 1 1v1h2V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1h2V3a1 1 0 0 1 .293-.707ZM18 6h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6Z"
            clipRule="evenodd"
        />
    </svg>
);
