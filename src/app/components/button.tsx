'use client';
import { signIn, signOut } from 'next-auth/react';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { GlobalButtonData } from '../../types';
import { Check, Code, Login } from './icons';
import GlobalLink from './link';

export default function GlobalButton(props: GlobalButtonData) {
  const colors: Record<string, string> = {
    primary: `${
      !props.ghost ? 'bg-primary-100' : ''
    } border-primary-500 text-primary-600 md:hover:bg-primary-50 md:hover:no-underline`,
    secondary: `${
      !props.ghost ? 'bg-secondary-100' : ''
    } border-secondary-500 text-secondary-600 md:hover:bg-secondary-50 md:hover:no-underline`,
    gray: `${
      !props.ghost ? 'bg-gray-100' : ''
    } border-gray-500 text-gray-600 md:hover:bg-gray-50 md:hover:no-underline`,
  };
  const icon: Record<string, ReactNode> = {
    check: <Check theme={props.theme} />,
    code: <Code theme={props.theme} />,
    login: <Login theme={props.theme} />,
  };
  const defaultClassname =
    'not-prose flex flex-row items-center gap-2 w-fit px-4 py-2 rounded-lg border font-semibold';
  const classNames = twMerge(
    defaultClassname,
    colors[props.theme],
    props.className
  );
  if (props.eventType === 'link') {
    return (
      <GlobalLink
        className={classNames}
        href={props.href}
        title={props.title}
        type={props.type}>
        <span>{props.children}</span>
        {props.icon ? <span>{icon[props.icon]}</span> : ''}
      </GlobalLink>
    );
  } else if (props.eventType === 'login' || 'logout' || 'other') {
    return (
      <button
        className={classNames}
        onClick={
          props.eventType === 'login'
            ? () => signIn(props.id)
            : props.eventType === 'logout'
            ? () => signOut()
            : undefined
        }
        title={props.title}>
        {props.children}
        {props.icon ? <span>{icon[props.icon]}</span> : ''}
      </button>
    );
  } else {
    return null;
  }
}
