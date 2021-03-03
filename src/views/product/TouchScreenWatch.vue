<template>
  <div class="touchScreenWatch">
    <Headline :head_data="head_data"/>
    <div class="content">
      <div class="content_left">
        <div class="content_left_text">
          产品优势：<br>
          全屏触摸，全圆彩屏，PCB可根据客户定制。<br>
          XGUI手表系统，动画表盘效果，动态壁纸显示。<br>
          多表盘风格，多种主题界面，UI界面可定制。<br>
          菜单可选背景图，可滑屏拖动菜单，拖动时显示流畅。<br>
          计步，睡眠统计，动态心率，音乐控制，指南针，马达振动，GPS可选。<br>
          菜单，手机社交信息显示均可支持12种语系，100多个国家。<br>
          支持公历，农历，伊斯兰历。<br>
          运动，心率，睡眠数据直接在手表上图表查看，统计分析。<br>
          蓝牙连接手机，来电及消息推送，消息内容可保存，并支持多语种，App数据统计分析。<br>
          超低功耗，充电锂电池，待机可达一个月，正常使用二十天。<br>
          手机App终身维护。
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
  name: 'TouchScreenWatch',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: '智能彩屏方案-全触全圆款', p: 'Intelligent color screen scheme - full touch full circle' },
      imgSrc: []
    }
  },
  mounted () {
    this.imageSrcText()
  },
  methods: {
    imageSrcText () {
      for (let i = 1; i <= 4; i++) {
        let num = '000000' + i
        num = num.substring(num.length - 2)
        this.imgSrc.push({ src: require(`../../assets/images/TouchScreenWatch/TouchScreenWatch_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/productScss";
</style>
