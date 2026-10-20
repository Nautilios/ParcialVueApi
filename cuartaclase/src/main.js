import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//Importar Prime Vue
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import Button from 'primevue/button';
import Skeleton from 'primevue/skeleton';

import MenuComponent from './components/MenuComponent.vue'
import BannerComponent from './components/BannerComponent.vue'
import CardComponent from './components/CardComponent.vue'
import MenuColchones from './components/MenuColchones.vue'
import BannerColchones from './components/BannerColchones.vue'
import CatalogoColchones from './components/CatalogoColchones.vue'
import ComprarColchon from './components/ComprarColchon.vue'
import MisComprasColchones from './components/MisComprasColchones.vue'
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Label from 'primevue/label';

const app = createApp(App).use(router);
//Uso de axios
app.use(VueAxios, axios);

//Usar Prime-Vue
app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
    license: 'PRIMEUI-LICENSE-KEY'
});

app.component("MenuComponent", MenuComponent);
app.component("BannerComponent", BannerComponent);
app.component("CardComponent", CardComponent);
app.component("MenuColchones", MenuColchones);
app.component("BannerColchones", BannerColchones);
app.component("CatalogoColchones", CatalogoColchones);
app.component("ComprarColchon", ComprarColchon);
app.component("MisComprasColchones", MisComprasColchones);
app.component("ButtonPrime", Button);
app.component("InputText", InputText);
app.component("LabelPrime", Label);
app.component("SkeletonPrime", Skeleton);
app.component("DialogPrime", Dialog);

app.mount('#app');
