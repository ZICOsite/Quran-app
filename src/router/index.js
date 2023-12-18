import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/surahs',
      name: 'surahs',
      component: () => import('@/pages/SurahsPage.vue')
    },
    {
      path: '/ayahs/:id',
      name: 'ayahs',
      component: () => import('@/pages/AyahsPage.vue')
    },
    {
      path: '/juzs',
      name: 'juzs',
      component: () => import('@/pages/JuzsPage.vue')
    },
    {
      path: '/sajdas',
      name: 'sajdas',
      component: () => import('@/pages/SajdasPage.vue')
    },
  ]
})

export default router
