import { Session } from 'next-auth';
import React, { ReactNode } from 'react';
import { HomepageSectionEntryData } from '../../types';
type MobileAsidePropData = {
    session: Session | null;
    children: ReactNode;
    open: boolean;
    setOpen: (newOpen: boolean) => void;
    navItems: HomepageSectionEntryData[];
    showLogin: boolean | null;
};
export default function MobileAside(props: MobileAsidePropData): React.JSX.Element;
export {};
