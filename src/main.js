import { createApp } from 'vue';

import store from './store';
import App from './App.vue';
import router from './router';
import filters from './filters';
import Notifications from '@kyvg/vue3-notification';

import './assets/main.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Notifications);

app.config.globalProperties.$filters = filters;

app.mount('#app');
