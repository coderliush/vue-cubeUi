<template>
  <div class="wrapper">
    <public-header title="10.1.2 申请进度"></public-header>
    <div class="panel">
      <div class="panel-title">责任人偏差：</div>
      <div class="content">
        <div class="item">
          <div class="time">2018-11-12</div>
          <div class="ball"></div>
          <div class="text">【待申请】</div>
        </div>
        <div class="item">
          <div class="time">2018-11-12</div>
          <div class="ball"></div>
          <div class="text">【待申请】</div>
        </div>
        <div class="item">
          <div class="time">2018-11-12</div>
          <div class="ball"></div>
          <div class="text">【待申请】</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import PublicHeader from 'components/header'
export default {
  name: '',
  data() {
    return {}
  },
  components: {
    PublicHeader
  }
}
</script>

<style scoped lang="less">
@import '~common/style/variable';
  .wrapper {
    font-size: @font-normal;
    .panel {
      margin: 0 10px 12px 10px;
      border: 1PX solid @border-color;
      background: #fff;
      .panel-title {
        margin: 8px 0 8px 8px;
        padding-left: 3px;
        border-left: 3PX solid @green;
        color: @grey;
      }
      .content {
        padding-left: 8px;
        border-top: 1px solid @border-color;
        .item {
          height: 44px;
          display: flex;
          align-items: center;
          .ball {
            position: relative;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid @grey;
            &:before {
              content: '|';
              position: absolute;
              left: 14px;
              top: -15px;
            }
          }

        }
      }
    }
  }
</style>
