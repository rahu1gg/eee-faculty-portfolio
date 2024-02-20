// Portfolio

export const PORTFOLIO = {
  name: 'Dr. J.N. Chandra Sekhar',
  role: 'Assistant Professor',
  college: 'Department of Electrical and Electronics Engineering\nSri Venkateswara University\nTirupati',
  profilePic: {
    src: 'profile-pic.jpg',
    alt: 'profile-pic',
  },
  title: {
    template: 'Dr. J.N. Chandra Sekhar',
    default: 'Dr. J.N. Chandra Sekhar',
  },
  socialLinks: [
    {
      icon: 'linkedin.svg',
      label: 'Linkedin',
      href: '/',
    },
    {
      icon: 'webofscience.svg',
      label: 'webofscience',
      href: '/',
    },
    {
      icon: 'researchgate.svg',
      label: 'Researchgate',
      href: '/',
    },
    {
      icon: 'scopus.svg',
      label: 'scopus',
      href: '/',
    },
    {
      icon: 'google-scholar.svg',
      label: 'Googlescholar',
      href: '/',
    },
  ],
} as const;
