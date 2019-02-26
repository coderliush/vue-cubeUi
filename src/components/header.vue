<template>
  <div class="header">
    <i class="cubeic-back"></i>
    <span class="back">返回</span>
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
  .header {
    padding: 6px;
    text-align: center;
    .back {
      float: left
    }
  }
</style>
