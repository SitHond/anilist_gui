<template>
  <div>
    <h1>{{ url }}</h1>
    <Animes />
  </div>
</template>

<script>
import Animes from '../components/animeAll.vue';


export default {
  components: {
    Animes
  },
  data() {
    return {
      animeTitle: '',
      animeData: null
    };
  }
};
</script>