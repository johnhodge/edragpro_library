'use client';

import { Session } from 'next-auth';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useState } from 'react';
import { HomepageSectionEntryData } from '../../types';
import MobileAside from './aside-menu';
import GlobalBrand from './brand';
import { Menu } from './icons';
import GlobalLink from './link';

type NavPropData = {
  session: Session | null;
  navItems: HomepageSectionEntryData[];
  children: ReactNode;
};
export default function GlobalNav(props: NavPropData) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  props.session;
  return (
    <>
      <div className='sticky top-0 p-4 bg-gray-50 border-b border-gray-500 flex justify-between items-center z-10'>
        <GlobalBrand />
        <nav className='flex gap-4 items-center'>
          {!props.session ? (
            ''
          ) : (
            <ul className='max-md:hidden flex flex-row gap-4 not-prose'>
              <NavItems
                navItems={props.navItems}
                setOpen={handleClick}
                open={open}
              />
            </ul>
          )}
          <span onClick={handleClick} className='hover:cursor-pointer'>
            <Menu theme='gray' />
          </span>
        </nav>
      </div>
      <MobileAside
        open={open}
        setOpen={handleClick}
        navItems={props.navItems}
        session={props.session}
        showLogin>
        {props.children}
      </MobileAside>
    </>
  );
}

type NavItemsPropData = {
  navItems: HomepageSectionEntryData[];
  mobile?: boolean;
  open: boolean;
  setOpen: (newClick: boolean) => void;
};

export function NavItems(props: NavItemsPropData) {
  function handleClick() {
    if (!open) {
      props.setOpen(true);
    } else {
      props.setOpen(false);
    }
  }

  const pathName = usePathname();
  if (pathName === '/contact') {
    return null;
  } else {
    return (
      <>
        {props.navItems.map((item) =>
          !props.mobile ? (
            <li
              key={`${item.name.toLowerCase().replaceAll(' ', '-')}_${
                item.sys.id
              }`}>
              <GlobalLink
                href={`/${item.name.toLowerCase().replaceAll(' ', '-')}`}
                title={item.name}
                type='internal'
                className='font-semibold'>
                {item.name}
              </GlobalLink>
            </li>
          ) : (
            <li
              key={`${item.name.toLowerCase().replaceAll(' ', '-')}_${
                item.sys.id
              }`}
              onClick={handleClick}>
              <GlobalLink
                href={`/${item.name.toLowerCase().replaceAll(' ', '-')}`}
                title={item.name}
                type='internal'
                className='font-semibold'>
                {item.name}
              </GlobalLink>
            </li>
          )
        )}
      </>
    );
  }
}
