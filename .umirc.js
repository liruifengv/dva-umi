// ref: https://umijs.org/config/
export default {
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/Home/index' },
        { path: '/products', component: '../pages/Products/index' },
        {
          path: '/test',
          component: '../pages/Test/index',
          routes: [
            { path: '/test/list', component: '../pages/Test/childPage/List' },
            { path: '/test/detail', component: '../pages/Test/childPage/Detail' }
          ]
        },
        { path: '/posts', component: '../pages/Posts/index' },
        { path: '/404', component: '../pages/NotFound' },
        { path: '*', render: '../pages/NotFound' }
      ]
    }
  ],
  proxy: {
    "/api": {
      "target": process.env.proxyTarget,
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
}
