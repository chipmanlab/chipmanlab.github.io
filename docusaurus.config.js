module.exports = {
  title: 'chipman.lab',
  tagline: 'Documentation and knowledge base',
  url: 'https://gitlab.com/getchipman',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'getchipman', // Usually your GitHub org/user name.
  projectName: 'lab', // Usually your repo name.
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
          to: 'docs/doc2',
          label: 'Base',
          position: 'left',
        },
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
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
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/getchipman/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
