import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHashHistory } from "vue-router"
import HomeComponent from "./pages/home.vue"
import IndexComponent from "./pages/index.vue"
import AboutComponent from "./pages/link.vue"
import WorkingComponent from "./pages/works.vue"


const vuetify = createVuetify({
    components,
    directives,
})

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const Link = { template: '<div>Link</div>' }
const Works = { template: '<div>Works</div>' }

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: IndexComponent },
    { path: '/link', component: AboutComponent },
    { path: '/works', component: WorkingComponent },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(vuetify).use(router).mount('#app')
