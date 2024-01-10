import { cn } from '@/lib/utils/cn';
import { Portfolio } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

const components = {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<'h1'>) => (
        <h1 className={cn('my-2 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props} />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<'h2'>) => (
        <h2 className={cn('my-2 scroll-m-20 text-3xl font-bold tracking-tight first:mt-0', className)} {...props} />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<'h3'>) => (
        <h3 className={cn('my-2 scroll-m-20 text-2xl font-bold tracking-tight', className)} {...props} />
    ),
    h4: ({ className, ...props }: ComponentPropsWithoutRef<'h4'>) => (
        <h4 className={cn('my-2 scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props} />
    ),
    h5: ({ className, ...props }: ComponentPropsWithoutRef<'h5'>) => (
        <h5 className={cn('my-2 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />
    ),
    h6: ({ className, ...props }: ComponentPropsWithoutRef<'h6'>) => (
        <h6 className={cn('my-2 scroll-m-20 text-base font-semibold tracking-tight', className)} {...props} />
    ),
    a: ({ className, ...props }: ComponentPropsWithoutRef<'a'>) => (
        <a className={cn('font-medium underline underline-offset-4 hover:text-muted-foreground duration-200', className)} {...props} />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<'p'>) => <p className={cn('leading-7', className)} {...props} />,
    ul: ({ className, ...props }: ComponentPropsWithoutRef<'ul'>) => <ul className={cn('my-4 ml-5 list-disc', className)} {...props} />,
    ol: ({ className, ...props }: ComponentPropsWithoutRef<'ol'>) => <ol className={cn('my-4 ml-5 list-decimal', className)} {...props} />,
    li: ({ className, ...props }: ComponentPropsWithoutRef<'li'>) => <li className={cn('mt-1', className)} {...props} />,
    blockquote: ({ className, ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
        <blockquote className={cn('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground', className)} {...props} />
    ),
    img: ({ className, alt, ...props }: ComponentPropsWithoutRef<'img'>) => (
        <img className={cn('rounded-md border', className)} alt={alt} {...props} aria-label='hello' />
    ),
    hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
    table: ({ className, ...props }: ComponentPropsWithoutRef<'table'>) => (
        <div className='my-6 w-full overflow-y-auto'>
            <table className={cn('w-full', className)} {...props} />
        </div>
    ),
    tr: ({ className, ...props }: ComponentPropsWithoutRef<'tr'>) => <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />,
    th: ({ className, ...props }: ComponentPropsWithoutRef<'th'>) => (
        <th className={cn('border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right', className)} {...props} />
    ),
    td: ({ className, ...props }: ComponentPropsWithoutRef<'td'>) => (
        <td className={cn('border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right', className)} {...props} />
    ),
    pre: ({ className, ...props }: ComponentPropsWithoutRef<'pre'>) => (
        <pre className={cn('mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4', className)} {...props} />
    ),
    code: ({ className, ...props }: ComponentPropsWithoutRef<'code'>) => (
        <code className={cn('relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm', className)} {...props} />
    ),
    Image: (props: ComponentPropsWithoutRef<typeof Image>) => <Image {...props} />,
};

export function Mdx({ section }: { section: Portfolio }) {
    const Component = getMDXComponent(section.body.code);

    return <Component components={components} />;
}
