<template>
    <div class="smartHome">
      <Headline :head_data="head_data"/>
      <div class="content">
        <div class="content_left">
          <div class="content_left_text">
            WIFI，蓝牙连接，手机控制<br>
            微信物联支持<br>
            智能互动<br>
            定时开关<br>
            语音控制<br>
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
  name: 'SmartHome',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: '智能家居，智能小家电方案', p: 'Smart home, smart home appliances' },
      imgSrc: []
    }
  },
  mounted () {
    this.imageSrcText()
  },
  methods: {
    imageSrcText () {
      for (let i = 1; i <= 3; i++) {
        let num = '000000' + i
        num = num.substring(num.length - 2)
        this.imgSrc.push({ src: require(`../../assets/images/SmartHome/SmartHome_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
</style>
