'use client';

import { cn } from '@/lib/utils/cn';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
    const pathname = usePathname();

    return (
        <span
            className={cn(
                pathname === href ? 'header-gradient' : 'hover:bg-background',
                'h-8 px-2 inline-flex rounded-md items-center justify-center duration-300',
            )}
        >
            {children}
        </span>
    );
}
