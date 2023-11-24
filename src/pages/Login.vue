<template>
  <div>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
  </template>
  
  <script>
  export default {
    name: 'UserLogin',
    data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        // Отправляем данные на сервер для авторизации
        const response = await this.$axios.post('https://localhost:5001/login', {
          username: this.username,
          password: this.password
        });

        // Если авторизация прошла успешно
        console.log(response.data);
        
        // Вы можете выполнить действия, например, перенаправление на другую страницу
        // this.$router.push('/dashboard');
      } catch (error) {
        // Обработка ошибки авторизации
        console.error('Login failed:', error.response.data);
      }
    }
  }
};
  </script>