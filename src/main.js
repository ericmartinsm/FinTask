import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import './plugins/semantic-ui'
import './plugins/observe-visibility'
import 'semantic-ui-css/semantic.min.css';
import '../node_modules/semantic-ui-css/semantic.min.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
