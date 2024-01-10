import { NavLink } from '@/components/global/header/client';
import { allPortfolios } from 'contentlayer/generated';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='border-b m-2 header-gradient rounded-lg border'>
            <div className='max-w-maxi mx-auto py-8 px-[4%]'>
                <p className='text-5xl font-bold'>DR. J.N. CHANDRASEKHAR</p>
            </div>
        </header>
    );
}

export function Navigation() {
    return (
        <nav className='sticky w-screen bottom-5 left-0 flex items-center justify-center'>
            <ul className='flex items-center justify-center gap-2 bg-muted h-10 px-1 rounded-lg'>
                {allPortfolios
                    .sort((a, b) => a.index - b.index)
                    .map((section) => (
                        <li key={section._id}>
                            <Link href={section.href ?? section.url} className='text-sm font-medium'>
                                <NavLink href={section.href ?? section.url}>{section.label}</NavLink>
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
    );
}
