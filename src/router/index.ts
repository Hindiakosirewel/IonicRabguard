import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/Dashboard'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/Dashboard'
      },
      {
        path: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'Profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: 'Request',
        component: () => import('@/views/Request.vue')
      },
      {
        path: 'Record',
        component: () => import('@/views/Record.vue')
      },
      {
        path: 'History',
        component: () => import('@/views/History.vue')
      }
    ]
  },
  // Add a new route for the login page
  {
    path: '/login',
    component: () => import('@/views/Login.vue') // Ensure this path is correct
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
