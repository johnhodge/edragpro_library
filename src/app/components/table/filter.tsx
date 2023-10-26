import { ChangeEvent } from 'react';

type FilterPropData = {
  search: string;
  setSearch: (search: string) => void;
  resultCount: number;
  setResultCount: (resultCount: number) => void;
  setPage: (page: number) => void;
  header?: boolean;
};

export default function Filter(props: FilterPropData) {
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    props.setPage(1);
    props.setSearch(e.target.value);
  }
  function handleResultCount(e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    props.setPage(1);
    props.setResultCount(Number(e.target.value));
  }
  return (
    <div className='flex items-start flex-col gap-4 py-4 md:flex-row md:items-center'>
      <div className='flex gap-4'>
        <input
          placeholder='Search'
          value={props.search}
          onChange={handleSearch}
        />
        <select defaultValue={props.resultCount} onChange={handleResultCount}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
      </div>
      {props.header ? (
        <h2 className='m-0'>
          Search results for {props.search ? props.search : '...'}
        </h2>
      ) : (
        ''
      )}
    </div>
  );
}
