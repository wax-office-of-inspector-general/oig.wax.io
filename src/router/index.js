import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TheOIGView from '../views/TheOIGView.vue';
import ElectionView from '../views/ElectionView.vue';
import EvaluationView from '../views/EvaluationView.vue';
import CandidateDetails from '@/components/election/CandidateDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/the-wax-oig',
      name: 'the-wax-oig',
      component: TheOIGView
    },
    {
      path: '/election',
      name: 'election',
      component: ElectionView,
      children: [
        {
          path: ':id',
          name: 'candidate-details',
          component: CandidateDetails
        }
      ]
    },

    {
      path: '/guild-reviews',
      name: 'guild-reviews',
      component: EvaluationView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
});

export default router;
