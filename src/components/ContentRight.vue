<template>
    <div class="content_right">
      <div class="content_right_title">产品信息</div>
      <div v-for="(v, k) in right_cont" :key="k" class="content_right_cell">
        <router-link :to="v.to">
          <div class="content_right_cell_text">{{v.text}}</div>
        </router-link>
        <div v-if="k !== right_cont.length - 1" class="content_right_cell_line"></div>
      </div>
      <div style="height: 60px"></div>
      <div class="content_right_title">联系我们</div>
      <div class="content_right_text">公司名：九月天电子科技有限公司</div>
      <div class="content_right_text">地址：东莞市常平镇横江厦星汇置地广场2栋704A</div>
      <div class="content_right_text">网站：http://www.signal-etech.com/</div>
      <div class="content_right_text">联系人：刘先生</div>
      <div class="content_right_text">联系电话：13549399938 （微信同号）</div>
      <div class="content_right_text">邮箱:Athos_liu@signal-etech.com</div>
      <div class="wechat">
        <div class="wechat_text">微信</div>
        <img src="../assets/images/WeChat_qr_code.png">
      </div>
    </div>
</template>

<script>
export default {
  name: 'ContentRight',
  data () {
    return {
      right_cont: [
        { to: '/TouchScreenWatch', text: '智能彩屏方案-全触全圆款' },
        { to: '/ButtonWatch', text: '智能彩屏方案-按键款' },
        { to: '/BatteryWatch', text: '钮扣电池智能手表' },
        { to: '/Movement', text: '智能手表机芯部件' },
        { to: '/XGUI_System', text: 'XGUI手表系统' },
        { to: '/BluetoothModule', text: 'BQB认证蓝牙模块' },
        { to: '/SmartHome', text: '智能家居，智能小家电方案' },
        { to: '/IntelligentToothbrush', text: '智能电动牙刷方案' },
        { to: '/IntelligentLamp', text: '超远距离户外人体感应灯方案' },
        { to: '/Application', text: '应用APP' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .content_right {
    text-align: left;
    &_title {
      font-size: 28px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    &_cell {
      &_text {
        display: inline-block;
        font-size: 16px;
        color: #4d4d4d;
        margin: 10px 0;
        &:hover {
          color: #50abf1;
        }
      }
      &_line {
        border-top: 1px solid #d1d1d1;
        width: 230px;
      }
    }
    .content_right_text {
      font-size: 16px;
      color: #4d4d4d;
      margin: 10px 0;
    }
    .wechat {
      width: 104px;
      .wechat_text {
        text-align: center;
        margin-top: 20px;
        color: #4d4d4d;
        font-size: 14px;
      }
    }
  }
</style>
