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
        icon: 'smile',
        name: 'test',
        component: './test/testDemo'
      },
      {
        path: '/welcome/test2',
        name: 'test2',
        icon: 'smile',
        component: './FormPro'
      }
    ]
  },
  // // admin
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       path: '404',
  //       name: '404',
  //       component: './404',
  //     },
  //     {
  //       path: '/admin/test',
  //       icon: 'smile',
  //       component: './test/testDemo'
  //     },
  //     {
  //       component: './404'
  //     }
  //   ],
  // },
  {
    name: 'exam',
    icon: 'BookOutlined',
    path: '/exam',
    routes: [
      {
        path: 'release',
        name: 'release',
        component: './Welcome',
      },
      {
        path: 'review',
        name: 'review',
        component: './Welcome',
      },
      {
        path: 'analysis',
        icon: 'PieChartOutlined',
        name: 'analysis',
        component: './Welcome',
      },
      {
        component: './404'
      }
    ]
  },
  {
    name: 'bank',
    icon: 'table',
    path: '/bank',
    routes: [
      {
        // 主要是可以新建各种题型对应的试题
        path: 'quiz',
        name: 'quiz',
        component: './TableList',
      },
      {
        // 可以新建试卷，也可以查看以前保存的试卷 导出试卷
        path: 'exam',
        name: 'exam',
        component: './TableList',
      },
      {
        component: './404',
      }
    ]
  },
  {
    name: 'monitor',
    icon: 'CameraOutlined',
    path: '/monitor',
    component: './test/camTest',
  },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
