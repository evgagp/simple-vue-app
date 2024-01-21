import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import axios from "axios";

import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.axios = axios;

registerPlugins(app);

app.mount("#app");
