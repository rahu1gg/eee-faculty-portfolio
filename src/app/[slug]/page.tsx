import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import { Mdx } from '@/components/global/mdx';
import { getPortfolioSection } from '@/components/pages/portfolio-section';
import { HOME_SECTION_INDEX } from '@/constants/app';
import { allPortfolios } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

type PageProps = { params: { slug: string } };

export function generateMetadata({ params }: PageProps) {
    const portfolioSection = getPortfolioSection(params.slug);

    if (!portfolioSection)
        return {
            title: 'Not Found',
        };

    return {
        title: portfolioSection.label,
    };
}

export default function page({ params }: PageProps) {
    const portfolioSection = getPortfolioSection(params.slug);

    if (!portfolioSection) return notFound();

    return (
        <Fragment>
            <Header />
            <main className='relative pb-5'>
                <section>
                    <div className='min-h-screen max-w-maxi mx-auto px-[calc(4%_+_8px)]'>
                        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight py-2 capitalize'>{portfolioSection?.label}</h3>
                        <div>
                            <Mdx section={portfolioSection} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Fragment>
    );
}

export function generateStaticParams() {
    return allPortfolios.filter((section) => section.index !== HOME_SECTION_INDEX).map((section) => ({ slug: section._raw.flattenedPath }));
}
