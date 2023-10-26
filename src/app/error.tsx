'use client';
import GlobalLink from '@/app/components/link';
import Loading from '@/app/loading';
import SystemPage from '@/app/templates/system-page';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <SystemPage fallback={<Loading />} header='Something went wrong'>
      <p>
        <a
          className='text-secondary-600 no-underline hover:underline hover:cursor-pointer'
          onClick={() => reset()}>
          Reload page
        </a>
      </p>
      <GlobalLink href='/' title='Return home' type='internal'>
        Return home
      </GlobalLink>
    </SystemPage>
  );
}
