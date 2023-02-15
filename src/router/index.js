import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome"
import Chatroom from "../views/Chatroom"
import {auth} from "../firebase/config"

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter(to, from, next) {
      let user = auth.currentUser;
      if (!user) {
        next(); //permit enter route
      } else {
        next({ name: "Chatroom" });
      }
    },
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter(to, from, next) {
      let user = auth.currentUser;
      if (user) {
        next(); //permit enter route
      } else {
        next({ name: "Welcome" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
