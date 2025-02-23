module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'installation',
    },
    {
      type: 'doc',
      id: 'behaviour',
    },
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'doc',
        id: 'configuration/overview',
      },
      collapsed: false,
      items: [
        'configuration/overview',
        {
          type: 'category',
          label: 'OAuth Provider Configuration',
          link: {
            type: 'doc',
            id: 'configuration/providers/index',
          },
          items: [
            'configuration/providers/google',
            'configuration/providers/azure',
            'configuration/providers/adfs',
            'configuration/providers/facebook',
            'configuration/providers/github',
            'configuration/providers/gitea',
            'configuration/providers/keycloak',
            'configuration/providers/keycloak_oidc',
            'configuration/providers/gitlab',
            'configuration/providers/linkedin',
            'configuration/providers/azure_ad',
            'configuration/providers/openid_connect',
            'configuration/providers/login_gov',
            'configuration/providers/nextcloud',
            'configuration/providers/digitalocean',
            'configuration/providers/bitbucket',
          ],
        },
        'configuration/session_storage',
        'configuration/tls',
        'configuration/alpha-config',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'doc',
        id: 'features/endpoints',
      },
      collapsed: false,
      items: ['features/endpoints'],
    },
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'doc',
        id: 'community/security',
      },
      collapsed: false,
      items: ['community/contribution', 'community/security'],
    },
  ],
};
