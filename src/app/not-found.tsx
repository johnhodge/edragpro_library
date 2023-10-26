'use client';
import GlobalLink from './components/link';
import Loading from './loading';
import React from 'react';
import GlobalSystemPage from './templates/system-page';

export default function NotFound() {
  return (
    <GlobalSystemPage fallback={<Loading />} header='404 page not found'>
      <GlobalLink href='/' title='Return home' type='internal'>
        Return home
      </GlobalLink>
    </GlobalSystemPage>
  );
}
