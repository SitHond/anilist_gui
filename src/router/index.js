// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Anime from '../pages/AnimeAll.vue';
import AddAnime from '../pages/AddAnime.vue';
import NotFound from '../pages/404.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/animes/:url', name: 'Anime', component: Anime },
  { path: '/addanime/', name: 'AddAnime', component: AddAnime },
  { path: '/reg', name: 'Reg', component: Reg },
  { path: '/login', name: 'UserLogin', component: Login },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
