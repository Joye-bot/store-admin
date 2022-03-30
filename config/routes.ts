export default [
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
            component: './Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
  },
  {
    component: './404',
  },
];
