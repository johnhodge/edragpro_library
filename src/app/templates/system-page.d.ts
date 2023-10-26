import React, { ReactNode } from 'react';
type GlobalSystemPagePropData = {
    children?: ReactNode;
    header?: string;
    image?: {
        src: string;
        description: string;
    };
    fallback: ReactNode;
};
export default function GlobalSystemPage(props: GlobalSystemPagePropData): React.JSX.Element;
export {};
