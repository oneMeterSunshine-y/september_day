<template>
    <div class="intelligentLamp">
      <Headline :head_data="head_data"/>
      <div class="content">
        <div class="content_left">
          <div class="content_left_text">
            产品功能：<br>
            超远距离人体感应，可达25米。<br>
            稳定，不误触发<br>
            自动识别白天夜晚<br>
            灵敏度可调，亮度可调<br>
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
  name: 'IntelligentLamp',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: '超远距离户外人体感应灯方案', p: 'Ultra long distance outdoor body sensing lamp scheme' },
      imgSrc: []
    }
  },
  mounted () {
    this.imageSrcText()
  },
  methods: {
    imageSrcText () {
      for (let i = 1; i <= 2; i++) {
        let num = '000000' + i
        num = num.substring(num.length - 2)
        this.imgSrc.push({ src: require(`../../assets/images/IntelligentLamp/IntelligentLamp_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
</style>
