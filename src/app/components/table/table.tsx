import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TablePropsData = {
  children: ReactNode;
  columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  title?: string;
  className?: string;
} & (
  | { stateful: true; page: number; setPage: (page: number) => void }
  | { stateful: false; page?: undefined; setPage?: undefined }
);
const columns = {
  1: { colSpan: 'col-span-1', gridCols: 'grid-cols-1' },
  2: { colSpan: 'col-span-2', gridCols: 'grid-cols-2' },
  3: { colSpan: 'col-span-3', gridCols: 'grid-cols-3' },
  4: { colSpan: 'col-span-4', gridCols: 'grid-cols-4' },
  5: { colSpan: 'col-span-5', gridCols: 'grid-cols-5' },
  6: { colSpan: 'col-span-6', gridCols: 'grid-cols-6' },
  7: { colSpan: 'col-span-7', gridCols: 'grid-cols-7' },
  8: { colSpan: 'col-span-8', gridCols: 'grid-cols-8' },
  9: { colSpan: 'col-span-9', gridCols: 'grid-cols-9' },
  10: { colSpan: 'col-span-10', gridCols: 'grid-cols-10' },
  11: { colSpan: 'col-span-11', gridCols: 'grid-cols-11' },
  12: { colSpan: 'col-span-12', gridCols: 'grid-cols-12' },
};

export default function Table(props: TablePropsData) {
  const defaultClassname = 'w-full text-sm h-full m-0';
  const classNames = twMerge(defaultClassname, props.className);
  return (
    <table title={props.title} className={classNames}>
      {props.children}
    </table>
  );
}

export function Body(props: TablePropsData) {
  const defaultClassname = 'block overflow-scroll';
  const classNames = twMerge(defaultClassname, props.className);
  return <tbody className={classNames}>{props.children}</tbody>;
}

export function BodyRow(props: TablePropsData) {
  const defaultClassname = `font-mono even:bg-gray-50 hover:bg-primary-50 px-2 grid ${
    columns[props.columns].gridCols
  }`;
  const classNames = twMerge(defaultClassname, props.className);
  return (
    <tr title={props.title} className={classNames}>
      {props.children}
    </tr>
  );
}

export function BodyCell(props: TablePropsData) {
  const defaultClassname = `overflow-scroll ${columns[props.columns].colSpan}`;
  const classNames = twMerge(defaultClassname, props.className);
  return (
    <td title={props.title} className={classNames}>
      {props.children}
    </td>
  );
}

export function Header(props: TablePropsData) {
  const defaultClassname = 'flex flex-col sticky top-0 gap-2 bg-gray-50 p-2';
  const classNames = twMerge(defaultClassname, props.className);
  return (
    <thead title={props.title} className={classNames}>
      {props.children}
    </thead>
  );
}

export function HeaderRow(props: TablePropsData) {
  const defaultClassname = `grid ${columns[props.columns].gridCols}`;
  const classNames = twMerge(defaultClassname, props.className);
  return (
    <tr title={props.title} className={classNames}>
      {props.children}
    </tr>
  );
}
export function HeaderCell(props: TablePropsData) {
  function handlePage(page: number) {
    if (props.stateful) {
      props.setPage(page);
    }
  }
  if (props.stateful) {
    const defaultClassname = 'text-secondary-600 hover:cursor-pointer';
    const classNames = twMerge(defaultClassname, props.className);
    return (
      <th
        title={props.title}
        className={classNames}
        onClick={() => handlePage(props.page)}>
        {props.children}
      </th>
    );
  } else {
    const defaultClassname = `${columns[props.columns].colSpan}`;
    const classNames = twMerge(defaultClassname, props.className);
    return (
      <th title={props.title} className={classNames}>
        {props.children}
      </th>
    );
  }
}
