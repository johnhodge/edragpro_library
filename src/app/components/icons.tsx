import React from 'react';

type IconPropData = {
  theme: 'primary' | 'secondary' | 'gray';
};

export function Logo() {
  return (
    <svg
      width='135'
      height='28'
      viewBox='0 0 135 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_99_11877)'>
        <path
          d='M0 21.5904V0H15.5602V4.7229H5.86145V8.43375H14.759V13.1566H5.86145V16.8675H15.5181V21.5904H0ZM24.4132 21.8012C23.2604 21.8012 22.1992 21.499 21.2293 20.8946C20.2665 20.2902 19.4934 19.373 18.91 18.1431C18.3337 16.9132 18.0456 15.3635 18.0456 13.494C18.0456 11.5402 18.3478 9.9518 18.9522 8.72893C19.5637 7.50603 20.3508 6.60994 21.3136 6.04067C22.2835 5.4714 23.3026 5.18676 24.3709 5.18676C25.1722 5.18676 25.875 5.32732 26.4794 5.60843C27.0837 5.88254 27.5896 6.25152 27.9973 6.71538C28.405 7.17218 28.7143 7.67471 28.9251 8.2229H29.0094V0H34.8288V21.5904H29.0517V18.9338H28.9251C28.7002 19.4819 28.3768 19.9739 27.9553 20.4097C27.5407 20.8384 27.0345 21.1792 26.4371 21.4322C25.8468 21.6782 25.1722 21.8012 24.4132 21.8012ZM26.5637 17.3313C27.0978 17.3313 27.5545 17.1767 27.934 16.8675C28.3207 16.5512 28.6158 16.1084 28.8197 15.5392C29.0304 14.9629 29.1358 14.2811 29.1358 13.494C29.1358 12.6928 29.0304 12.0075 28.8197 11.4383C28.6158 10.862 28.3207 10.4227 27.934 10.1205C27.5545 9.81126 27.0978 9.65664 26.5637 9.65664C26.0296 9.65664 25.5727 9.81126 25.1932 10.1205C24.8206 10.4227 24.5324 10.862 24.3288 11.4383C24.1319 12.0075 24.0334 12.6928 24.0334 13.494C24.0334 14.2952 24.1319 14.984 24.3288 15.5603C24.5324 16.1295 24.8206 16.5688 25.1932 16.878C25.5727 17.1802 26.0296 17.3313 26.5637 17.3313ZM45.4868 28C43.8634 28 42.4719 27.7682 41.3121 27.3043C40.1595 26.8474 39.2635 26.2148 38.624 25.4066C37.9914 24.6056 37.6364 23.6848 37.5592 22.6446H43.1675C43.2237 22.989 43.3645 23.2666 43.5893 23.4774C43.8142 23.6883 44.1024 23.8394 44.4537 23.9307C44.8122 24.0291 45.2127 24.0784 45.6555 24.0784C46.4076 24.0784 47.0295 23.8956 47.5216 23.5301C48.0206 23.1647 48.2699 22.504 48.2699 21.5482V18.8072H48.1012C47.8904 19.3554 47.5671 19.8228 47.1315 20.2094C46.6958 20.5889 46.1721 20.8805 45.5605 21.0843C44.9492 21.2811 44.2781 21.3795 43.547 21.3795C42.3944 21.3795 41.3331 21.1125 40.3634 20.5783C39.4005 20.0442 38.6274 19.1973 38.0441 18.0377C37.4677 16.878 37.1797 15.3635 37.1797 13.494C37.1797 11.5402 37.4818 9.9518 38.0861 8.72893C38.6977 7.50603 39.4849 6.60994 40.4477 6.04067C41.4175 5.4714 42.4367 5.18676 43.505 5.18676C44.306 5.18676 45.0089 5.32732 45.6135 5.60843C46.2178 5.88254 46.7238 6.25152 47.1315 6.71538C47.5392 7.17218 47.8484 7.67471 48.0592 8.2229H48.1856V5.39761H54.0049V21.5482C54.0049 22.9187 53.6499 24.0818 52.9402 25.0378C52.2373 26.0006 51.2463 26.7348 49.9673 27.241C48.6883 27.7469 47.1948 28 45.4868 28ZM45.6976 17.247C46.2319 17.247 46.6886 17.0994 47.0681 16.8042C47.4548 16.502 47.7499 16.0733 47.9538 15.5181C48.1646 14.9558 48.2699 14.2811 48.2699 13.494C48.2699 12.6928 48.1646 12.0075 47.9538 11.4383C47.7499 10.862 47.4548 10.4227 47.0681 10.1205C46.6886 9.81126 46.2319 9.65664 45.6976 9.65664C45.1635 9.65664 44.7068 9.81126 44.3273 10.1205C43.9547 10.4227 43.6665 10.862 43.4627 11.4383C43.266 12.0075 43.1675 12.6928 43.1675 13.494C43.1675 14.2952 43.266 14.9769 43.4627 15.5392C43.6665 16.0944 43.9547 16.5196 44.3273 16.8148C44.7068 17.1029 45.1635 17.247 45.6976 17.247ZM61.4766 21.8434C60.4435 21.8434 59.5299 21.6747 58.7358 21.3374C57.9486 20.993 57.3301 20.4729 56.8803 19.7771C56.4306 19.0814 56.2057 18.1958 56.2057 17.1205C56.2057 16.235 56.3566 15.4794 56.6589 14.8539C56.9612 14.2214 57.3828 13.7048 57.9241 13.3042C58.4651 12.9036 59.0942 12.5979 59.8109 12.3871C60.535 12.1762 61.3151 12.0392 62.1515 11.9759C63.0579 11.9056 63.7855 11.8213 64.3337 11.7229C64.8888 11.6175 65.2894 11.4734 65.5355 11.2907C65.7814 11.1009 65.9044 10.8514 65.9044 10.5422V10.5C65.9044 10.0783 65.7428 9.75503 65.4195 9.53013C65.0962 9.30523 64.6815 9.19279 64.1756 9.19279C63.6202 9.19279 63.167 9.31577 62.8155 9.56175C62.4711 9.8007 62.2638 10.1697 62.1935 10.6687H56.838C56.9085 9.68475 57.2212 8.77811 57.7764 7.94881C58.3387 7.11246 59.1573 6.44478 60.2327 5.9458C61.3081 5.43976 62.6505 5.18676 64.2597 5.18676C65.4195 5.18676 66.4595 5.32381 67.3803 5.59789C68.3011 5.86497 69.0846 6.24096 69.7313 6.72592C70.3779 7.20382 70.8697 7.76607 71.2072 8.41267C71.5515 9.05222 71.7237 9.748 71.7237 10.5V21.5904H66.2839V19.3133H66.1575C65.8341 19.9177 65.4405 20.4061 64.9767 20.7786C64.52 21.1511 63.9963 21.4217 63.406 21.5904C62.8226 21.759 62.1794 21.8434 61.4766 21.8434ZM63.3743 18.1747C63.8172 18.1747 64.2318 18.0834 64.6182 17.9006C65.0118 17.7179 65.3317 17.4543 65.5776 17.11C65.8235 16.7656 65.9467 16.3474 65.9467 15.8554V14.506C65.7921 14.5693 65.6268 14.629 65.4512 14.6853C65.2824 14.7415 65.0996 14.7942 64.9029 14.8434C64.7132 14.8926 64.5093 14.9383 64.2914 14.9804C64.0806 15.0226 63.8592 15.0613 63.6274 15.0964C63.1774 15.1667 62.8085 15.2826 62.5203 15.4443C62.2393 15.5989 62.0285 15.7922 61.8878 16.0241C61.7544 16.249 61.6876 16.502 61.6876 16.7831C61.6876 17.233 61.8457 17.5773 62.1619 17.8163C62.4783 18.0552 62.8823 18.1747 63.3743 18.1747ZM74.5041 21.5904V5.39761H80.1548V8.4759H80.3235C80.6186 7.33736 81.0859 6.50453 81.7257 5.97741C82.3721 5.4503 83.1277 5.18676 83.992 5.18676C84.2451 5.18676 84.4947 5.20783 84.7406 5.25001C84.9937 5.28514 85.2362 5.33786 85.468 5.40815V10.3735C85.18 10.2751 84.825 10.2013 84.4032 10.1521C83.9816 10.1029 83.6197 10.0783 83.3174 10.0783C82.7482 10.0783 82.2351 10.2083 81.7784 10.4684C81.3284 10.7214 80.9736 11.0798 80.7136 11.5437C80.4536 12.0005 80.3235 12.5382 80.3235 13.1566V21.5904H74.5041Z'
          className='fill-primary-600'
        />
        <path
          d='M106.858 21.5904V5.39761H112.509V8.4759H112.677C112.973 7.33736 113.44 6.50453 114.08 5.97741C114.726 5.4503 115.482 5.18676 116.346 5.18676C116.599 5.18676 116.849 5.20783 117.095 5.25001C117.348 5.28514 117.59 5.33786 117.822 5.40815V10.3735C117.534 10.2751 117.179 10.2013 116.757 10.1521C116.336 10.1029 115.974 10.0783 115.671 10.0783C115.102 10.0783 114.589 10.2083 114.132 10.4684C113.683 10.7214 113.328 11.0798 113.068 11.5437C112.808 12.0005 112.677 12.5382 112.677 13.1566V21.5904H106.858ZM126.604 21.8856C124.847 21.8856 123.343 21.5377 122.092 20.8419C120.84 20.1391 119.881 19.1622 119.214 17.9111C118.546 16.6531 118.212 15.1948 118.212 13.5362C118.212 11.8775 118.546 10.4227 119.214 9.17169C119.881 7.91366 120.84 6.93674 122.092 6.24096C123.343 5.53815 124.847 5.18676 126.604 5.18676C128.361 5.18676 129.865 5.53815 131.116 6.24096C132.367 6.93674 133.326 7.91366 133.994 9.17169C134.661 10.4227 134.995 11.8775 134.995 13.5362C134.995 15.1948 134.661 16.6531 133.994 17.9111C133.326 19.1622 132.367 20.1391 131.116 20.8419C129.865 21.5377 128.361 21.8856 126.604 21.8856ZM126.646 17.5843C127.138 17.5843 127.563 17.4192 127.922 17.0889C128.28 16.7585 128.558 16.2877 128.754 15.6762C128.951 15.0648 129.049 14.3374 129.049 13.494C129.049 12.6436 128.951 11.9162 128.754 11.3118C128.558 10.7003 128.28 10.2294 127.922 9.89911C127.563 9.56877 127.138 9.40361 126.646 9.40361C126.126 9.40361 125.679 9.56877 125.307 9.89911C124.935 10.2294 124.65 10.7003 124.453 11.3118C124.256 11.9162 124.158 12.6436 124.158 13.494C124.158 14.3374 124.256 15.0648 124.453 15.6762C124.65 16.2877 124.935 16.7585 125.307 17.0889C125.679 17.4192 126.126 17.5843 126.646 17.5843Z'
          className='fill-gray-700'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M87.292 21.5904V0H96.6111C98.2135 0 99.6157 0.316266 100.818 0.948797C102.019 1.58133 102.954 2.47039 103.622 3.61598C104.289 4.76154 104.623 6.10042 104.623 7.63253C104.623 9.17871 104.279 10.5176 103.59 11.6491C102.908 12.7806 101.949 13.6521 100.712 14.2636C99.4821 14.875 98.0448 15.1807 96.4004 15.1807H93.1534V21.5904H87.292ZM96.98 10.2681C96.4951 10.507 95.9083 10.6265 95.2196 10.6265H93.1534V4.68072H95.2196C95.9083 4.68072 96.4951 4.80021 96.98 5.03916C97.4721 5.27109 97.8481 5.60843 98.1081 6.05121C98.3753 6.48696 98.5086 7.01405 98.5086 7.63253C98.5086 8.24397 98.3753 8.7746 98.1081 9.2244C97.8481 9.67421 97.4721 10.0221 96.98 10.2681Z'
          className='fill-gray-700'
        />
      </g>
      <defs>
        <clipPath id='clip0_99_11877'>
          <rect width='134.995' height='28' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Check({ theme }: IconPropData) {
  const colors: Record<string, string> = {
    primary: 'stroke-primary-600',
    secondary: 'stroke-secondary-600',
    gray: 'stroke-gray-600',
  };
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.83331 14L11.6666 19.8333L23.3333 8.16663'
        strokeWidth='2.25'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={colors[theme]}
      />
    </svg>
  );
}

export function Code({ theme }: IconPropData) {
  const colors: Record<string, string> = {
    primary: 'stroke-primary-600',
    secondary: 'stroke-secondary-600',
    gray: 'stroke-gray-600',
  };
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_70_778)'>
        <path
          d='M8.16667 9.33329L3.5 14L8.16667 18.6666M19.8333 9.33329L24.5 14L19.8333 18.6666M16.3333 4.66663L11.6667 23.3333'
          strokeWidth='2.25'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={colors[theme]}
        />
      </g>
      <defs>
        <clipPath id='clip0_70_778'>
          <rect width='28' height='28' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Menu({ theme }: IconPropData) {
  const colors: Record<string, string> = {
    primary: 'fill-primary-600',
    secondary: 'fill-secondary-600',
    gray: 'fill-gray-600',
  };
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16 2.1C16 3.2598 15.1046 4.2 14 4.2C12.8954 4.2 12 3.2598 12 2.1C12 0.940202 12.8954 0 14 0C15.1046 0 16 0.940202 16 2.1Z'
        className={colors[theme]}
      />
      <path
        d='M16 14C16 15.1598 15.1046 16.1 14 16.1C12.8954 16.1 12 15.1598 12 14C12 12.8402 12.8954 11.9 14 11.9C15.1046 11.9 16 12.8402 16 14Z'
        className={colors[theme]}
      />
      <path
        d='M16 25.9C16 27.0598 15.1046 28 14 28C12.8954 28 12 27.0598 12 25.9C12 24.7402 12.8954 23.8 14 23.8C15.1046 23.8 16 24.7402 16 25.9Z'
        className={colors[theme]}
      />
    </svg>
  );
}

