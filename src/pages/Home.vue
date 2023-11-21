<template>
  <div>
    <!-- <h1>Home Page</h1>
    <p>API</p> -->
    <AnimeCards />
    <ContentHome />
    <MylistAndNews />
  </div>
</template>

<script>
import AnimeCards from '../components/AnimeCard.vue';
import ContentHome from '../components/ContentHome.vue';
import MylistAndNews from '../components/MylistAndNews.vue';

export default {
  name: 'HomePage',
  components: {
    AnimeCards,
    ContentHome,
    MylistAndNews,
  },
};
</script>

<style>
/* Стили для компонента Home */
</style>