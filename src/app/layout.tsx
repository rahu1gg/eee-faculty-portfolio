import { PORTFOLIO } from '@/constants/portfolio';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: `${PORTFOLIO.title.template} - %s`,
        default: PORTFOLIO.title.default,
    },
    description: 'Official portfolio of Faculty-name',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${inter.className} grid grid-cols-[400px_1fr]`}>{children}</body>
        </html>
    );
}
