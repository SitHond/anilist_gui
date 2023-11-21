<template>
    <div>
      <h2>Вход</h2>
      <form @submit="login">
        <input v-model="username" type="text" placeholder="Имя пользователя">
        <input v-model="password" type="password" placeholder="Пароль">
        <button type="submit">Войти</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          // Отправить запрос на вход (логин) к вашему API
          const response = await api.login(this.username, this.password);
          
          // Если вход успешен, сохранить токен в состоянии приложения
          this.$store.commit('setToken', response.data.token);
  
          // Перенаправить пользователя на защищенную страницу
          this.$router.push('/dashboard');
        } catch (error) {
          // Обработать ошибку, например, отобразить сообщение об ошибке
        //  console.error('Ошибка входа:', error);
        }
      },
    },
  };
  </script>
  