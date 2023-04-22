import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./assets/css/base.css";
import AppModal from "./components/AppModal.vue";
const app = createApp(App);

app.component("AppModal", AppModal);

app.mount("#app");
