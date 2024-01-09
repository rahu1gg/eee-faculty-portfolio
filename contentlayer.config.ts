import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Portfolio = defineDocumentType(() => ({
    name: 'Portfolio',
    filePathPattern: '**/*.md',
    fields: {
        label: { type: 'string', required: true },
        index: { type: 'number', required: true },
        href: { type: 'string', required: false },
    },
    computedFields: {
        url: { type: 'string', resolve: (section) => `/portfolio/${section._raw.flattenedPath}` },
    },
}));

export default makeSource({ contentDirPath: 'src/portfolio', documentTypes: [Portfolio] });
