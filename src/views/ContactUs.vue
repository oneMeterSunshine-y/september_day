<template>
    <div class="contact_Us">
      <Headline :head_data="head_data"/>
      <div class="employers">
        <div class="title">企业服务</div>
        <div class="sub_title">九月天科技，智能穿戴产品专家。我们的团队技术精湛，经验丰富，为客户提供技术保障，
          珠三角范围24小时内抵达服务，致力做好产品保姆。成功路上，期待与您携手同行。</div>
        <img style="width: 1100px" src="../assets/images/jiuyuetian.png">
      </div>
      <div class="contact_us">
        <div class="title">联系我们</div>
        <div class="sub_title">我们秉承"感动常在"的宗旨，诚心诚意为顾客提供专业、优质的服务，欢迎您与我们联系</div>
        <div class="inner">
          <div class="inner_left" >
            <p>公司名：九月天电子科技有限公司</p>
            <p>地址：东莞市常平镇横江厦星汇置地广场2栋704A</p>
            <p>网站：http://www.signal-etech.com/</p>
          </div>
          <div class="inner_center" >
            <p>联系人：刘先生</p>
            <p>联系电话：13549399938 （微信同号）</p>
            <p>邮箱：Athos_liu@signal-etech.com</p>
          </div>
          <div class="inner_right" >
            <div>微信</div>
            <img src="../assets/images/WeChat_qr_code.png" >
          </div>
        </div>
        <div class="map" >
          <img src="../assets/images/map.png">
        </div>
      </div>
    </div>
</template>

<script>
import Headline from '../components/Headline'

export default {
  name: 'ContactUs',
  components: { Headline },
  data () {
    return {
      head_data: { h1: '联系我们', p: 'Contact us' }
    }
  }
}
</script>

<style lang="scss" scoped>
  .employers {
    padding: 90px 0 0;
  }
  .contact_us {
    padding: 90px 0 0;
    .inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 60%;
      margin: 0 auto;
      .inner_left, .inner_center {
        text-align: left;
        font-size: 16px;
        color: #727272;
        p {
          margin: 20px 0;
        }
      }
    }
    .map {
      margin: 40px auto 0;
      width: 98%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
