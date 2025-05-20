import type { Page, HomeHeroSection, ReusableSection } from '@/sanity/types';
import HomeHeroSectionComponent from '../sections/HomeHeroSection';
import ReusableSectionComponent from '../sections/ReusableSection';

type SectionComponents = {
  homeHeroSection: typeof HomeHeroSectionComponent;
  reusableSection: typeof ReusableSectionComponent;
};

const sections: SectionComponents = {
  homeHeroSection: HomeHeroSectionComponent,
  reusableSection: ReusableSectionComponent,
};

export function SectionRenderer({ section }: { section: Page['sections'][number] }) {
  const { _type } = section;

  const SectionComponent = sections[_type];

  if (!SectionComponent) {
    console.warn(`No component found for section type: ${_type}`);
    return null;
  }

  if (_type === 'homeHeroSection') {
    return <HomeHeroSectionComponent {...(section as HomeHeroSection)} />;
  }
  
  return <ReusableSectionComponent {...(section as ReusableSection)} />;
}
