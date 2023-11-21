<template>
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
  </template>
  
  <script>
  export default {
    name: 'UserLogin',
    data() {
      return {
        username: '',
        password: '',
        message: ''
      };
    },
    methods: {
      login() {
        const url = 'http://sithond.ru/api/login'; // URL для авторизации
  
        const data = {
          username: this.username,
          password: this.password
        };
  
        this.$axios.post(url, data)
          .then(response => {
            // Проверка успешной авторизации
            if (response.data && response.data.authenticated) {
              this.message = 'Успешная авторизация!';
              // Редирект на другую страницу, например, на главную
              this.$router.push('/');
            } else {
              this.message = 'Неверные учетные данные';
            }
          })
          .catch(error => {
           // console.error('Ошибка авторизации:', error);
            this.message = 'Ошибка авторизации';
          });
      }
    }
  };
  </script>