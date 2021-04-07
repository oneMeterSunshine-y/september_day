<template>
  <div class="home">
    <div class="banner">
      <el-carousel trigger="click" height="644px" :interval="8000" :autoplay="false">
        <el-carousel-item v-for="(item, k) in banner" :key="k">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="about_us">
      <div class="title">关于我们</div>
      <div class="content">九月天电子科技有限公司（signal-etech）成立于2012年，是一家以蓝牙，BLE， Wifi，2.4G等电子技术为主的<br>
        高新技术企业。是国内最早进入智能穿戴行业的方案提供商。公司主要产品为智能手环方案PCBA，<br>
        全触彩屏智能手表方案PCBA，智能硬件，智能家居，游戏机周边，小家电等电子产品方案。公司汇聚了一批嵌入式，手机App，<br>
        射频，硬件等各方面的资深人士，致力于为客户提供最专业的产品整体解决方案和个性化的产品定制服务，为客户提供技术保障，<br>
        助推客户加快产品化。为客户创造价值是我们的终身使命。
      </div>
    </div>
    <div class="team_capacity">
      <div class="title">团队能力</div>
      <div class="sub_title">我们善于深入业务，利用丰富的行业通理与产品经验打造落地的穿戴产品。</div>
      <div class="inner">
        <div>
          <i class="el-icon-watch" style="color: #50abf1"></i>
          <div>
            <h4>产品整体方案开发</h4>
            <p>嵌入式软件，硬件PCBA，App，UI等设计开发</p>
          </div>
        </div>
        <div>
          <i class="el-icon-cpu" style="color: #d63d6c"></i>
          <div>
            <h4>PCBA提供</h4>
            <p>为客户提供专业的PCBA生产，测试，品质保障</p>
          </div>
        </div>
        <div>
          <i class="el-icon-office-building" style="color: #715892"></i>
          <div>
            <h4>成品提供</h4>
            <p>为客户全套成品组装出货，测试，品质保障</p>
          </div>
        </div>
        <div>
          <i class="el-icon-menu" style="color: #b169cd"></i>
          <div>
            <h4>App提供</h4>
            <p>为客户开发设计提供IOS，Android, Windows等平台App</p>
          </div>
        </div>
        <div>
          <i class="el-icon-cloudy" style="color: #6cb051"></i>
          <div>
            <h4>售后技术保障</h4>
            <p>产品App维护，产品问题处理，跟进。并为产品提供持续功能升级服务</p>
          </div>
        </div>
      </div>
    </div>
    <div class="employers">
      <div class="title">企业服务</div>
      <div class="sub_title">为了把我们的能力服务于更多的客户，让更多的客户跟我们共同成长，我们有以下服务模式</div>
      <div class="inner">
        <div v-for="(item, k) in employersContent" :key="k">
          <img :src="item.src">
          <h4>{{item.h4}}</h4>
          <p>{{item.p}}</p>
        </div>
      </div>
    </div>
    <div class="product_solution">
      <div class="title">产品方案</div>
      <div class="sub_title">简洁、清晰是最为简洁直观的方式，达成有效的视觉沟通和传播，微小的细节都经过大量设计思维的提炼，
        拒绝一切不切实际的象征意义与所谓内涵，让我们的产品在同样的价格情况下引得起更多火热目光</div>
      <div class="inner">
        <div v-for="(item, k) in product_solution_content" :key="k" class="inner_content" @mouseover="over(k)" @mouseleave="leave(k)">
          <router-link :to="item.to">
            <img :class="{ 'active': active === k}" :src="item.src">
          </router-link>
          <p>{{item.p}}</p>
        </div>
      </div>
      <router-link to="/Product">
        <el-button type="primary" class="el_button">查看更多</el-button>
      </router-link>
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
      <div class="map">
<!--        <img src="../assets/images/map.png">-->
        <mapElement></mapElement>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      banner: [
        require('../assets/images/banner-3.png'),
        require('../assets/images/banner-1.png'),
        require('../assets/images/banner-2.png'),
        require('../assets/images/banner-4.png')
      ],
      employersContent: [
        {
          src: require('../assets/images/employers-1.jpg'),
          h4: '整机批发定制',
          p: '重新定义手环，批发主要面向中小型批发商，礼品单客户'
        },
        {
          src: require('../assets/images/employers-4.png'),
          h4: '1 + N 深度定制方案',
          p: '独家授权，独家外观，甚至独家功能，通过深度定制给予客户最大个性化支持'
        },
        {
          src: require('../assets/images/employers-5.png'),
          h4: '低功耗蓝牙产品定制方案',
          p: '基于大量穿戴产品设计的积累，我们已经掌握了ID设计 + APP + 蓝牙硬件 + 定制后台服务的全链条，可以为客户定制全套蓝牙智能控制产品'
        }
      ],
      product_solution_content: [
        {
          to: '/TouchScreenWatch',
          src: require('../assets/images/smart_bracelet_watch.png'),
          p: '智能手环手表'
        },
        {
          to: '/XGUI_System',
          src: require('../assets/images/XGUI_watch_system.png'),
          p: 'XGUI手表系统'
        },
        {
          to: '/SmartHome',
          src: require('../assets/images/smart_hardware_smart_home.png'),
          p: '智能硬件智能家居'
        }
      ],
      active: false
    }
  },
  methods: {
    over (k) {
      this.active = k
    },
    leave () {
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .about_us {
      padding: 90px 0;
      .content {
        font-size: 22px;
        line-height: 40px;
      }
    }
    .team_capacity {
      background-color: #f6f6fc;
      padding: 90px 0;
      .inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1200px;
        margin: 0 auto;
        > div {
          width: 33.33333333%;
          i {
            margin: 26px 0 24px;
            border: 1px solid;
            border-radius: 5px;
            padding: 10px;
            font-size: 48px;
          }
          h4 {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 20px;
            color: #444;
          }
          p {
            font-size: 16px;
            line-height: 24px;
            margin: 24px 20px;
            font-weight: 300;
          }
        }
      }
    }
    .employers {
      background-color: #f6f6fc;
      padding: 90px 0;
      .inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        > div {
          width: 30%;

          img {
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 16px 38px -12px rgba(78, 70, 145, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
            margin-bottom: 30px;
          }
          h4 {
            margin-bottom: 15px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #4a4a4a;
          }
          p {
            text-align: left;
            color: #676767;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
    .product_solution {
      padding: 90px 0;
      .inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        .inner_content {
          width: 30%;
          img {
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 16px 38px -12px rgba(78, 70, 145, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
            margin-bottom: 30px;
          }
          p {
            color: #4a4a4a;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
      .el_button {
        margin-top: 40px;
      }
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
        /*width: 500px;*/
        height: 500px;
        img {
          width: 100%;
          height: 100%;
          /*object-fit: cover;*/
        }
      }
    }
  }
</style>
