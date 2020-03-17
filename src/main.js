import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './Homepage.vue'
import About from './About.vue'

import Language from './components/Language.vue'
import Python from './components/Arnold/Python.vue'
import Java from './components/Arnold/Java.vue'
import Js from './components/Arnold/Javascript.vue'

import Afterlog from './components/Arnold/Afterlogin.vue'

import Log from './components/Nicole/Login.vue'
import Register from './components/Nicole/Register.vue'
import Account from './components/Nicole/Account.vue'

import CS1010 from './components/JiaXuan/CS1010S.vue'
import Proglang from './components/JiaXuan/Proglang.vue'


import btn from './components/Vicki/Button.vue'
import diff1 from './components/Vicki/Diff1.vue'
import diff2 from './components/Vicki/Diff2.vue'
import diff3 from './components/Vicki/Diff3.vue'



import Exercise from './components/Exercise.vue'
import Page2 from './components/Charlotte/Page2.vue'
import Page3 from './components/Charlotte/Page3.vue'

Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

const router = new VueRouter ({
  routes: [
    {path: '/', component: HomePage},
    {path: '/about', component: About},
    {path: '/language',component:Language},
    {path: '/language/python', component:Python},
    {path: '/language/java', component:Java},
    {path: '/language/javascript', component:Js},
    {path: '/reg', component: Register},
    {path: '/log', component: Log},
    {path: '/cs', component:CS1010},
    {path: '/proglang', component:Proglang},
    {path: '/after', component:Afterlog},
    {path: '/btn', component:btn},
    {path: '/diff1', component:diff1},
    {path: '/diff2', component:diff2},
    {path: '/diff3', component:diff3},
    {path: '/exercise', component:Exercise},
    {path: '/page2', component:Page2},
    {path: '/page3', component:Page3},
    {path: '/after/account', component:Account}
  ],
  mode: 'history',
  scrollBehavior () {
    window.scrollTo(0,0);
  }
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
