<template>
  <div class="Headline">
    <div class="banner">
      <div class="the_text">
        <h1>{{head_data.h1}}</h1>
        <p>{{head_data.p}}</p>
      </div>
      <img src="../assets/images/banner.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    head_data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 500px;
  .the_text {
    position: absolute;
    left: 50%;
    top: 22%;
    transform: translate(-50%, -50%);
    color: #fff;
    h1 {
      white-space: nowrap;
      font-size: 56px;
      line-height: 1.25;
      margin: 20px auto 10px;
      font-weight: 500;
    }
    p {
      font-size: 16px;
      margin: 0 auto;
      line-height: 1.8;
    }
  }
  img {
    height: 500px;
    object-fit: none;
    object-position: bottom;
  }
}
</style>
