<template>
  <main class="flex justify-center bg-foreground-primary text-white min-h-screen">
    <section class="w-1/2 py-10 px-10 h-full">
      <div class="mb-16">
        <div class="text-5xl font-bold font-poppins">Welcome 👋</div>
        <div class="text-white">We are happy to have you back</div>
      </div>
      <form class="space-y-3" @submit.prevent="onRegisterClick">
        <div class="w-full space-y-3">
          <div class="w-11/12 mx-auto">
            <label for="username" class="block text-sm font-medium text-white">Username</label>
            <input
              v-model="username"
              id="username"
              type="text"
              placeholder="Enter your Username"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div class="w-11/12 mx-auto">
            <label for="fullName" class="block text-sm font-medium text-white">Full Name</label>
            <input
              v-model="fullName"
              id="fullName"
              type="text"
              placeholder="Enter your Full Name"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div class="w-11/12 mx-auto">
            <label for="email" class="block text-sm font-medium text-white">Email</label>
            <input
              v-model="email"
              id="email"
              type="email"
              placeholder="Enter your Email"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div class="w-11/12 mx-auto">
            <label for="password" class="block text-sm font-medium text-white">Password</label>
            <input
              v-model="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div class="w-11/12 mx-auto">
            <label for="phone" class="block text-sm font-medium text-white">Phone</label>
            <input
              v-model="phone"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div class="w-11/12 mx-auto">
            <label for="alamat" class="block text-sm font-medium text-white">Address</label>
            <input
              v-model="alamat"
              id="alamat"
              type="text"
              placeholder="Enter your address"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div class="w-full mx-auto flex justify-center">
            <button
              type="submit"
              class="w-11/12 mt-5 py-3 bg-primary text-white rounded-lg"
            >Register</button>
          </div>
          <hr class="w-full mx-auto border-t border-gray-200 my-5" />
          <div class="w-full mx-auto text-center">
            <span>Already have an account? </span>
            <a
              class="text-primary hover:underline cursor-pointer"
              @click="onLoginClick"
            >Login</a>
          </div>
        </div>
      </form>
    </section>
    <section class="flex-initial h-full p-5 w-7/12">
      <div class="rounded-lg overflow-hidden">
        <img class="w-full object-cover max-w-fit" src="/register.png" alt="" />
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Register",
  data() {
    return {
      username: "",
      fullName: "",
      email: "",
      password: "",
      phone: "",
      alamat: "",
    };
  },
  methods: {
    async onRegisterClick() {
      try {
        const response = await axios.post("http://localhost:3001/v1/auth/sign-up", {
          email: this.email,
          password: this.password,
          fullName: this.fullName,
          username: this.username,
          phone: this.phone,
          alamat: this.alamat,
          role: "User", // Set the role as "User"
        });

        if (response.status === 201) {
          // Registration successful, redirect to login
          this.$router.push("/Login");
        } else {
          console.error("Registration failed:", response.data.message);
          alert("Registration failed: " + response.data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Error during registration: " + error.message);
      }
    },
    onLoginClick() {
      this.$router.push("/Login");
    },
  },
});
</script>
<style scoped>
form > div {
  max-width: 100%;
}
.bg-primary {
  background-color: #1e3a8a; /* Adjust the primary color as needed */
}
.text-primary {
  color: #1e3a8a; /* Adjust the primary text color as needed */
}
</style>
