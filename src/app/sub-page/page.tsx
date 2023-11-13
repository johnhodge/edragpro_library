import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Hello world</h1>{' '}
      <p>
        This page has a subpage{' '}
        <Link href='/sub-page/sub-sub' title='Sub-sub Page' type='internal'>
          here
        </Link>
      </p>
    </>
  );
}
