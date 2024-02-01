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
        <div className='min-h-hvh flex items-stretch justify-center'>
            <div className='w-full pr-5 border-r border-[#e5fa6c] flex justify-between flex-col'>
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
                <h2 className='uppercase text-8xl font-bold bg-gradient-to-tr from-foreground to-muted-foreground w-max bg-clip-text text-transparent'>
                    Portfolio
                </h2>
            </div>
            <div className='text-sm text-muted-foreground w-[400px] pl-5 space-y-2'>
                <p>{PORTFOLIO.name}</p>
                <p>{PORTFOLIO.role}</p>
                <p>{PORTFOLIO.college}</p>
            </div>
        </div>
    );
}
