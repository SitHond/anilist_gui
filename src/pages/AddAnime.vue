<template>
  <div>
    <h2>Добавить аниме в базу данных</h2>
    <form @submit.prevent="addAnime">
      <input v-model="animeTitle" type="text" placeholder="Название аниме" />
      <button type="submit">Поиск</button>
    </form>
    <div v-if="foundAnime">
      <h3>Найденное аниме:</h3>
      <pre>{{ JSON.stringify(foundAnime, null, 2) }}</pre>
      <button @click="confirmAdd">Добавить в базу данных</button>
    </div>
    <div v-if="animeToSend">
      <h3>Данные, которые будут отправлены:</h3>
      <pre>{{ JSON.stringify(animeToSend, null, 2) }}</pre>
    </div>
    <p>{{ statusMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      animeTitle: '',
      statusMessage: '',
      foundAnime: null, 
      animeToSend: null, 
    };
  },
  methods: {
    async addAnime() {
      try {
        // Используйте Shikimori API для поиска аниме по названию
        const apiUrl = `https://shikimori.one/api/animes?search=${this.animeTitle}`;

        const response = await axios.get(apiUrl);

        if (response.data.length === 0) {
          this.statusMessage = 'Аниме не найдено на Shikimori';
          this.foundAnime = null; // Сброс найденного аниме при отсутствии результатов
          this.animeToSend = null; // Сброс данных, которые будут отправлены при отсутствии результатов
          return;
        }

        // Получите первый результат (первое найденное аниме)
        this.foundAnime = response.data[0];
        this.statusMessage = ''; // Сброс статусного сообщения

        // Обновите данные, которые будут отправлены на сервер
        this.animeToSend = {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          name: this.foundAnime.name || 'string',
          russian: this.foundAnime.russian || 'string',
          imageOriginal: this.foundAnime.image.original || 'string',
          imagePreview: this.foundAnime.image.preview || 'string',
          imageX96: this.foundAnime.image.x96 || 'string',
          imageX48: this.foundAnime.image.x48 || 'string',
          url: this.foundAnime.url || 'string',
          kind: this.foundAnime.kind || 'string',
          score: this.foundAnime.score || 0,
          status: this.foundAnime.status || 'string',
          episodes: this.foundAnime.episodes || 0,
          episodesAired: this.foundAnime.episodes_aired || 0,
          airedOn: this.foundAnime.aired_on || new Date().toISOString(),
          releasedOn: this.foundAnime.released_on || new Date().toISOString()
        };
      } catch (error) {
        this.statusMessage = 'Ошибка при поиске аниме на Shikimori';
      //  console.error('Ошибка при поиске аниме:', error);
      }
    },
    async confirmAdd() {
      if (!this.foundAnime) {
        return; // Нельзя подтвердить добавление, если аниме не найдено
      }

      try {
        // Отправьте аниме в ваше собственное API
        const yourApiUrl = 'http://sithond.ru/api/anime/add-anime';
        const yourApiResponse = await axios.post(yourApiUrl, this.animeToSend);

        this.statusMessage = 'Аниме успешно добавлено в базу данных';
        console.log('Успешно добавлено:', yourApiResponse.data);
      } catch (error) {
        this.statusMessage = 'Ошибка при добавлении аниме в базу данных';
        console.error('Ошибка при добавлении аниме:', error);
      }
    },
  },
};
</script>










  