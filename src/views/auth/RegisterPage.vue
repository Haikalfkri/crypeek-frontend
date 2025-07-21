<template>
    <div>
      <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="flex items-center justify-center space-x-3 mb-4">
              <img :src="logo" alt="Crypeek Logo" class="h-20 w-20" />
              <span class="text-3xl font-bold text-gray-800">Crypeek</span>
            </div>
  
            <form @submit.prevent="Register" class="space-y-4 md:space-y-6">
              <div>
                <label for="username" class="block mb-2 text-sm text-left font-medium">Username</label>
                <input v-model="username" type="text" id="username" required
                  class="border border-gray-[CFD5E3] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Username" />
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm text-left font-medium">Email address</label>
                <input v-model="email" type="email" id="email" required
                  class="border border-gray-[CFD5E3] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@example.com" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm text-left font-medium">Password</label>
                <input v-model="password" type="password" id="password" required
                  class="border border-gray-[CFD5E3] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••" />
              </div>
              <div>
                <label for="confirm-password" class="block mb-2 text-sm text-left font-medium">Confirm password</label>
                <input v-model="password2" type="password" id="confirm-password" required
                  class="border border-gray-[CFD5E3] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••" />
              </div>
  
              <p class="text-sm text-left font-light text-gray-500">
                Already have an account? 
                <router-link to="/login" class="font-medium text-blue-600 hover:underline">Sign In</router-link>
              </p>
  
              <button type="submit" :disabled="loading"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <span v-if="loading">Loading...</span>
                <span v-else>Sign Up</span>
              </button>
            </form>
          </div>
        </div>
      </div>
  
      <!-- Success Modal -->
      <transition name="fade">
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 class="text-center text-2xl font-semibold text-gray-800">Registration Successful!</h2>
            <p class="text-center text-gray-500 mt-2">You can now log in to your account.</p>
          </div>
        </div>
      </transition>
  
      <!-- Error Modal -->
      <transition name="fade">
        <div v-if="showErrorModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 class="text-center text-2xl font-semibold text-gray-800">Error!</h2>
            <p class="text-center text-red-500 mt-2">{{ errorMessage }}</p>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import logoImg from '@/assets/crypeek-logo.png';
  
  axios.defaults.headers.common["ngrok-skip-browser-warning"] = true;

  export default {
    name: "RegisterPage",
    data() {
      return {
        username: "",
        email: "",
        password: "",
        password2: "",
        loading: false,
        showModal: false,
        showErrorModal: false,
        errorMessage: "",
        logo: logoImg
      };
    },
    methods: {
      async Register() {
        if (this.password !== this.password2) {
          this.errorMessage = "Passwords do not match!";
          this.showErrorModal = true;
          setTimeout(() => (this.showErrorModal = false), 2500);
          return;
        }
  
        this.loading = true;
        try {
          await axios.post("http://127.0.0.1:8000/api/v1/register", {
            username: this.username,
            email: this.email,
            password: this.password,
            password2: this.password2,
          });
  
          this.showModal = true;
          setTimeout(() => {
            this.showModal = false;
            this.$router.push("/login");
          }, 2000);
        } catch (error) {
          if (error.response && error.response.data) {
            const errData = error.response.data;
            if (errData.email) {
              this.errorMessage = Array.isArray(errData.email) ? errData.email[0] : errData.email;
            } else if (errData.username) {
              this.errorMessage = Array.isArray(errData.username) ? errData.username[0] : errData.username;
            } else if (errData.password) {
              this.errorMessage = Array.isArray(errData.password) ? errData.password[0] : errData.password;
            } else if (errData.non_field_errors) {
              this.errorMessage = errData.non_field_errors[0];
            } else {
              this.errorMessage = "Registration failed. Please check your input.";
            }
  
            this.showErrorModal = true;
            setTimeout(() => {
              this.showErrorModal = false;
            }, 2500);
          } else {
            this.errorMessage = "Something went wrong. Please try again.";
            this.showErrorModal = true;
            setTimeout(() => {
              this.showErrorModal = false;
            }, 2500);
          }
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .fixed {
    position: fixed;
  }
  .bg-gray-900 {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .bg-opacity-50 {
    opacity: 1;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  