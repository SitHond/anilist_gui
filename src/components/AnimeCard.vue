<template>
  <div>
    <!-- Отображаем анимацию ожидания, если данные не загружены -->
    <div v-if="!dataLoaded" class="loading-animation">
      <!-- Простая анимация ожидания -->
      <div class="spinner"></div>
    </div>

    <!-- Отображаем контент, когда данные загружены -->
    <div v-else>
      <div class="custom-container" ref="container">
        <div class="custom-card-list" ref="cardList">
          <div v-for="(item, index) in apiData" :key="index" class="custom-card">
            <a :href="'http://sithond.ru' + item.url">
              <img :src="'https://shikimori.one' + item.imagePreview" class="custom-card-img" alt="...">
            </a>
            <div class="anime-info">
              <div class="custom-card-title">{{ item.score }} ★</div>
              <a :href="'http://sithond.ru' + item.url">
                <div class="custom-link">{{ item.russian }}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import Swiper, { Navigation, Pagination } from 'swiper';

// Подключите необходимые модули Swiper
Swiper.use([Navigation, Pagination]);

export default {
  data() {
    return {
      apiData: [], // Массив для хранения данных из API
      dataLoaded: false, // Переменная для отслеживания загрузки данных
    };
  },
  created() {
    // Выполняем HTTP-запрос к API для получения данных
    axios.get('http://sithond.ru/api/anime/list?PageNumber=0&PageSize=12').then((response) => {
      // Сохраняем полученные данные в массив apiData
      this.apiData = response.data;
      // Устанавливаем флаг загрузки данных в true
      this.dataLoaded = true;

      // Инициализируем Swiper после загрузки данных
      this.initSwiper();
    }).catch((error) => {
      console.error('Ошибка при загрузке данных из API:', error);
    });
  },
  methods: {
    // Инициализация Swiper
    initSwiper() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
  },
};
</script>
<style>
/* Стиль для кастомного контейнера */
.custom-container {
  background-color: black;
  overflow: hidden; /* Скрыть содержимое, которое выходит за пределы контейнера */
  position: relative;
}

/* Стиль для списка карточек */
.custom-card-list {
  display: flex; /* Отображение в ряд */
  flex-wrap: nowrap; /* Запрет переноса карточек на новую строку */
  transition: transform 0.3s ease; /* Анимация прокрутки */
}

/* Стиль для кастомной карточки */
.custom-card {
  position: relative;
  min-width: 200px; /* Минимальная ширина карточки */
  max-width: 200px;
  height: auto;
  margin: 0 2px;
}

/* Стиль для изображения карточки */
.custom-card-img {
  min-width: 100%; /* Минимальная ширина изображения */
  max-width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
}

/* Стиль для названия аниме */
.custom-card-title {
  font-size: 20px;
  white-space: normal;
  padding: 5px;
}

/* Стиль для ссылок */
.custom-link {
  text-decoration: none;
  color: #ddd;
  font-weight: bold;
  padding: 5px;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Стиль для анимации ожидания */
.loading-animation {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

/* Простая анимация ожидания (спиннер) */
.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
