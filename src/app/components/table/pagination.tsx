import { HeaderCell, HeaderRow } from '@/app/components/table/table';
import React from 'react';

type PaginationPropsData = {
  page: number;
  setPage: (page: number) => void;
  totalResults: number;
  resultsPerPage: number;
};

export default function Pagination(props: PaginationPropsData) {
  const pageCount = Array.from(
    {
      length:
        props.totalResults % props.resultsPerPage === 0
          ? props.totalResults / props.resultsPerPage
          : Math.trunc(props.totalResults / props.resultsPerPage) + 1,
    },
    (v, i) => i + 1
  );
  const skipLength: number = 1;

  function handlePage(page: number) {
    props.setPage(page);
  }
  return (
    <HeaderRow
      columns={1}
      stateful={false}
      className='flex items-center w-full justify-between md:justify-start'>
      {props.page != 1 ? (
        <>
          <HeaderCell columns={1} stateful={true} page={1} setPage={handlePage}>
            First
          </HeaderCell>
          <HeaderCell
            columns={1}
            stateful={true}
            page={props.page - 1}
            setPage={handlePage}>
            Prev
          </HeaderCell>
        </>
      ) : (
        <>
          <HeaderCell columns={1} stateful={false} className='900'>
            First
          </HeaderCell>
          <HeaderCell columns={1} stateful={false} className='900'>
            Prev
          </HeaderCell>
        </>
      )}
      {pageCount
        .slice(Math.max(props.page - skipLength - 1, 0), props.page - 1)
        .map((v, i) => (
          <HeaderCell
            key={i}
            columns={1}
            stateful={true}
            page={v}
            setPage={handlePage}>
            {v}
          </HeaderCell>
        ))}
      <HeaderCell
        columns={1}
        stateful={false}
        className='font-bold text-primary-600'>
        {props.page}
      </HeaderCell>
      {pageCount.slice(props.page, props.page + skipLength).map((v, i) => (
        <HeaderCell
          key={i}
          columns={1}
          stateful={true}
          page={v}
          setPage={handlePage}>
          {v}
        </HeaderCell>
      ))}
      {props.page < pageCount.length ? (
        <>
          <HeaderCell
            columns={1}
            stateful={true}
            page={props.page + 1}
            setPage={handlePage}>
            Next
          </HeaderCell>
          <HeaderCell
            columns={1}
            stateful={true}
            page={pageCount.length}
            setPage={handlePage}>
            Last
          </HeaderCell>
        </>
      ) : (
        <>
          <HeaderCell columns={1} stateful={false} className='900'>
            Next
          </HeaderCell>
          <HeaderCell columns={1} stateful={false} className='900'>
            Last
          </HeaderCell>
        </>
      )}
    </HeaderRow>
  );
}
