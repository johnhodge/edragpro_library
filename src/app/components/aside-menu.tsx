'use client';
import { Session } from 'next-auth';
import React, { ReactNode } from 'react';
import { HomepageSectionEntryData } from '../../types';
import GlobalButton from './button';
import { Close } from './icons';
import GlobalLink from './link';
import { NavItems } from './nav';

type MobileAsidePropData = {
  session: Session | null;
  children: ReactNode;
  open: boolean;
  setOpen: (newOpen: boolean) => void;
  navItems: HomepageSectionEntryData[] | null;
  showLogin: boolean | null;
};
export default function MobileAside(props: MobileAsidePropData) {
  function handleClick() {
    if (!props.open) {
      props.setOpen(true);
    } else {
      props.setOpen(false);
    }
  }

  return (
    <aside
      className={`p-4 flex flex-col gap-8 fixed z-20 inset-0 md:inset-y-0 md:right-0 md:left-1/2 xl:left-3/4 md:shadow-lg bg-white transition-transform ease-in-out duration-300 ${
        !props.open ? 'translate-x-full' : ''
      }`}>
      <div className='flex gap-4 justify-between flex-row-reverse'>
        <span onClick={handleClick} className='hover:cursor-pointer '>
          <Close theme='gray' />
        </span>
        <div className='flex gap-2 items-center'>
          {props.showLogin ? (
            <GlobalButton
              eventType={!props.session ? 'login' : 'logout'}
              id={!props.session ? 'login' : 'logout'}
              title={!props.session ? 'Log in' : 'Log out'}
              theme='gray'
              icon='login'
              ghost>
              {!props.session ? 'Log in' : 'Log out'}
            </GlobalButton>
          ) : null}
          <GlobalLink
            href='https://www.edgarpro.co'
            title='Return to www.edgarpro.co'
            type='internal'>
            edgarpro.co
          </GlobalLink>
        </div>
      </div>
      <div className='max-h-[30%] md:max-h-full flex flex-col gap-4 overflow-y-scroll overscroll-y-none'>
        {props.children}
      </div>
      <hr className='md:hidden' />
      <nav className='max-h-[70%] overflow-y-scroll overscroll-y-none'>
        {!props.navItems ? (
          ''
        ) : (
          <ul className='md:hidden flex flex-col gap-4 not-prose'>
            <NavItems
              navItems={props.navItems}
              setOpen={handleClick}
              open={props.open}
              mobile={true}
            />
          </ul>
        )}
      </nav>
    </aside>
  );
}
