import Vue from 'vue';
import Router from 'vue-router';
import dashboard from './components/dashboard/dashboard.vue';
import project from './components/project/project.vue';

const routes = [
  { path: '/aa', component: dashboard },
  { path: '/', component: project },
];

Vue.use(Router);

const router = new Router({
  routes,
});

export default router;
