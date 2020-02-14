export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e460c96262babffbf86ca33',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2bmonbyf',
                  apiId: 'c17e0aa0-1b2f-4cc5-af64-2ecdc7643381'
                },
                {
                  buildHookId: '5e460c9617c5f861337c775d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t6g9vehv',
                  apiId: 'e7489a0e-c56c-4871-a418-a8be4121e810'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sgmullins/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t6g9vehv.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
