import { Metadata } from 'next';
import React from 'react';
import { MetadataData } from '../types';
import GlobalButton from './components/button';
import GlobalStandardPage from './templates/standard-page';
import Loading from './loading';
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
const eventType = ['other', 'link'];
const themes = ['primary', 'secondary', 'gray'];
const icons = ['code', 'check', 'login', undefined];
export default function Page() {
  return (
    <GlobalStandardPage
      header='EdgarPro Brand Standards'
      fallback={<Loading />}>
      <section className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <GlobalButton
            theme='primary'
            eventType='other'
            title='hey'
            icon='check'>
            Event primary
          </GlobalButton>
          <GlobalButton
            theme='primary'
            eventType='other'
            title='hey'
            icon='check'
            ghost>
            Event primary
          </GlobalButton>
        </div>
        <div className='flex gap-4'>
          <GlobalButton
            theme='secondary'
            eventType='other'
            title='hey'
            icon='check'>
            Event secondary
          </GlobalButton>
          <GlobalButton
            theme='secondary'
            eventType='other'
            title='hey'
            icon='check'
            ghost>
            Event secondary
          </GlobalButton>
        </div>
        <div className='flex gap-4'>
          <GlobalButton theme='gray' eventType='other' title='hey' icon='check'>
            Event gray
          </GlobalButton>
          <GlobalButton
            theme='gray'
            eventType='other'
            title='hey'
            icon='check'
            ghost>
            Event gray
          </GlobalButton>
        </div>
        <div className='flex gap-4'>
          <GlobalButton
            theme='gray'
            eventType='link'
            title='hey'
            icon='check'
            href='/'
            type='external'>
            Link gray
          </GlobalButton>
          <GlobalButton
            theme='gray'
            eventType='link'
            title='hey'
            icon='check'
            href='/'
            type='external'
            ghost>
            Link gray
          </GlobalButton>
        </div>
      </section>
    </GlobalStandardPage>
  );
}
