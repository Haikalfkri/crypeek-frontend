import { createRouter, createWebHistory } from "vue-router";

// Auth
import LoginPage from "@/views/auth/LoginPage.vue";
import RegisterPage from "@/views/auth/RegisterPage.vue";

import CryptoNewsPage from "@/views/all/CryptoNewsPage.vue";
import CryptoInsightPage from "@/views/all/CryptoInsightPage.vue";

import UserAboutUsPage from "@/views/user/UserAboutUsPage.vue";

import CoinPage from "@/views/all/Coin.vue";

import CoinDetail from "@/views/all/CoinDetail.vue";

import UserManagement from "@/views/admin/UserManagement.vue";

import UserFeedback from "@/views/admin/UserFeedback.vue";

const routes = [
    // auth
    {
        path: "/",
        component: LoginPage,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('accessToken');
            const role = localStorage.getItem('role');

            if(token) {
                if (role == 'user') {
                    next('/CryptoNewsPage');
                } else if (role == 'admin') {
                    next('/CryptoNewsPage');
                } else {
                    next('/');
                }
            } else {
                next();
            }
        }
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage
    },
    {
        path: "/userManagement",
        name: "UserManagement",
        component: UserManagement,
        meta: { requiresAuth: true },
    },
    {
        path: "/userFeedback",
        name: "UserFeedback",
        component: UserFeedback,
        meta: { requiresAuth: true },
    },

    {
        path: "/CryptoNewsPage",
        name: "CryptoNewsPage",
        component: CryptoNewsPage,
        meta: { requiresAuth: true },
    },
    {
      path: "/CryptoInsight",
      name: "CryptoInsight",
      component: CryptoInsightPage, 
      meta: { requiresAuth: true },
    },
    {
        path: "/coinPage",
        name: "CoinPage",
        component: CoinPage,
        meta: { requiresAuth: true },
    },
    {
        path: '/coin/:coin',
        name: 'CoinDetail',
        component: CoinDetail,
        props: true,
        meta: { requiresAuth: true },
    },

    // User
    {
        path: "/UserAboutUsPage",
        name: "UserAboutUsPage",
        component: UserAboutUsPage,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// navigation guard to check the role
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");

    if (to.meta.requiresAuth) {
        if(!token) {
            next("/login"); // redirect to login if not authenticated
        } else if (to.meta.role && to.meta.role !== role) {
            next("/login"); // redirect to login if role do not match
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;