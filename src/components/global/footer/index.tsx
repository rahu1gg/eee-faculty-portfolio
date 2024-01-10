import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='border-t border-dashed'>
            <div className='max-w-maxi mx-auto px-[4%] py-3'>
                <div className='flex items-center justify-between'>
                    <p className='text-muted-foreground text-sm'>
                        <span className='font-medium'>Dr. J.N. Chandrasekhar</span> (Assistant Professor)
                    </p>
                    <p className='text-muted-foreground text-sm'>
                        <Button className='p-0 text-muted-foreground font-medium hover:text-foreground relative z-50' variant='link' asChild>
                            <Link href={'https://www.svuce-eee.in'} target='_blank' rel='noreferrer'>
                                SVUCE EEE
                            </Link>
                        </Button>
                    </p>
                </div>
            </div>
        </footer>
    );
}
