import { ReactNode, Suspense } from 'react';

type SystemPagePropData = {
  children?: ReactNode;
  header?: string;
  image?: { src: string; description: string };
  fallback: ReactNode;
};

export default function SystemPage(props: SystemPagePropData) {
  return (
    <Suspense fallback={props.fallback}>
      <div className='w-96 max-w-full m-auto min-h-[calc(100dvh-154px)] flex flex-col justify-center items-start'>
        {!props.header ? '' : <h2 className='mt-0'>{props.header}</h2>}
        <div className='w-full'>{props.children}</div>
      </div>
    </Suspense>
  );
}
