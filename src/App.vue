<template>
  <div id="app">
    <el-collapse-transition>
      <div v-if="navShow" id="nav">
        <div class="logo">
          <img src="./assets/images/logo.png">
        </div>
        <div class="menu">
          <a>
            <router-link to="/">主页</router-link>
          </a>
          <a>
            <router-link to="/Product">产品信息</router-link>
          </a>
          <a>
            <router-link to="/ContactUs">联系我们</router-link>
          </a>
        </div>
      </div>
    </el-collapse-transition>
    <div style="height: 74px"></div>
    <router-view/>
    <div id="copyright">
      <div class="inner">
        <div>东莞九月天电子科技有限公司</div>
        <div>Copyright © 2014-2020 SIGNAL ELECTRONIC TECHNOLOGIES CO.,LTD. All Rights Reserved</div>
        <div><a target="_blank" href="http://beian.miit.gov.cn/">粤ICP备2020118393号</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navShow: true,
      scTop: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.headNavScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.headNavScroll)
  },
  methods: {
    headNavScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.scTop > 100) {
        this.navShow = this.scTop > scrollTop
      }
      this.scTop = scrollTop
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/reset.css";
  @import "assets/css/public.scss";

  #app {
    font-family: "PingFang HK", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    #nav {
      display: flex;
      text-align: left;
      padding: 0 200px;
      background-color: #4d498c;
      font-size: 0;
      height: 74px;
      position: fixed;
      z-index: 10;
      width: -webkit-fill-available;

      .menu {
        margin-left: auto;
        align-self: center;
        white-space: nowrap;
        font-size: 16px;

        a {
          color: #fff;
          cursor: pointer;
          padding: 0 15px;
        }
      }
    }

    #copyright {
      position: relative;
      background-position: center;
      background-image: url("./assets/images/copyright.png");
      background-repeat: no-repeat;
      padding: 30px 0;
      margin-top: 30px;

      .inner {
        line-height: 24px;
      }
    }
  }
</style>
