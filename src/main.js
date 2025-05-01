import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import SequentialEntrance from "vue-sequential-entrance";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "vue-sequential-entrance/vue-sequential-entrance.css";
import axios from "axios";
import VueAxios from "vue-axios";
import JsonExcel from "vue-json-excel";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css"; // import styles
import "quill/dist/quill.snow.css"; // for snow theme
import "quill/dist/quill.bubble.css"; // for bubble theme
import VueApexCharts from "vue-apexcharts";
import VueMask from "v-mask";
import VueGoogleHeatmap from "vue-google-heatmap";
import * as VueGoogleMaps from "vue2-google-maps";
import VueHtmlToPaper from "vue-html-to-paper";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import VueTinySlider from "vue-tiny-slider";
import VueCarousel from "vue-carousel";
import VuePictureSwipe from "vue-picture-swipe";
import FsLightbox from "fslightbox-vue";
import VueMeta from "vue-meta";

// import Vue from 'vue'
import VueI18n from "vue-i18n";
import en from "./locales/en.json";
import th from "./locales/th.json";

Vue.use(VueI18n);
const messages = {
  en: en,
  th: th,
};

const i18n = new VueI18n({
  locale: "th", // set locale
  messages, // set locale messages
});

Vue.component("vue-picture-swipe", VuePictureSwipe);

const options = {
  name: "ข้อมูลการแจ้งเบาะแส",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
    "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
    "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
    "assets/styles.css",
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
};

Vue.use(VueHtmlToPaper, options);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBYRDTWXRbocAOqm5feDp4ilq2y2DJY8V4",
  },
  installComponents: true,
});

// Vue.use(VueGoogleHeatmap, {
//     apiKey: 'AIzaSyBYRDTWXRbocAOqm5feDp4ilq2y2DJY8V4'
// });
// Vue.use(Swiper);
Vue.use(VueCarousel);
Vue.use(VueMask);
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.use(VueQuillEditor /* { default global options } */);

// window.OneSignal = window.OneSignal || [];
// window.OneSignal.push(() => {
//     window.OneSignal.init({
//         appId: process.env.VUE_APP_ONESIGNAL,
//         allowLocalhostAsSecureOrigin: process.env.NODE_ENV !== 'production'
//     });
// });

Vue.component("downloadExcel", JsonExcel);
Vue.use(VueAxios, axios);


const requestTracker = Vue.observable({ activeRequests: 0 });

axios.interceptors.request.use((config) => {
  requestTracker.activeRequests++;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    requestTracker.activeRequests--;
    return response;
  },
  (error) => {
    requestTracker.activeRequests--;
    return Promise.reject(error);
  }
);

Vue.prototype.$requestTracker = requestTracker;


Vue.use(Antd);
Vue.use(SequentialEntrance);
Vue.use(VueSweetalert2);
Vue.use(FsLightbox);
// and then use it in main.js
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: function(h) {
    return h(App);
  },
  components: {
    "tiny-slider": VueTinySlider,
  },
}).$mount("#app");
// new Vue({i18n}).$mount('#app')

Vue.use(VueMeta);
