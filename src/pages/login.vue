<template>
  <main class="flex justify-center bg-foreground-primary text-white min-h-screen">
    <section class="w-1/2 py-10 px-10 h-full">
      <div class="mb-16">
        <div class="text-5xl font-bold font-poppins">Welcome 👋</div>
        <div class="text-white">We are happy to have you back</div>
      </div>
      <form class="space-y-3" @submit.prevent="onLoginClick">
        <div class="w-full space-y-3">
          <div class="w-11/12">
            <label for="email" class="block text-white text-sm font-bold mb-2">Email</label>
            <input
              v-model="email"
              id="email"
              type="email"
              placeholder="Enter your Email"
              class="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div class="w-11/12">
            <label for="password" class="block text-white text-sm font-bold mb-2">Password</label>
            <input
              v-model="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              class="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div class="w-11/12 flex justify-center">
            <button type="submit" class="block mt-5 w-11/12 cursor-pointer bg-primary text-white py-2 rounded">
              Login
            </button>
          </div>
          <hr class="border-t border-white-600 my-5 w-full"/>
          <div class="w-11/12 text-center cursor-pointer" @click="onRegisterClick">
            Register
          </div>
        </div>
      </form>
    </section>
    <section class="flex-initial h-full p-5 w-7/12">
      <div class="rounded-lg overflow-hidden">
        <img class="w-full object-cover" src="/auth.png" alt="" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onLoginClick() {
      try {
        const response = await axios.post("http://localhost:3001/v1/auth/sign-in", {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200 || response.status === 201) {
          // Save token to localStorage
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("id", response.data.data.user.id )
          console.log("Login successful:", response.data.data.user);
          this.$router.push("/");
        } else {
          console.error("Login failed:", response.data.message);
          alert("Login failed: " + response.data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Error during login: " + error.message);
      }
    },
    onRegisterClick() {
      this.$router.push("/Register");
    },
  },
});
</script>

<style scoped>
form > div {
  max-width: 100%;
}
</style>
