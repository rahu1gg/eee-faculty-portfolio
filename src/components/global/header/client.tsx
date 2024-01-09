'use client';

import { cn } from '@/lib/utils/cn';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
    const pathname = usePathname();

    return <span className={cn(pathname === href ? 'active' : 'inactive')}>{children}</span>;
}
