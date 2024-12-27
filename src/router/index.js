import { createRouter, createWebHistory } from 'vue-router'
import { useProjectStore } from '@/stores/project.store'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'project',
      props: true,
      beforeEnter: (to, from, next) => {
        const projectStore = useProjectStore()
        const id = to.params.id
        if (projectStore.projectId.includes(id)) {
          next()
        } else {
          next('/projects/notFound')
        }
      },
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/:all(.*)*',
      name: 'page_not_found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
