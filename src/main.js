import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-teal/theme.css";

import Toolbar from 'primevue/toolbar';

const app = createApp(App)

app.use(PrimeVue);
app.use(PrimeVue, { ripple: true , unstyled: true, ptOptions: { mergeProps: true } });
app.component('Toolbar', Toolbar);
app.use(router)
app.use(store)
app.mount('#app')
