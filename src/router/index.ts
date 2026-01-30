import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MarketView from "../views/MarketView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "home", component: HomeView},
        {path: "/Mercado", name: "market", component: MarketView},
        {path: "/Registrar", name: "register", component: RegisterView},
        {path: "/login", name: "login", component: LoginView}
    ]
})

export default router;