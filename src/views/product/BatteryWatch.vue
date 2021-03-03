<template>
    <div class="batteryWatch">
      <Headline :head_data="head_data"/>
      <div class="content">
        <div class="content_left">
          <div class="content_left_text">
            产品优势：<br>
            传统表厂可直接采购机芯部件，轻松装配出货。<br>
            机芯部件兼容市面上大部分的传统手表表壳。<br>
            保留传统的手表蜂鸣器，按键音，来电信息提示音。<br>
            钮扣电池供电，无需充电，超低功耗，可使用两年。<br>
            蓝牙连接手机，来电及消息推送，遥控拍照。<br>
            手表上可查看步数，里程，卡路里。<br>
            日历，闹钟，秒表，倒计时功能。<br>
            手机App终身维护。<br>
          </div>
          <img v-for="(v, k) in imgSrc" :key="k" :src="v.src" >
        </div>
        <ContentRight />
      </div>
    </div>
</template>

<script>
import Headline from '../../components/Headline'
import ContentRight from '../../components/ContentRight'
export default {
  name: 'BatteryWatch',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: '钮扣电池智能手表', p: 'Button battery smartwatch' },
      imgSrc: []
    }
  },
  mounted () {
    this.imageSrcText()
  },
  methods: {
    imageSrcText () {
      for (let i = 1; i <= 8; i++) {
        let num = '000000' + i
        num = num.substring(num.length - 2)
        this.imgSrc.push({ src: require(`../../assets/images/BatteryWatch/BatteryWatch_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
</style>
