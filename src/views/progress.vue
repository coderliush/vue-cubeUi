<template>
  <div class="wrapper">
    <public-header title="10.1.2 申请进度"></public-header>
    <div class="panel">
      <div class="panel-title">查看进度：</div>
      <div class="content">
        <div class="time">
          <p>2018/11/12</p>
        </div>

        <div class="status">
          <img src="../common/image/done-2x.png" alt="">
        </div>

        <div class="text">
          <p>待申请</p>
          <p>责任人：张</p>
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
      border: 1PX solid @color-line;
      background: #fff;
      .panel-title {
        display: flex;
        justify-content: space-between;
        margin: 13px 0 13px 8px;
        padding-left: 6px;
        border-left: 3PX solid @red;
        > p {
          font-size: @font-smaller;
          color: @color-sup;
          position: relative;
          top: 2px;
          span {
            color: @yellow;
          }
        }
      }
      .content {
        display: flex;
        border-top: 1px solid @color-line;
        padding: 10px 16px;
        div {
          display: flex;
          height: 60px;
        }
        .time {
          padding-right: 12px;
          font-size: @font-smaller;
          align-items: center;
          color: @color-sup;
          border-right: 1PX solid @color-line;
        }
        .status {
          align-items: center;
          img {
            width: 18px;
            height: 18px;
            position: relative;
            left: -9px;
          }
        }
        .text {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
</style>

