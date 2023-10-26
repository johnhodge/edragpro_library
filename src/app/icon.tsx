import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='https://www.w3.org/2000/svg'>
        <rect width='32' height='32' rx='16' fill='white' />
        <g clip-path='url(#clip0_12_13)'>
          <path
            d='M4 23.8565V8.14351H15.3539V11.5807H8.27693V14.2814H14.7693V17.7186H8.27693V20.4193H15.3542L15.3539 23.8565L4 23.8565Z'
            fill='#EA580C'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.3539 8.14351V11.5807V23.8565L19.6309 23.8565V19.1917H22.0001C23.2 19.1917 24.2488 18.9692 25.1463 18.5242C26.0488 18.0792 26.7487 17.4449 27.2462 16.6214C27.7487 15.798 28 14.8236 28 13.6983C28 12.5832 27.7565 11.6088 27.2693 10.7751C26.7821 9.9414 26.1001 9.29436 25.2232 8.83402C24.3462 8.37368 23.3231 8.14351 22.1539 8.14351H15.3539ZM22.423 15.6164C22.0692 15.7903 21.6411 15.8772 21.1385 15.8772H19.6309V11.55H21.1385C21.6411 11.55 22.0692 11.637 22.423 11.8109C22.7821 11.9797 23.0565 12.2252 23.2462 12.5474C23.4411 12.8646 23.5384 13.2482 23.5384 13.6983C23.5384 14.1433 23.4411 14.5295 23.2462 14.8568C23.0565 15.1842 22.7821 15.4373 22.423 15.6164Z'
            fill='#374151'
          />
        </g>
        <defs>
          <clipPath id='clip0_12_13'>
            <rect
              width='24'
              height='15.713'
              fill='white'
              transform='translate(4 8.14351)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    {
      ...size,
    }
  );
}
