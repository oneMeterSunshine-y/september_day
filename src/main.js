import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAMap from 'vue-amap/src/lib'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAMap)

router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
VueAMap.initAMapApiLoader({
  key: '77b540b66d288335f87cc3ec9faa606b', // 此处的key,在高德开放平台申请
  plugin: ['AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'],
  uiVersion: '1.4.15' // 版本号
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
