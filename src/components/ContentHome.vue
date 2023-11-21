<template>
  <div class="container">
    <!-- Первый блок -->
    <div class="block-red">
      <h2>Контент</h2>
      <div class="button-container">
        <button @click="redirectToAddAnime">Добавить контент</button>
        <button>Жалоба на контент</button>
        <button>Администрация</button>
      </div>
    </div>

    <!-- Второй блок -->
    <div class="block-blue">
      <h2>Аниме</h2>
      <div class="button-container">
        <button>#All</button>
        <button>#2023</button>
        <button>#2022</button>
      </div>
    </div>

    <!-- Третий блок -->
    <div class="block-grin">
      <h2>Манга</h2>
      <div class="button-container">
        <button>#All</button>
        <button>#2023</button>
        <button>#2022</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: [],
      components: {},
    };
  },
  methods: {
    redirectToAddAnime() {
      this.$router.push({ name: 'AddAnime' });
    },
  },
}
</script>

<style scoped>
/* Стили для контейнера */
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

/* Стили для блока */
.block-red,
.block-blue,
.block-grin {
  width: 30%;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

/* Стили для названия блока */
.block-red h2 {
  background-color: #b3000056;
  padding: 5px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 24px;
  border-left: 10px solid #b30000a1;
}

/* Стили для названия блока */
.block-blue h2 {
  background-color: #007bff56;
  padding: 5px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 24px;
  border-left: 10px solid #007bffa1;
}

/* Стили для названия блока */
.block-grin h2 {
  background-color: #00b32756;
  padding: 5px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 24px;
  border-left: 10px solid #00b327a1;
}

/* Стили для кнопок */
.block-red button {
  margin-top: 10px;
  padding: 5px;
  background-color: #fc222d56;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.block-blue button {
  margin-top: 10px;
  padding: 5px;
  background-color: #007bff56;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.block-grin button {
  margin-top: 10px;
  padding: 5px;
  background-color: #00ff5556;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Стили для изменения цвета кнопок при наведении */
.block-red button:hover {
  background-color: #b30000;
}

.block-blue button:hover {
  background-color: #0056b3;
}

.block-grin button:hover {
  background-color: #00b327;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
  .container {
    flex-wrap: wrap;
  }

  .block-red,
  .block-blue,
  .block-grin {
    width: 100%;
  }
}
</style>
