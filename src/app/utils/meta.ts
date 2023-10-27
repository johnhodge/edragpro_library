import { MetadataData } from '../../types';
import { Metadata } from 'next';

export default function SetMetadata(props: MetadataData): Metadata {
  return {
    metadataBase: new URL('https://www.edgarpro.co'),
    title: props.title,
    description: props.description,
    applicationName: 'EdgarPro',
    alternates: {
      canonical: props.canonical,
    },
    themeColor: '#374151',
    referrer: 'origin-when-cross-origin',
    keywords: props.keywords,
    authors: [{ name: 'John', url: 'https://www.johnhodge.com' }],
    creator: 'John Hodge',
    publisher: 'John Hodge',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}
