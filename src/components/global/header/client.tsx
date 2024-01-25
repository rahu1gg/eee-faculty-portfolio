'use client';

import { cn } from '@/lib/utils/cn';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
    const pathname = usePathname();

    return (
        <span
            className={cn(
                pathname === href ? 'text-foreground font-medium' : 'text-muted-foreground font-normal',
                'w-full inline-flex items-center justify-between duration-300 hover:text-foreground hover:font-medium',
            )}
        >
            {children}
            {pathname === href ? (
                <span className='size-2 inline bg-foreground mr-7 rounded-full' />
            ) : (
                <div className='relative mr-5 size-5 overflow-hidden opacity-0 group-hover:opacity-100 duration-300'>
                    <span className='absolute delay-300 transition-all duration-200 group-hover:-translate-y-4 group-hover:translate-x-4'>
                        <ArrowUpRight size={16} className='text-muted-foreground' />
                        <ArrowUpRight size={16} className='text-foreground -translate-x-4' />
                    </span>
                </div>
            )}
        </span>
    );
}
