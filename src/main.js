import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import VueSweetalert2 from 'vue-sweetalert2';

// Vue.use(VueSweetalert2);

// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

// app.use(VueSweetalert2);

createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app')
