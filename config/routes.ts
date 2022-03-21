export default [
  // user
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  // welcome
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    routes: [
      {
        path: '/welcome/test',
        name: 'test',
        icon: 'smile',
        component: './test/testDemo'
      },
      {
        path: '/welcome/test2',
        name: '404',
        icon: 'smile',
        component: './404'
      }
    ]
  },
  // admin
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '404',
        name: '404',
        component: './404',
      },
      {
        path: '/admin/test',
        icon: 'smile',
        component: './test/testDemo'
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
