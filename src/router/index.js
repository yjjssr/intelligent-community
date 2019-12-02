import Vue from 'vue';
import VueRouter from 'vue-router';
import { publicRoute, protectedRoute } from './config';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/util/auth';
const routes = publicRoute.concat(protectedRoute);
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'hash',
	linkActiveClass: 'active',
	routes: routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
});
router.beforeEach((to, from, next) => {
	NProgress.start();
	if (to.meta.public) {
		next();
	} else {
		if (to.path != '/login' && (!getToken() || getToken() == 'undefined')) {
			NProgress.done();
			next({
				path: '/login',
			});
		} else {
			NProgress.done();
			next();
		}
	}
});
router.afterEach((to, from) => {
	NProgress.done();
});
export default router;
