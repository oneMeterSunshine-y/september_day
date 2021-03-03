<template>
  <el-amap
    vid="amap"
    :zoom="zoom"
    :amap-manager="amapManager"
    :center="center"
    ref="map"
    class="amap-box"
  >
    <el-amap-marker v-for="(marker, key) in markers" :key="key" :position="marker.position" :label="marker.label">
    </el-amap-marker>
  </el-amap>
</template>

<script>
import AMap from 'vue-amap'
export default {
  name: 'Map',
  data () {
    const amapManager = new AMap.AMapManager();
    return {
      zoom: 17,
      center: [114.012805, 22.98092],
      amapManager: amapManager,
      markers: [
        {
          position: [114.012805, 22.98092],
          label: {
            offset: [-74.5, -36],
            content: '<div style="margin: 5px 10px;color: white;font-weight: 700">九月天电子科技有限公司</div>'
          }
        }
      ]
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
/deep/.amap-marker-label {
  border: 1px solid #4563a2;
  border-radius: 10px;
  background-color: #4f92f0;
}
</style>
