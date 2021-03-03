<template>
  <div class="movement">
    <Headline :head_data="head_data"/>
    <div class="content">
      <div class="content_left">
        <div class="content_left_text">
          产品优势：<br>
          机芯部件出货方式，简单易装配，传统手表厂家轻松转型智能手表<br>
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
  name: 'Movement',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: '智能手表机芯部件', p: 'Smart watch movement parts' },
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
        this.imgSrc.push({ src: require(`../../assets/images/Movement/Movement_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
</style>
