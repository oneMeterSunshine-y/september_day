<template>
  <div class="product">
    <Headline :head_data="head_data"/>
    <div v-for="(v, k) in Pro_content" :key="k" class="product_content">
      <h4>{{v.h4}}</h4>
      <div class="cont_flex">
        <div v-for="(vv, kk) in v.cont" :key="kk" class="cont_flex_on" @mouseover="over(k, kk)" @mouseleave="leave(k, kk)">
          <router-link :to="vv.to">
            <img :class="{ 'active': active === kk && sum === k}" :src="vv.image">
          </router-link>
          <p>{{vv.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '../components/Headline'

export default {
  name: 'Product',
  components: { Headline },
  data () {
    return {
      head_data: { h1: '产品信息', p: 'Product information' },
      Pro_content: [
        {
          h4: '智能手环手表方案',
          cont: [
            { to: '/TouchScreenWatch', image: require('../assets/images/smart_bracelet_watch.png'), name: '智能彩屏方案-全触全圆款' },
            { to: '/ButtonWatch', image: require('../assets/images/smart_bracelet_watch_2.png'), name: '智能彩屏方案-按键款' },
            { to: '/BatteryWatch', image: require('../assets/images/smart_bracelet_watch_3.png'), name: '纽扣电池智能手表' },
            { to: '/movement', image: require('../assets/images/smart_bracelet_watch_4.png'), name: '智能手表机芯部分' }
          ]
        },
        {
          h4: 'XGUI手表系统',
          cont: [
            { to: '/XGUI_System', image: require('../assets/images/XGUI_watch_system.png'), name: 'XGUI手表系统' }
          ]
        },
        {
          h4: '智能硬件智能家居方案',
          cont: [
            { to: '/BluetoothModule', image: require('../assets/images/smart_hardware_smart_home.png'), name: 'BQB认证蓝牙模块' },
            { to: '/SmartHome', image: require('../assets/images/smart_hardware_smart_home_2.png'), name: '智能家居，智能小家电方案' },
            { to: '/IntelligentToothbrush', image: require('../assets/images/smart_hardware_smart_home_3.png'), name: '智能电动牙刷方案' }
          ]
        },
        {
          h4: '智能灯/感应灯方案',
          cont: [
            { to: '/IntelligentLamp', image: require('../assets/images/Intelligent_lamp.png'), name: '超远距离户外人体感应灯方案' }
          ]
        },
        {
          h4: '应用APP',
          cont: [
            { to: '/Application', image: require('../assets/images/Application.png'), name: '应用APP' }
          ]
        }
      ],
      active: false,
      sum: false
    }
  },
  methods: {
    over (k, kk) {
      this.sum = k
      this.active = kk
    },
    leave () {
      this.sum = false
      this.active = false
    }
  }
}
</script>

<style lang="scss">
  .product {
    .product_content {
      margin: 60px auto;
      h4 {
        font-size: 48px;
        font-weight: 500;
        color: #4d488b;
        margin-bottom: 50px;
      }
      .cont_flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 88%;
        margin: 0 auto;
        &_on {
          margin: 0 20px;
          img {
            width: 389px;
            height: 291px;
            border-radius: 5px;
            box-shadow: 0 16px 38px -12px rgba(78, 70, 145, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
            margin-bottom: 30px;
            object-fit: cover;
          }
          p {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
</style>
