import { Session } from 'next-auth';
import React, { ReactNode } from 'react';
import { HomepageSectionEntryData } from '../../types';
type NavPropData = {
    location: 'footer';
} | {
    location: 'header';
    session: Session | null;
    navItems: HomepageSectionEntryData[] | null;
    showHome?: boolean;
    showLogin?: boolean;
    children: ReactNode | null;
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
