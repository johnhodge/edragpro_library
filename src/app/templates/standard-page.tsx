import { ReactNode, Suspense } from 'react';

type GlobalPage = {
  children: ReactNode;
  header: string;
  fallback: ReactNode;
};

export default function GlobalPage(props: GlobalPage) {
  return (
    <Suspense fallback={props.fallback}>
      <div className='w-full m-auto min-h-[calc(100dvh-154px)] flex flex-col items-start'>
        {!props.header ? '' : <h2 className='mt-0'>{props.header}</h2>}
        <div className='w-full'>{props.children}</div>
      </div>
    </Suspense>
  );
}
