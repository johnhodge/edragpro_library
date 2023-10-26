import React, { ReactNode, Suspense } from 'react';

type GlobalStandardPagePropData = {
  children: ReactNode;
  header: string;
  fallback: ReactNode;
};

export default function GlobalStandardPage(props: GlobalStandardPagePropData) {
  return (
    <Suspense fallback={props.fallback}>
      <div className='w-full m-auto min-h-[calc(100dvh-154px)] flex flex-col items-start'>
        {!props.header ? '' : <h2 className='mt-0'>{props.header}</h2>}
        <div className='w-full'>{props.children}</div>
      </div>
    </Suspense>
  );
}
