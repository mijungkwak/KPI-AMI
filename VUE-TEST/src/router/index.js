import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Login.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/main",
        name: "main",
        component: () =>
            import ("../components/main.vue")
    },
    {
        path: "/autoreset",
        name: "autoreset",
        component: () =>
            import ("../components/autoreset.vue")
    },
    {
        path: "/admin",
        name: "admin",
        component: () =>
            import ("../components/admin.vue")
    },
    {
        path: "/reservation/:id?",
        name: "reservation",
        component: () =>
            import ("../components/reservation.vue")
    },
    {
        path: "/Login",
        name: "Login",
        component: () =>
            import ("../components/Login.vue")
    },
    {
        path: "/Register",
        name: "Register",
        component: () =>
            import ("../components/Register.vue")
    },
    {
        path: "/mypage",
        name: "mypage",
        component: () =>
            import ("../components/mypage.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    //fallback: true,
    routes
});

export default router;