import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityImage = SanityImageObject & {
  alt?: string;
};

export type Navigation = {
  mainNav: SanityLink[];
  secondaryNav: SanityLink[];
};

export type HeaderNav = Navigation & {
  backgroundImage: SanityImage;
};

export type SanityLink = {
  title: string;
  isExternal: boolean;
  isNewWindow: boolean;
  external?: string;
  internal?: Route;
};

export type Route = {
  slug: {
    current: string;
  };
} & (
  | {
      isRedirect: true;
      redirectRoute: Route;
      page?: never;
    }
  | {
      isRedirect: false;
      page: Page;
      redirectRoute?: never;
    }
);

export type Page = {
  title: string;
  sections: Section[];
};

type BaseSection = {
  _type: string;
  _key: string;
};

export type HomeHeroSection = BaseSection & {
  _type: 'homeHeroSection';
  title: string;
  backgroundImage: SanityImage;
};

export type ReusableSection = BaseSection & {
  _type: 'reusableSection';
  title: string;
  eyebrow: string;
  buttonText: string;
  buttonCta: string;
  width: 'full' | 'half' | 'third';
  backgroundImage?: SanityImage;
};

export type Section = HomeHeroSection | ReusableSection;
