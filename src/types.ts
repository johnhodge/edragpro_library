import { ReactNode } from 'react';

export type LinkData = {
  href: string;
  children: ReactNode;
  title: string;
  className?: string;
  type: 'internal' | 'external';
  pageAnchor?: boolean;
};

export type MetadataData = {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
};

export type TableData = {
  label: string;
  key: string;
  value?: number;
  description?: string;
};
export type TableConfigData = {
  name: string;
  summary: string;
  filters: Record<string, string[]>[];
  data: TableData[];
};

export type HomepageSectionEntryData = {
  sys: {
    id: string;
  };
  header: string;
  paragraph: string;
  name: string;
  order: number;
  entryType: 'product' | 'cta';
  pageAnchor: boolean;
  image: {
    url: string;
    width: number;
    height: number;
    title: string;
    description: string;
  } | null;
};

export type HomepageSectionCollectionData = {
  data: {
    homepageSectionCollection: {
      items: HomepageSectionEntryData[];
    };
  };
};

export type GlobalCalloutData = {
  children: ReactNode;
  type: 'alert' | 'note' | 'success';
};

export type GlobalButtonData = {
  theme: 'primary' | 'secondary' | 'gray';
  title: string;
  icon?: 'check' | 'code' | 'login';
  ghost?: boolean;
  className?: string;
  children: ReactNode;
} & (LinkButtonData | OnClickButtonData);
type LinkButtonData = {
  eventType: 'link';
  href: string;
  pageAnchor?: boolean;
  type: 'internal' | 'external';
};
type OnClickButtonData = {
  eventType: 'onClick';
  event: () => void;
};
