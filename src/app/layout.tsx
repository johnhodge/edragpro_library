import Brand from '@/app/components/brand';
import Callout from '@/app/components/callout';
import Nav from '@/app/components/nav';
import '@/app/globals.css';
import { HomepageSectionEntryData } from '@/types';
import { Fira_Code, Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--firaCode' });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems: HomepageSectionEntryData[] = [
    {
      sys: {
        id: 'test',
      },
      header: 'test',
      paragraph: 'test',
      name: 'test',
      order: 1,
      entryType: 'product',
      image: null,
    },
  ];
  return (
    <html
      lang='en'
      className={`${inter.variable} ${firaCode.variable} selection:bg-primary-100`}>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQF5DMGF')`}
      </Script>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-MQF5DMGF"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>`,
          }}
        />
        <Nav navItems={navItems} session={null}>
          <Callout type='alert'>
            <p>This is an early stage pre-release version of EdgarPro.</p>
          </Callout>
        </Nav>

        <main className='p-4 prose prose-secondary prose-headings:font-extrabold max-w-none min-h-[calc(100dvh-122px)]'>
          {children}
        </main>

        <footer className='sticky top-0 p-4 bg-gray-50 border-t border-gray-500 flex justify-between items-center'>
          <Brand />
        </footer>
      </body>
    </html>
  );
}
