<template>
    <div class="container">
        <div class="news-block">
            <h2>Новости</h2>
            <div class="button-container">
                
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
/* Стили для блока */
.news-block {
    height: auto;
    width: 75%;
    text-align: center;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}

/* Стили для названия блока */
.news-block h2 {
    background-color: #e06c0056;
    padding: 5px;
    text-align: left;
    margin-bottom: 10px;
    font-size: 24px;
    border-left: 10px solid #e06c00a1
}
.custom-news-card{
    display: flex; /* Отображение в ряд */
    flex-wrap: nowrap; /* Запрет переноса карточек на новую строку */
    transition: transform 0.3s ease; /* Анимация прокрутки */
    width: 20%;
    height: 20%;
}
</style>