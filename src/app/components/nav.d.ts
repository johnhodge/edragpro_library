import { Session } from 'next-auth';
import React, { ReactNode } from 'react';
import { HomepageSectionEntryData } from '../../types';
type NavPropData = {
    session: Session | null;
    navItems: HomepageSectionEntryData[];
    children: ReactNode;
};
export default function GlobalNav(props: NavPropData): React.JSX.Element;
type NavItemsPropData = {
    navItems: HomepageSectionEntryData[];
    mobile?: boolean;
    open: boolean;
    setOpen: (newClick: boolean) => void;
};
export declare function NavItems(props: NavItemsPropData): React.JSX.Element;
export {};
