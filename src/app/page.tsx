import React from 'react';
import GlobalButton from './components/button';
import GlobalCallout from './components/callout';
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
