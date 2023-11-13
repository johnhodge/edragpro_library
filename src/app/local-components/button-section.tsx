'use client';
import React from 'react';
import { GlobalButton } from '../components';

export default function ButtonSection() {
  const eventType = ['onClick', 'link'];
  const themes = ['primary', 'secondary', 'gray'];
  const icons = ['code', 'check', 'login', undefined];
  function testEvent(message: string) {
    alert(message);
  }
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <GlobalButton
          theme='primary'
          event={() => testEvent('hey')}
          eventType='onClick'
          title='hey'
          icon='check'>
          Event primary
        </GlobalButton>
        <GlobalButton
          theme='primary'
          eventType='onClick'
          event={() => testEvent('hey')}
          title='hey'
          icon='check'
          ghost>
          Event primary
        </GlobalButton>
      </div>
      <div className='flex gap-4'>
        <GlobalButton
          theme='secondary'
          eventType='onClick'
          event={() => testEvent('hey')}
          title='hey'
          icon='check'>
          Event secondary
        </GlobalButton>
        <GlobalButton
          theme='secondary'
          eventType='onClick'
          event={() => testEvent('hey')}
          title='hey'
          icon='check'
          ghost>
          Event secondary
        </GlobalButton>
      </div>
      <div className='flex gap-4'>
        <GlobalButton
          theme='gray'
          eventType='onClick'
          event={() => testEvent('hey')}
          title='hey'
          icon='check'>
          Event gray
        </GlobalButton>
        <GlobalButton
          theme='gray'
          eventType='onClick'
          event={() => testEvent('hey')}
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
          href='https://app.edgarpro.co'
          type='external'>
          Link gray
        </GlobalButton>
        <GlobalButton
          theme='gray'
          eventType='link'
          title='hey'
          icon='check'
          href='https://app.edgarpro.co'
          type='external'
          ghost>
          External Link
        </GlobalButton>
        <GlobalButton
          theme='gray'
          eventType='link'
          title='hey'
          icon='check'
          href='/#test-section'
          type='internal'
          pageAnchor
          ghost>
          Page Anchor
        </GlobalButton>
      </div>
    </section>
  );
}
