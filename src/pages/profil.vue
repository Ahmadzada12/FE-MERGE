<template>
  <div class="profil-page">
    <div class="mx-auto p-4">
      <!-- Tombol Back -->
      <button @click="goBack" class="back-button flex items-center mb-4">
        <img src="" alt="Back" class="w-5 h-5 mr-2" />
        Kembali
      </button>
      <h2 class="text-2xl font-bold mb-4">Profil Pengguna</h2>
      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Username
          </label>
          <input v-model="userProfile.username" type="text" id="name" class="input-field" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="fullName">
            Nama Lengkap
          </label>
          <input v-model="userProfile.fullName" type="text" id="fullName" class="input-field" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="userProfile.email" type="email" id="email" class="input-field" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="telp">
            Nomor Telepon
          </label>
          <input v-model="userProfile.phone" type="tel" id="telp" class="input-field" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">
            Alamat
          </label>
          <input v-model="userProfile.alamat" type="text" id="alamat" class="input-field" />
        </div>
        <button @click="saveChanges" class="save-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Simpan Perubahan
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Profil",
  data() {
    return {
      userProfile: {
        username: "",
        email: "",
        phone: "",
        alamat: "",
        fullName: "",
      },
    };
  },
  methods: {
    async fetchUserProfile() {
      try {
        const token = localStorage.getItem("token"); // Ambil token dari localStorage jika ada
        const id = localStorage.getItem("id");
        if (!token || !id) {
          console.error("No token or id found");
          return;
        }

        const response = await axios.get(
          `http://localhost:3001/v1/user/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          this.userProfile = response.data.data; // Sesuaikan dengan struktur respons dari backend
          console.log(this.userProfile);
        } else {
          console.error("Failed to fetch user profile:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
    async saveChanges() {
      try {
        const token = localStorage.getItem("token"); // Ambil token dari localStorage jika ada
        const id = localStorage.getItem("id");
        if (!token || !id) {
          console.error("No token or id found");
          return;
        }

        const response = await axios.put(
          `http://localhost:3001/v1/user/${id}`,
          this.userProfile,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("Profile updated successfully");
          // Optional: Show success message or redirect to another page
        } else {
          console.error("Failed to update user profile:", response.data.message);
        }
      } catch (error) {
        console.error("Error updating user profile:", error);
      }
    },
    goBack() {
      this.$router.push("/riwayat-donasi");
    },
  },
  mounted() {
    this.fetchUserProfile();
  },
});
</script>

<style scoped>
.profil-page {
  padding: 20px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.back-button {
  background: none;
  border: none;
  color: #1e3a8a; /* Ganti warna sesuai kebutuhan */
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.save-button {
  margin-top: 10px;
}

.back-button img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>
