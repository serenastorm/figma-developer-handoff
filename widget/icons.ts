import type { IconFill, PropFieldAction } from "./types";

const moveUpIcon = (fill: IconFill) => {
  return `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 19L16 13L22 19" stroke="${fill}" stroke-width="2"/>
    </svg>
    `;
};

const moveDownIcon = (fill: IconFill) => {
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13L16 19L22 13" stroke="${fill}" stroke-width="2"/>
</svg>
`;
};

const deleteIcon = (fill: IconFill) => {
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16H22" stroke="${fill}" stroke-width="2" stroke-linejoin="round"/>
</svg>
`;
};

export const addIconSrc = (fill: IconFill) => {
  return `
<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.5H14" stroke="${fill}" stroke-width="2" stroke-linejoin="round"/>
<path d="M8 2.5L8 14.5" stroke="${fill}" stroke-width="2" stroke-linejoin="round"/>
</svg>
`;
};

export const lightModeIconSrc = `
<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_13_2411)">
<path d="M14.6667 8.49996H15.3334M8.00008 1.83329V1.16663M8.00008 15.8333V15.1666M13.3334 13.8333L12.6667 13.1666M13.3334 3.16663L12.6667 3.83329M2.66675 13.8333L3.33341 13.1666M2.66675 3.16663L3.33341 3.83329M0.666748 8.49996H1.33341M8.00008 12.5C9.06095 12.5 10.0784 12.0785 10.8285 11.3284C11.5787 10.5782 12.0001 9.56083 12.0001 8.49996C12.0001 7.43909 11.5787 6.42168 10.8285 5.67153C10.0784 4.92139 9.06095 4.49996 8.00008 4.49996C6.93922 4.49996 5.9218 4.92139 5.17165 5.67153C4.42151 6.42168 4.00008 7.43909 4.00008 8.49996C4.00008 9.56083 4.42151 10.5782 5.17165 11.3284C5.9218 12.0785 6.93922 12.5 8.00008 12.5V12.5Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_13_2411">
<rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`;

export const darkModeIconSrc = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7.67133C1.99907 9.09942 2.48118 10.4858 3.36795 11.6052C4.25473 12.7246 5.49403 13.5112 6.88444 13.8371C8.27484 14.163 9.7346 14.0091 11.0264 13.4003C12.3183 12.7915 13.3662 11.7638 14 10.484C8.32867 10.484 5.516 7.67067 5.516 2C4.45989 2.52405 3.57114 3.33265 2.94992 4.33469C2.3287 5.33672 1.9997 6.49235 2 7.67133V7.67133Z" stroke="#575757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const checkMarkSrc = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4L6 12L3 9" stroke="#006ADC" stroke-width="2" stroke-linejoin="round"/>
</svg>
`;

export const getActionIconSrc: {
  [key in PropFieldAction]: (fill: IconFill) => string;
} = {
  moveUp: (fill: IconFill) => moveUpIcon(fill),
  moveDown: (fill: IconFill) => moveDownIcon(fill),
  delete: (fill: IconFill) => deleteIcon(fill),
};
