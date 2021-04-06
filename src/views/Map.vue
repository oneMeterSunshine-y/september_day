<template>
  <div>
    <div id="container"></div>
    <div id="reset_bounds" @click="reset_bounds">aaa</div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
  name: 'Map',
  data() {
    return {
      zoom: 16,
      center: [114.012599, 22.980948],
      content: '<div class="september_text">九月天电子科技有限公司</div>',
      img: require('../assets/images/poi-marker-default.png'),
      AMap: null,
      map: null
    }
  },
  mounted() {
    this.mapInit()
  },
  methods: {
    mapInit() {
      AMapLoader.load({
        key: '77b540b66d288335f87cc3ec9faa606b',
        version: '2.0',
        plugins: []
      }).then((AMap) => {
        const map = new AMap.Map('container', {
          resizeEnable: true, // 是否监控地图容器尺寸变化
          zoom: this.zoom, // 初始化地图层级
          center: this.center // 初始化地图中心点
        });
        const marker = new AMap.Marker({
          icon: new AMap.Icon({
            size: new AMap.Size(23.4, 30), // 图标大小
            image: this.img
          }),
          position: this.center,
          offset: new AMap.Pixel(-5, -26),
          label: {
            content: this.content,
            direction: 'top'
          }
        });
        map.add(marker)
        this.AMap = AMap;
        this.map = map
      }).catch(e => {
        console.log(e, '112'); // 设置
      })
    },
    reset_bounds() {
      console.log(123)
      // 通过 new AMap.Bounds(southWest:LngLat, northEast:LngLat) 或者 map.getBounds() 获得地图Bounds信息
      var mybounds = new this.AMap.Bounds([114.024905, 22.987547], [113.999735, 22.970182]);
      this.map.setBounds(mybounds);
    }
  }
}
</script>

<style scoped lang="scss">
#container {
  height: 500px;
  /deep/ .amap-marker-label {
    padding: 5px 10px;
    background-color: red;
    border-radius: 10px;
    border: none;
  }
  /deep/ .september_text {
    color: white;
    font-weight: 700;
    white-space: nowrap;
  }
}
/deep/ .amap-icon img {
  height: 100%;
  left: 0;
}
</style>
