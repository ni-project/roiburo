import { createApp } from 'vue'
import stylesAppCommon from '@/assets/styles/app.scss'
import App from '@/App.vue'

const app = createApp(App);

app.use(stylesAppCommon);
app.mount('#app');
