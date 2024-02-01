import { HOME_SECTION_INDEX } from '@/constants/app';
import { PORTFOLIO } from '@/constants/portfolio';
import { allPortfolios } from 'contentlayer/generated';
import Image from 'next/image';

export function getPortfolioSection(slug: string) {
    const portfolioSection = allPortfolios
        .filter((section) => section.index !== HOME_SECTION_INDEX)
        .find((section) => section._raw.flattenedPath === slug);

    return portfolioSection;
}

export function HeroSection() {
    return (
        <div className='min-h-hvh grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] 2xl:grid-cols-[1fr_400px] gap-5'>
            <div className='w-full lg:pr-5 lg:border-r lg:border-[#e5fa6c] flex justify-between flex-col'>
                <div className='text-end'>
                    <div>
                        <Image
                            src={`/portfolio/images/${PORTFOLIO.profilePic.src}`}
                            className='inline-block w-48 h-auto rounded-lg'
                            width={100}
                            height={100}
                            alt={PORTFOLIO.profilePic.alt}
                            loading='lazy'
                            unoptimized
                        />
                    </div>
                </div>
                <h2 className='uppercase text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-tr from-foreground to-muted-foreground w-max bg-clip-text text-transparent'>
                    Portfolio
                </h2>
            </div>
            <div className='text-sm text-muted-foreground space-y-2'>
                <p>{PORTFOLIO.name}</p>
                <p>{PORTFOLIO.role}</p>
                <p>{PORTFOLIO.college}</p>
            </div>
        </div>
    );
}
