import { Metadata } from 'next';
import React from 'react';
import { MetadataData } from '../types';
import GlobalButton from './components/button';
import GlobalCallout from './components/callout';
import SetMetadata from './utils/meta';

export async function generateMetadata(): Promise<Metadata> {
  const metadata: MetadataData = {
    title: 'Home',
    description: 'Navigate the EDGAR database like a pro.',
    canonical: '/',
    keywords: [
      'edgar',
      'sec',
      'financial statements',
      'financial reports',
      'financial filings',
    ],
  };
  return SetMetadata(metadata);
}
export default function Page() {
  return (
    <main className=''>
      <GlobalButton theme='primary' eventType='other' title='hey' icon='check'>
        Yo
      </GlobalButton>
      <GlobalCallout type='alert'>
        <h3 className='font-black text-xl pb-2 mt-0'>Notice</h3>
        <p>This is an early stage pre-release version of EdgarPro.</p>
      </GlobalCallout>
    </main>
  );
}
