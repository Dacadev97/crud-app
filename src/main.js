import { createApp } from "vue";
import "./index.css";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
createApp(App).mount("#app");
