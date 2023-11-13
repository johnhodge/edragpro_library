import { Metadata } from 'next';
import { MetadataData } from '../types';
import Loading from './loading';
import ButtonSection from './local-components/button-section';
import GlobalStandardPage from './templates/standard-page';
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
    <GlobalStandardPage
      header='EdgarPro Brand Standards'
      fallback={<Loading />}>
      <ButtonSection />
      <div id='test-section'>
        <h2>Hey this is a test section</h2>
      </div>
    </GlobalStandardPage>
  );
}
