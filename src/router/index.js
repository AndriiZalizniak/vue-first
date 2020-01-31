import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/HomePage.vue';
import About from '@/views/About.vue';
import Portfolio from '@/views/Portfolio.vue';
import Catalog from '@/views/Catalog.vue';
import Service from '@/views/Service.vue';
import Contacts from '@/views/Contacts.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog,
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
