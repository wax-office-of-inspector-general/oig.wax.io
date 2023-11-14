import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TheOIGView from '../views/TheOIGView.vue';
import ElectionView from '../views/ElectionView.vue';
import EvaluationView from '../views/EvaluationView.vue';
import GuildsView from '../views/GuildsView.vue';
import CandidateDetails from '@/components/election/CandidateDetails.vue';

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
      path: '/wax-guilds',
      name: 'wax-guilds',
      component: GuildsView
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
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
