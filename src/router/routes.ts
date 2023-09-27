import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import AccessType from "@/access/access-type";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import * as path from "path";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
  },
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    children: [
      {
        path: "/",
        name: "题目",
        component: HomeView,
      },
      {
        path: "/noAuth",
        name: "无权限",
        component: NoAuthView,
        meta: {
          hide: true,
        },
      },
      {
        path: "/admin",
        name: "管理",
        component: AdminView,
        meta: {
          access: AccessType.ADMIN,
        },
      },
      {
        path: "/about",
        name: "关于",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];
