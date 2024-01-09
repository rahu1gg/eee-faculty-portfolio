import { HOME_SECTION_INDEX } from '@/constants/app';
import { allPortfolios } from 'contentlayer/generated';

export function getPortfolioSection(slug: string) {
    const portfolioSection = allPortfolios
        .filter((section) => section.index !== HOME_SECTION_INDEX)
        .find((section) => section._raw.flattenedPath === slug);

    return portfolioSection;
}
