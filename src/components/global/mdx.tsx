import { Portfolio } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

export function Mdx({ section }: { section: Portfolio }) {
    const Component = getMDXComponent(section.body.code);

    return <Component />;
}
