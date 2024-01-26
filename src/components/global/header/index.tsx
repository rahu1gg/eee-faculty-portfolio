import { NavLink } from '@/components/global/header/client';
import { PORTFOLIO } from '@/constants/portfolio';
import { allPortfolios } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='sticky top-5 m-5 h-hvh rounded-lg'>
            <div className='relative h-full flex flex-col items-start p-5 justify-between bg-[#e5fa6c] rounded-lg overflow-hidden'>
                <div>
                    <Link href='/' className='text-sm font-bold relative -top-1'>
                        {PORTFOLIO.name}
                    </Link>
                </div>
                <nav className='w-full mt-auto'>
                    <ul>
                        {allPortfolios
                            .sort((a, b) => a.index - b.index)
                            .map((section) => (
                                <li key={section._id}>
                                    <Link href={section.href ?? section.url} className='group text-sm w-full inline-block py-0.5'>
                                        <NavLink href={section.href ?? section.url}>{section.label}</NavLink>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </nav>
                <div className='pt-3 flex items-center justify-start gap-5 w-full'>
                    {PORTFOLIO.socialLinks.map(({ icon, label, href }, index) => (
                        <Link key={`${index}`} href={href} className='grayscale scale-100 hover:grayscale-0 hover:scale-105 duration-300'>
                            <Image
                                src={`/portfolio/social-links/${icon}`}
                                className='size-6'
                                width={20}
                                height={20}
                                alt={label}
                                loading='lazy'
                                unoptimized
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
