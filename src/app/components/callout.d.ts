import React, { ReactNode } from 'react';
type GlobalCalloutData = {
    children: ReactNode;
    type: 'alert' | 'note' | 'success';
};
export default function GlobalCallout(props: GlobalCalloutData): React.JSX.Element;
export {};
