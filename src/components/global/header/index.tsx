import { NavLink } from '@/components/global/header/client';
import { PORTFOLIO } from '@/constants/portfolio';
import { allPortfolios } from 'contentlayer/generated';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='sticky top-5 m-5 h-[calc(100vh_-_40px)] rounded-lg'>
            <div className='border-r h-full flex flex-col items-start pl-1 justify-between'>
                <div>
                    <Link href='/' className='text-sm font-bold'>
                        {PORTFOLIO.name}
                    </Link>
                </div>
                <nav className='w-full'>
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
            </div>
        </header>
    );
}
