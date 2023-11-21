<template>
  <div id="app">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Пример медиа-запроса для экранов меньше 768px */
@media (max-width: 768px) {
  /* Измените стили или макет для меньших экранов */
}
</style>
