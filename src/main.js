import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import './main.css'; 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'; 
import axios from 'axios';

const app = createApp(App);

app.mixin({
  data() {
    return {
      ApiUrl: 'https://shikimori.me',
    };
  },
});

app.use(VueRouter); // Зарегистрировали Vue Router
app.use(Vuex); // Зарегистрировали Vuex
app.use(router);
app.config.globalProperties.$axios = axios;

app.mount('#app');
