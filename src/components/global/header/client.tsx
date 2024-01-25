'use client';

import { cn } from '@/lib/utils/cn';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
    const pathname = usePathname();

    return (
        <span
            className={cn(
                pathname === href ? 'text-foreground font-medium' : 'text-muted-foreground font-normal',
                'w-full inline-block duration-300 hover:text-foreground hover:font-medium',
            )}
        >
            {children}
        </span>
    );
}
