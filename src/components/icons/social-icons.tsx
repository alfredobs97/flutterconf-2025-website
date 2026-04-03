import type { SVGProps } from 'react';

function IconBase(props: SVGProps<SVGSVGElement>) {
    return {
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
        'aria-hidden': true,
        focusable: false,
        ...props,
    };
}

export function Twitter(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...IconBase(props)}>
            <path d="M4 4l16 16" />
            <path d="M20 4L4 20" />
        </svg>
    );
}

export function Linkedin(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...IconBase(props)}>
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <path d="M8 10v7" />
            <path d="M8 7.5v.01" />
            <path d="M12 10v7" />
            <path d="M12 13c0-1.7 1.1-3 2.8-3 1.8 0 3.2 1.3 3.2 3.2V17" />
        </svg>
    );
}

export function Github(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...IconBase(props)}>
            <path d="M12 3a9 9 0 0 0-2.8 17.5c.4.1.6-.2.6-.5v-1.7c-2.3.5-2.8-1-2.8-1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .4-1.8 1-2.4-.1-.2-.4-1 .1-2.4 0 0 .7-.2 2.4.9a8 8 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.4.2 2.2.1 2.4.7.6 1 1.4 1 2.4 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.7v2.6c0 .3.2.6.6.5A9 9 0 0 0 12 3Z" />
        </svg>
    );
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...IconBase(props)}>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}