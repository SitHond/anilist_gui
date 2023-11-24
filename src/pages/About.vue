<template>
  <div class="about">
    <h1>О разработчике</h1>
    <div class="info">
      <h2>Павлов Максим Дмитриевич</h2>
      <p>Привет, я занимаюсь веб-разработкой и настраиваю веб-приложения. Обладаю комплексными знаниями и навыками как для frontend, так и для backend разработки.</p>
      <h3>Контактная информация</h3>
      <p>Email: fms@shond.ru<br></p>      
        GitHub: github.com/Sithond<br>
        <section>
    <h3>Используемые технологии</h3>
    <ul>
        <li>
            <strong>Vue.js:</strong> Фреймворк для построения интерфейсов современных веб-приложений.
        </li>
        <li>
            <strong>ASP.NET:</strong> Используется для разработки логики API и веб-приложений.
        </li>
        <li>
            <strong>Swagger UI:</strong> Инструмент для генерации документации по API, облегчает взаимодействие с API.
        </li>
        <li>
            <strong>MySQL:</strong> Система управления базами данных, обеспечивает надежное хранение данных.
        </li>
        <li>
            <strong>Nginx:</strong> Веб-сервер, используется для развертывания веб-приложений в среде Linux, обеспечивает высокую производительность и надежность.
        </li>
    </ul>
</section>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
.about {
  font-family: Arial, sans-serif;
  padding: 20px;
  color: #333;
}

.info {
  margin-top: 20px;
}

h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

h2, h3 {
  font-size: 24px;
  margin-bottom: 5px;
}

p {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>
