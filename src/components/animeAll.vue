<template>
  <div>
    <h1>{{ animeName }}</h1>
    <h1>{{ animeRussian }}</h1>
    <img :src="animeIMG" alt="Изображение аниме" />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      url: '',
      animeName: '',
      animeRussian: '',
      animeIMG: '',
      animeData: null,
    };
  },
  created() {
    // Извлекаем значение параметра URL из адресной строки
    const url = this.$route.params.url;

    // Отправляем запрос к вашему API с полученным URL для проверки
    axios
      .get(`http://sithond.ru/api/anime?Url=/animes/${url}`)
      .then((response) => {
        if (response.status === 200 && response.data && response.data.length > 0) {
          // Если API вернуло данные, используйте первый результат (первое найденное аниме)
          const animeData = response.data[0];

          // Проверяем наличие ключей в данных
          if ('name' in animeData && 'russian' in animeData && 'imageOriginal' in animeData) {
            this.animeName = animeData.name;
            this.animeRussian = animeData.russian;
            this.animeIMG = `https://shikimori.one${animeData.imageOriginal}`;
          } else {
            // Если какого-либо ключа нет, можно обработать ошибку или перенаправить на страницу 404
           console.error('Недостающие ключи в данных об аниме');
          }
        } else {
          // Если данных нет или статус ответа не 200, можно перенаправить на страницу 404
          console.error('Аниме не найдено или произошла ошибка при запросе к API');
        }
      })
      .catch((error) => {
        console.error('Ошибка при запросе к API:', error);
        // Также можно перенаправить на страницу ошибки
      });
  },
};
</script>
  
  
  