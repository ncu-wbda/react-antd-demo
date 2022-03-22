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
    name: '考试',
    icon: 'BookOutlined',
    path: '/exam',
    routes: [
      {
        path: 'release',
        name: '我的考试',
        component: './Welcome',
      },
      {
        path: 'review',
        name: '批阅',
        component: './Welcome',
      },
      {
        path: 'analysis',
        icon: 'PieChartOutlined',
        name: '分析统计',
        component: './Welcome',
      },
      {
        component: './404'
      }
    ]
  },
  {
    name: '题库',
    icon: 'table',
    path: '/bank',
    routes: [
      {
        // 主要是可以新建各种题型对应的试题
        path: 'quiz',
        name: '试题库',
        component: './TableList',
      },
      {
        // 可以新建试卷，也可以查看以前保存的试卷 导出试卷
        path: 'exam',
        name: '试卷库',
        component: './TableList',
      },
      {
        component: './404',
      }
    ]
  },
  {
    name: '在线监考',
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
