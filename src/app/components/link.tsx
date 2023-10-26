import Link from 'next/link';
import React from 'react';
import { LinkData } from '../../types';

export default function GlobalLink(props: LinkData) {
  const className = 'text-secondary-600 no-underline hover:underline';
  if (props.type != 'external') {
    return (
      <Link
        href={props.href}
        title={props.title}
        aria-label={props.title}
        className={props.className ? props.className : className}
        target='_self'>
        {props.children}
      </Link>
    );
  } else {
    return (
      <Link
        href={props.href}
        title={props.title}
        className={props.className ? props.className : className}
        target='_blank'
        referrerPolicy='no-referrer'
        rel='noopener noreferrer'>
        {props.children}
      </Link>
    );
  }
}
