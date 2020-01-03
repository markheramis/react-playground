export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: '360 TOURS',
      url: '/tours',
      children: [
        {
          name: 'List',
          url: '/tours/list'
        },
        {
          name: 'Create',
          url: '/tours/create'
        }
      ]
    },
    {
      name: '360 CAMPAIGNS',
      url: '/campaign',
      children: [
        {
          name: 'List',
          url: '/campaign/list'
        },
        {
          name: 'Create',
          url: '/campaign/create'
        }
      ]
    },
    {
      name: 'USERS',
      url: '/user',
      children: [
        {
          name: 'List',
          url: '/user/list'
        },
        {
          name: 'Create',
          url: '/user/create'
        }
      ]
    }
  ]
};