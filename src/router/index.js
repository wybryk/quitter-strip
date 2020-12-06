import { createRouter, createWebHistory } from "@ionic/vue-router";

import BookListPage from "../pages/BookListPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/books",
  },
  {
    path: "/books",
    component: BookListPage,
  },
  {
    path: "/books/:id",
    component: () => import("../pages/BookDetailsPage.vue"),
  },
  {
    path: "/books/add",
    component: () => import("../pages/BookAddPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
