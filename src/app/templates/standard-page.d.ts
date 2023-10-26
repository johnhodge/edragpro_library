import React, { ReactNode } from 'react';
type GlobalStandardPagePropData = {
    children: ReactNode;
    header: string;
    fallback: ReactNode;
};
export default function GlobalStandardPage(props: GlobalStandardPagePropData): React.JSX.Element;
export {};
