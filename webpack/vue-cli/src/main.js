import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import ServerDetails from './ServerDetails.vue'
Vue.component('vue-header', Header);
Vue.component('vue-footer', Footer);
Vue.component('server-details', ServerDetails);


new Vue({
    el: '#app',
    render: h => h(App)
})