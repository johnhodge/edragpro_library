import React from 'react';
import { GlobalCalloutData } from '../../types';
export default function GlobalCallout(props: GlobalCalloutData) {
  const colors = {
    alert:
      'border-orange-300 bg-orange-50 prose-orange text-orange-600 prose-strong:text-orange-600 prose-headings:text-orange-600',
    note: 'border-sky-300 bg-sky-50 prose-sky text-sky-600 prose-strong:text-sky-600 prose-headings:text-sky-600',
    success:
      'border-emerald-300 bg-emerald-50 prose-emerald text-emerald-600 prose-strong:text-emerald-600 prose-headings:text-emerald-600',
  };
  const icons = {
    alert: '⚠️',
    note: 'ℹ️',
    success: '✅',
  };
  return (
    <aside
      className={`border rounded-lg p-4 mb-4 flex gap-2 ${colors[props.type]}`}>
      <span className='font-emoji'>{icons[props.type]}</span>
      <span id='callout' className='last:mb-0 prose-p:mt-0'>
        {props.children}
      </span>
    </aside>
  );
}
