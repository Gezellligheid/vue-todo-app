import { createApp, App } from 'vue';
import AppComponent from './App.vue';
import './assets/styles/tailwind.css';
import Router from './bootstrap/router';

const app: App = createApp(AppComponent);
app.use(Router);
app.mount('#app');
