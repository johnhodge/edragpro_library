import Image from 'next/image';
import React from 'react';
import GlobalLink from './link';

export default function Brand() {
  const brandName = 'EdgarPro';
  return (
    <div className='relative h-7 w-24'>
      <GlobalLink
        href='/'
        title={`Go to the ${brandName} homepage`}
        type='internal'>
        <Image src='/logo.svg' alt='EdgarPro Logo' fill />
      </GlobalLink>
    </div>
  );
}
