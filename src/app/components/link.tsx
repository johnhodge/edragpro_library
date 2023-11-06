import { LinkData } from '@/types';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function GlobalLink(props: LinkData) {
  const defaultclassName = 'text-secondary-600 no-underline md:hover:underline';
  const className = twMerge(defaultclassName, props.className);
  if (props.type != 'external') {
    return (
      <Link
        href={!props.pageAnchor ? props.href : `#${props.href}`}
        title={props.title}
        aria-label={props.title}
        className={className}
        target='_self'>
        {props.children}
      </Link>
    );
  } else {
    return (
      <Link
        href={!props.pageAnchor ? props.href : `#${props.href}`}
        title={props.title}
        className={className}
        target='_blank'
        referrerPolicy='no-referrer'
        rel='noopener noreferrer'>
        {props.children}
      </Link>
    );
  }
}
