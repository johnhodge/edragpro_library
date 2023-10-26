import React from 'react';
import GlobalButton from './components/button';
export default function Page() {
  return (
    <main className=''>
      <GlobalButton theme='primary' eventType='other' title='hey' icon='check'>
        Yo
      </GlobalButton>
    </main>
  );
}
