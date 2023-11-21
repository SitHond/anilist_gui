<template>
    <div>
        <input type="text" v-model="username" placeholder="Username" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button @click="register">Register</button>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
export default {
  name: 'UserRegistration',
  data() {
    return {
      // ваши данные
    };
  },
  methods: {
    register() {
      
      const url = `http://sithond.ru/api/register?username=${this.username}&email=${this.email}&password=${this.password}`;
      const data = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      this.sentData = JSON.stringify(data);

      this.$axios.post(url, data)
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => {
          if (error.response) {
            const statusCode = error.response.status;

            if (statusCode === 500) {
              this.message = 'Ошибка при регистрации пользователя';
            } else {
              this.message = 'Другая ошибка при регистрации';
            }
          } else {
            this.message = 'Ошибка соединения с сервером';
          }
        });
    }
  }
};
</script>

<style>
</style>