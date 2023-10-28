import { Session } from 'next-auth';
import React, { ReactNode } from 'react';
import { HomepageSectionEntryData } from '../../types';
type AsideNavPropData = {
    session: Session | null;
    children: ReactNode;
    open: boolean;
    setOpen: (newOpen: boolean) => void;
    navItems: HomepageSectionEntryData[] | null;
    showHome: boolean | null;
    showLogin: boolean | null;
};
export default function AsideNav(props: AsideNavPropData): React.JSX.Element;
export {};
