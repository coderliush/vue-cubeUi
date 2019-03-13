<template>
  <div class="header" @click="back">
    <span class="back">
      <i class="cubeic-back"></i>
      <span>返回</span>
    </span>
    <span class="title">{{title}}</span>
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
  methods:{
  back() {
    window.fgyApp.back()
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
@import '~common/style/variable';
  .header {
    font-size: @font-bigger!important;
    margin-bottom: 10px;
    padding: 18px;
    text-align: center;
    background: @green;
    color: #fff;
    .back {
      position: absolute;
      left: 12px;
      display: flex;
      align-items: center;
      .cubeic-back::before {
        font-size: 22px;
      }
      span {
        font-size: 15px;
      }
    }
    .title {
      font-size: @font-bigger;
    }
  }
</style>
