import type { App } from "vue";

import router from "@/plugins/router";
import vuetify from "./vuetify";

export function registerPlugins(app: App) {
  app.use(vuetify);
  app.use(router);
}
