module.exports = {
  title: 'chipman.lab',
  tagline: 'Documentation and knowledge base handbook',
  url: 'https://chipmanlab.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'chipmanlab', // Usually your GitHub org/user name.
  projectName: 'chipmanlab.github.io', // Usually your repo name.
  themeConfig: {
    image: 'img/logo_hero.svg',
    navbar: {
      title: 'chipman.lab',
      logo: {
        alt: 'lab',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/mdx',
          label: 'Base',
          position: 'left',
        },
        {to: '', label: 'Blog', position: 'left'},
        {
          href: 'https://gitlab.com/getchipman/',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: '#',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitLab',
              href: 'https://gitlab.com/getchipman/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} chipman.lab`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
