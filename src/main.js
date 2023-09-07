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
import WorkingIllustrationComponent from "./pages/works/illust.vue"
import WorkingETCComponent from "./pages/works/etc.vue"
import WorkingDojoComponent from "./pages/works/dojo.vue"
import VueWorkDojoComponent from "./pages/works/VueDojo/dojoworks/work1.vue"
import VueWorkDojo2Component from "./pages/works/VueDojo/dojoworks/work2.vue"
import HTMLDojoComponent from "./pages/works/HTMLDojo/html/htmlDojorevues.vue"
import HTMLDojo2Component from "./pages/works/HTMLDojo/html/htmlDojorevues_2.vue"




const vuetify = createVuetify({
    components,
    directives,
})

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const Link = { template: '<div>Link</div>' }
const Works = { template: '<div>Works</div>' }
const Willust = { template: '<div>Illust</div>' }
const Wetc = { template: '<div>etc</div>' }
const WDojo = { template: '<div>Dojo</div>' }
const VueWorkDojo = { template: '<div>VueWorks1</div>' }
const VueWorkDojo2 = { template: '<div>VueWorks2</div>' }
const HTMLDojo = { template: '<div>HTMLDojo</div>' }
const HTMLDojo2 = { template: '<div>HTMLDojo2</div>' }




const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: IndexComponent },
    { path: '/link', component: AboutComponent },
    { path: '/works', component: WorkingComponent },
    { path: '/works/illust', component: WorkingIllustrationComponent },
    { path: '/works/etc', component: WorkingETCComponent },
    { path: '/works/dojo', component: WorkingDojoComponent },
    { path: '/works/VueDojo/dojoworks/work1', component: VueWorkDojoComponent },
    { path: '/works/VueDojo/dojoworks/work2', component: VueWorkDojo2Component },
    { path: '/works/HTMLDojo/html/htmlDojorevues', component: HTMLDojoComponent },
    { path: '/works/HTMLDojo/html/htmlDojorevues_2', component: HTMLDojo2Component },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(vuetify).use(router).mount('#app')
