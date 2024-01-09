import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import { Mdx } from '@/components/global/mdx';
import { HOME_SECTION_INDEX } from '@/constants/app';
import { allPortfolios } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

export default function Home() {
    const homeSection = allPortfolios.find((section) => section.index === HOME_SECTION_INDEX);

    if (!homeSection) return notFound();

    return (
        <Fragment>
            <Header />
            <section>
                <div className='min-h-screen max-w-maxi mx-auto px-[calc(4%_+_8px)]'>
                    <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight py-2'>Home</h3>
                    <Mdx section={homeSection} />
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}
