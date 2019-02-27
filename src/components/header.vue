<template>
  <div class="header">
    <span class="back">
      <i class="cubeic-back"></i>返回
    </span>
    <span>{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="less">
@import '~common/style/variable';
  .header {
    font-size: @font-bigger;
    margin-bottom: 10px;
    padding: 16px;
    text-align: center;
    background: @green;
    color: #fff;
    .back {
      position: absolute;
      left: 20px;
    }
  }
</style>
