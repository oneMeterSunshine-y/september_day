export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/Product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product')
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: () => import('../views/ContactUs')
  },
  {
    path: '/TouchScreenWatch',
    name: 'TouchScreenWatch',
    component: () => import('../views/product/TouchScreenWatch')
  },
  {
    path: '/ButtonWatch',
    name: 'ButtonWatch',
    component: () => import('../views/product/ButtonWatch')
  },
  {
    path: '/BatteryWatch',
    name: 'BatteryWatch',
    component: () => import('../views/product/BatteryWatch')
  },
  {
    path: '/Movement',
    name: 'Movement',
    component: () => import('../views/product/Movement')
  },
  {
    path: '/XGUI_System',
    name: 'XGUI_System',
    component: () => import('../views/product/XGUI_System')
  },
  {
    path: '/BluetoothModule',
    name: 'BluetoothModule',
    component: () => import('../views/product/BluetoothModule')
  },
  {
    path: '/SmartHome',
    name: 'SmartHome',
    component: () => import('../views/product/SmartHome')
  },
  {
    path: '/IntelligentToothbrush',
    name: 'IntelligentToothbrush',
    component: () => import('../views/product/IntelligentToothbrush')
  },
  {
    path: '/IntelligentLamp',
    name: 'IntelligentLamp',
    component: () => import('../views/product/IntelligentLamp')
  },
  {
    path: '/Application',
    name: 'Application',
    component: () => import('../views/product/Application')
  }
]
