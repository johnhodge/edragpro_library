import { Metadata } from 'next';
import React from 'react';
import { MetadataData } from '../types';
import GlobalButton from './components/button';
import GlobalStandardPage from './templates/standard-page';
import Loading from './loading';
import SetMetadata from './utils/meta';
import ButtonSection from './local-components/button-section';

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
    <GlobalStandardPage
      header='EdgarPro Brand Standards'
      fallback={<Loading />}>
      <ButtonSection />
    </GlobalStandardPage>
  );
}
