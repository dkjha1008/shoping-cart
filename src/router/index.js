import { createWebHistory, createRouter } from "vue-router";


import Cart from "../components/cart.vue";



const routes = [

  {
    path: "/",
    name: "cart",
    component: Cart,
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;