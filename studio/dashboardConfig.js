export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d960aa3a901e2bae79c6f46',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rfsnzaoy',
                  apiId: 'db7e9898-9450-4667-bcb1-2f7b63465ac0'
                },
                {
                  buildHookId: '5d960aa3c5d6564550be4b95',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3gqg7r4g',
                  apiId: 'c8b73538-3d86-4947-86c0-be28c86b8c5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stassiek02/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3gqg7r4g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
