<template>
  <div class="login">
    <h3>Login page</h3>
    <form @submit="login">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "ethien.salinas@gmail.com",
      password: "qwerty",
    };
  },
  methods: {
    login: async function () {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        await this.$router.push('/secure')
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>