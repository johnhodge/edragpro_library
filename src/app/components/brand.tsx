import React from 'react';
import { Logo } from './icons';
import GlobalLink from './link';

export default function GlobalBrand() {
  const brandName = 'EdgarPro';
  return (
    <div className='relative h-7 w-24'>
      <GlobalLink
        href='/'
        title={`Go to the ${brandName} homepage`}
        type='internal'>
        <Logo />
      </GlobalLink>
    </div>
  );
}
