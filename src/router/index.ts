import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export const menuRoutes = routes.find((route) => route.name === "index");
