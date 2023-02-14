import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css"
import {auth} from './firebase/config';
let app;
auth.onAuthStateChanged(() => {//connect firebase auth library
    if (!app) { // when app is empty = once refresh
         app =createApp(App).use(router).mount("#app");
    }
})
