export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: '360 Tours',
      Wrapper: {
        element: '',
        attributes: {}
      },
      class: ''
    },
    {
      name: 'Tours',
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
      title: true,
      name: '360 Campaigns',
      Wrapper: {
        element: '',
        attributes: {}
      },
      class: ''
    },
    {
      name: 'Campaign',
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
    }
  ]
};