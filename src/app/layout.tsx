import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: 'Chandrasekhar - %s',
        default: 'Chandrasekhar',
    },
    description: 'Official portfolio of Dr. J.N. Chandrasekhar',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
