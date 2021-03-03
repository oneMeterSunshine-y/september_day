<template>
  <div class="buttonWatch">
    <Headline :head_data="head_data"/>
    <div class="content">
      <div class="content_left">
        <div class="content_left_text">
          产品优势：<br>
          传统表厂可直接采购机芯部件，轻松装配出货。<br>
          机芯部件兼容市面上大部分的传统手表表壳。<br>
          保留传统的手表蜂鸣器，按键音，来电信息提示音及马达震动。<br>
          XGUI手表系统，多表盘风格，多种主题界面，UI界面可定制。<br>
          菜单，手机社交信息显示均可支持12种语系，100多个国家。<br>
          支持公历，农历，伊斯兰历。<br>
          运动，心率，睡眠数据直接在手表上图表查看，统计分析。<br>
          蓝牙连接手机，来电及消息推送，消息可保存，App数据统计分析。<br>
          超低功耗，充电锂电池，待机可达一个月，正常使用二十天。<br>
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
  name: 'ButtonWatch',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: '智能彩屏方案-按键款', p: 'Intelligent color screen scheme - button type' },
      imgSrc: []
    }
  },
  mounted () {
    this.imageSrcText()
  },
  methods: {
    imageSrcText () {
      for (let i = 1; i <= 25; i++) {
        let num = '000000' + i
        num = num.substring(num.length - 2)
        this.imgSrc.push({ src: require(`../../assets/images/ButtonWatch/ButtonWatch_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
</style>
