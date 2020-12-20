import { createApp } from "vue";
import App from "./App.vue";
import BaseLayout from "./pages/base/BaseLayout.vue";
import router from "./router";
import store from "./store";

import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

app.component("base-layout", BaseLayout);

app.config.globalProperties.$filters = {
  toDate(value) {
    if (!value) {
      return "";
    }
    const date = new Date(value.seconds * 1000);
    return `${date.getFullYear()}-${this.formatNumber(date.getMonth() + 1)}-${this.formatNumber(date.getDate())} ${this.formatNumber(date.getHours())}:${this.formatNumber(date.getMinutes())}:${this.formatNumber(date.getSeconds())}`;
  },
  formatNumber(value) {
    if (!value) {
      return "";
    }

    return value >= 10 ? value : `0${value}`;
  }
};

router.isReady().then(() => {
  app.mount("#app");
});
