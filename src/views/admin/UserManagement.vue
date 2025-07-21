<template>
    <div>
      <Navbar class="top-0 left-0 w-full bg-white shadow-md z-50 mb-6" />
  
      <div class="min-h-screen bg-[#fafafa] px-4 py-6">
        <h1 class="text-xl font-semibold mb-4 text-left">User Management</h1>
  
        <!-- Cards -->
        <div class="flex flex-col sm:flex-row gap-4 mb-6">
          <div class="p-3 rounded-lg shadow w-full sm:w-[250px] bg-white">
            <p class="text-sm text-gray-600">Total Users</p>
            <p class="text-lg font-semibold">{{ totalUsers }}</p>
          </div>
          <div class="p-3 rounded-lg shadow w-full sm:w-[250px] bg-white">
            <p class="text-sm text-gray-600">Subscribed</p>
            <p class="text-lg font-semibold">{{ subscribedUsers }}</p>
          </div>
        </div>
  
        <!-- Table -->
        <div class="relative overflow-x-auto shadow-sm sm:rounded-lg bg-white">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th class="px-6 py-3">Username</th>
                <th class="px-6 py-3">Email</th>
                <th class="px-6 py-3">Join Date</th>
                <th class="px-6 py-3">Subscribed</th>
                <th class="px-6 py-3">Role</th>
                <th class="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="user in users"
                :key="user.id"
                class="odd:bg-white even:bg-gray-50 border-b"
              >
                <td class="px-6 py-4 font-medium text-gray-900">{{ user.username }}</td>
                <td class="px-6 py-4">{{ user.email }}</td>
                <td class="px-6 py-4">{{ new Date(user.date_joined).toLocaleDateString() }}</td>
                <td class="px-6 py-4">{{ user.subscribed ? 'Yes' : 'No' }}</td>
                <td class="px-6 py-4">{{ user.role }}</td>
                <td class="px-6 py-4 text-center space-x-2">
                  <button @click="openModal(user)" class="text-blue-600 hover:underline">✏️</button>
                  <button @click="deleteUser(user.id)" class="text-red-600 hover:underline">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Modal -->
        <transition name="fade">
          <div
            v-if="showModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div class="bg-white p-6 rounded-xl w-full max-w-md animate-fade-in-up">
              <h2 class="text-xl font-bold mb-4">Update User</h2>
              <form @submit.prevent="updateUser">
                <input
                  type="text"
                  v-model="form.username"
                  class="w-full border rounded p-2 mb-3"
                  placeholder="Username"
                />
                <input
                  type="email"
                  v-model="form.email"
                  class="w-full border rounded p-2 mb-3"
                  placeholder="Email"
                />
                <select v-model="form.role" class="w-full border rounded p-2 mb-3">
                  <option v-for="r in roles" :key="r.id" :value="r.name">{{ r.name }}</option>
                </select>
                <div class="flex justify-end gap-2">
                  <button
                    type="button"
                    @click="showModal = false"
                    class="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/NavbarCom.vue';
  import axios from 'axios';
  
  export default {
    name: 'UserManagementPage',
    components: { Navbar },
    data() {
      return {
        users: [],
        roles: [],
        totalUsers: 0,
        subscribedUsers: 0,
        showModal: false,
        form: {
          id: null,
          username: '',
          email: '',
          role: ''
        }
      };
    },
    methods: {
      async fetchUsers() {
        const res = await axios.get('http://localhost:8000/api/v1/users/');
        this.users = res.data;
        this.totalUsers = res.data.length;
        this.subscribedUsers = res.data.filter(u => u.subscribed).length;
      },
      async fetchRoles() {
        const res = await axios.get('http://localhost:8000/api/v1/roles/');
        this.roles = res.data;
      },
      openModal(user) {
        this.form = { ...user };
        this.showModal = true;
      },
      async updateUser() {
        await axios.put(`http://localhost:8000/api/v1/users/${this.form.id}/`, this.form);
        this.showModal = false;
        this.fetchUsers();
      },
      async deleteUser(id) {
        await axios.delete(`http://localhost:8000/api/v1/users/${id}/`);
        this.fetchUsers();
      }
    },
    mounted() {
      this.fetchUsers();
      this.fetchRoles();
    }
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.3s ease-out;
  }
  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>
  