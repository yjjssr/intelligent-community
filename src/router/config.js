export const publicRoute = [
	{
		path: '/',
		meta: { title: '首页', public: true },
		redirect: '/dashboard',
	},
	{
		path: '/login',
		meta: {
			public: true,
			title: '登录',
		},
		name: 'Login',
		component: () => import(`@/views/Login.vue`),
	},
];
export const protectedRoute = [{
    path: '/dashboard',
    name: 'dashboard',
    meta: {title: '首页'},
    component: () => import('@/views/Dashboard.vue'),
  },];
