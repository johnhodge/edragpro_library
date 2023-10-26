'use client';
import GlobalLink from '@/app/components/link';
import Loading from '@/app/loading';
import SystemPage from '@/app/templates/system-page';

export default function NotFound() {
  return (
    <SystemPage fallback={<Loading />} header='404 page not found'>
      <GlobalLink href='/' title='Return home' type='internal'>
        Return home
      </GlobalLink>
    </SystemPage>
  );
}
