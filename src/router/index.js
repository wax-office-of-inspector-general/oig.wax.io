import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TheOIGView from '../views/TheOIGView.vue';
import ElectionView from '../views/ElectionView.vue';
import LatestReviewsView from '../views/review/LatestReviewsView.vue';
import ReviewProcessView from '../views/review/ReviewProcessView.vue';
import ReviewTimelineView from '../views/review/ReviewTimelineView.vue';
import GuildsView from '../views/GuildsView.vue';
import CandidateDetails from '@/components/election/CandidateDetails.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/guild-reviews',
      name: 'guild-reviews',
      component: LatestReviewsView,
      children: [
        {
          path: 'latest',
          name: 'guild-reviews-latest',
          component: LatestReviewsView
        },
        {
          path: 'timeline',
          name: 'guild-reviews-timeline',
          component: ReviewTimelineView
        },
        {
          path: 'process',
          name: 'guild-reviews-process',
          component: ReviewProcessView
        }
      ]
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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
