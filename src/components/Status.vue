<template>
  <div>
    <p v-if="status === 'success'">Данные успешно получены и отправлены</p>
    <p v-else-if="status === 'loading'">Идет отправка данных...</p>
    <p v-else-if="status === 'error'">Произошла ошибка</p>
    <p v-else>Ожидание...</p>
  </div>
</template>

<script>
export default {
  props: ['status'],
};
</script>
  