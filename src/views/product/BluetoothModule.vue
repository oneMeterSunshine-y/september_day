<template>
    <div class="bluetoothModule">
      <Headline :head_data="head_data"/>
      <div class="content">
        <div class="content_left">
          <div class="content_left_text">
            产品优势：<br>
            标准UART接口，其它接口可定制<br>
            AT命令支持<br>
            超低功耗设计<br>
            蓝牙BQB认证证书<br>
          </div>
          <img v-for="(v, k) in imgSrc" :key="k" :src="v.src" >
          <div class="content_left_text_h4">
            <h4>BQB测试结果</h4>
            <a @click="downloadPDF">点击下载</a>
          </div>
        </div>
        <ContentRight />
      </div>
    </div>
</template>

<script>
import Headline from '../../components/Headline'
import ContentRight from '../../components/ContentRight'
export default {
  name: 'BluetoothModule',
  components: { Headline, ContentRight },
  data () {
    return {
      head_data: { h1: 'BQB认证蓝牙模块', p: 'BQB authenticates bluetooth module' },
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
        this.imgSrc.push({ src: require(`../../assets/images/BluetoothModule/BluetoothModule_${num}.png`) })
      }
    },
    downloadPDF () {
      window.open('http://www.signal-etech.com/BQB.pdf')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/productScss";
  .content_left_text_h4 {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    color: #4d4d4d;
    margin: 10px 0 20px;
    a {
      margin-left: 40px;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: #50abf1;
      }
    }
  }
</style>