export function Close({ theme }: IconPropData) {
  const colors: Record<string, string> = {
    primary: 'fill-primary-600',
    secondary: 'fill-secondary-600',
    gray: 'fill-gray-600',
  };
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.585816 0.585785C1.36686 -0.195262 2.63319 -0.195262 3.41424 0.585787L14 11.1716L24.5858 0.585815C25.3668 -0.195233 26.6332 -0.195232 27.4142 0.585816C28.1953 1.36686 28.1953 2.63319 27.4142 3.41424L16.8284 14L27.4142 24.5858C28.1953 25.3668 28.1953 26.6332 27.4142 27.4142C26.6332 28.1953 25.3668 28.1953 24.5858 27.4142L14 16.8284L3.41421 27.4142C2.63316 28.1953 1.36683 28.1953 0.585785 27.4142C-0.195262 26.6332 -0.195262 25.3668 0.585787 24.5858L11.1716 14L0.585815 3.41421C-0.195233 2.63316 -0.195232 1.36683 0.585816 0.585785Z'
        className={colors[theme]}
      />
    </svg>
  );
}
export function Login({ theme }: IconPropData) {
  const colors: Record<string, string> = {
    primary: 'stroke-primary-600',
    secondary: 'stroke-secondary-600',
    gray: 'stroke-gray-600',
  };
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.32031 13.9965H17.3273M14 10.661L17.3366 13.9954L14 17.3309M5.59998 9.90854C6.51796 8.02308 8.04386 6.50149 9.93192 5.58887C11.82 4.67624 13.9603 4.4257 16.008 4.87761C18.0558 5.32951 19.8919 6.45755 21.2205 8.08003C22.5491 9.7025 23.2929 11.725 23.3321 13.8217C23.3713 15.9183 22.7036 17.9672 21.4366 19.6382C20.1696 21.3092 18.377 22.5051 16.3475 23.0332C14.318 23.5614 12.1699 23.391 10.249 22.5496C8.32818 21.7082 6.74646 20.2447 5.75865 18.3949'
        strokeWidth='2.25'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={colors[theme]}
      />
    </svg>
  );
}
