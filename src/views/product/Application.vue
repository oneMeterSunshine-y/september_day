<template>
    <div class="application">
      <Headline :head_data="head_data"/>
      <div class="content">
        <div class="content_left">
          <div class="content_left_text">
            可根据用户的需求定制与研发，<br>
            拥有一支专业的手机应用软件APP开发团队，<br>
            用心服务 追求卓越品质<br>
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
  name: 'Application',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: '应用APP', p: 'Application' },
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
        this.imgSrc.push({ src: require(`../../assets/images/Application/Application_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
</style>
