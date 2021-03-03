<template>
    <div class="xgui_system">
      <Headline :head_data="head_data"/>
      <div class="content">
        <div class="content_left">
          <div class="content_left_text">
            产品优势：<br>
            XGUI手表系统，九月天自主研发，为彩屏智能手表而生。<br>
            多图层叠加算法，动态壁纸，动画GIF显示，完美展显绚丽的动态手表界面。<br>
            图形绘制，图表，曲线图，饼图，直方图，折线图，全方位展示用户运动、睡眠等状态。<br>
            多主题，多风格菜单界面，动画图标，动画按钮。<br>
            精简算法，实现菜单滑屏拖动，显示效果流畅。<br>
            系统内置12种语系字库，支持几十种字体，一百多个国家语言。<br>
            系统支持阿拉伯文从右到左的菜单及文本风格。<br>
            自研发PC软件，可视化编辑图片，菜单，按钮，字体。轻松为客户定制自己的UI风格。<br>
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
  name: 'XGUI_System',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: 'XGUI手表系统', p: 'XGUI watch system' },
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
        this.imgSrc.push({ src: require(`../../assets/images/XGUI_System/XGUI_System_${num}.png`) })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
</style>
