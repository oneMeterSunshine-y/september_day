<template>
    <div class="intelligentToothbrush">
      <Headline :head_data="head_data"/>
      <div class="content">
        <div class="content_left">
          <div class="content_left_text">
            产品功能：<br>
            手机控制，调节个性参数，刷牙习惯分析。<br>
            超低功耗<br>
            多种模式可选<br>
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
  name: 'IntelligentToothbrush',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: '智能电动牙刷方案', p: 'Smart electric toothbrush solution' },
      imgSrc: []
    }
  },
  mounted () {
    this.imageSrcText()
  },
  methods: {
    imageSrcText () {
      for (let i = 1; i <= 1; i++) {
        let num = '000000' + i
        num = num.substring(num.length - 2)
        this.imgSrc.push({ src: require(`../../assets/images/IntelligentToothbrush/IntelligentToothbrush_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
</style>
