import { createApp } from "vue";
import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "toastr/build/toastr.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router).use(AOS.init()).mount("#app");
