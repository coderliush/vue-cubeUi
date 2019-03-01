<template>
  <div class="wrapper">
    <public-header title="10.1.2 申请进度"></public-header>
    <div class="panel">
      <div class="panel-title">查看进度：</div>
      <div class="content" v-for="(item, index) in loanProgress" :key="index">
        <div class="time">
          <p>{{item.statusTime}}</p>
        </div>

        <div class="status">
          <img src="../common/image/done-2x.png" alt="">
        </div>

        <div class="text">
          <p>{{item.statusName}}</p>
          <p>{{item.statusManager}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import PublicHeader from 'components/header'
import { progress } from 'services/api'
export default {
  name: '',
  data() {
    return {
      loanProgress: [],
    }
  },
  mounted() {
    const res = await this.$http.post(progress, {loanId})
    this.loanProgress = res.loanProgress
  },
  components: {
    PublicHeader
  },
}
</script>

<style scoped lang="less">
@import '~common/style/variable';
  .wrapper {
    font-size: @font-normal;
    .panel {
      margin: 0 10px 12px 10px;
      border: 1PX solid @border-deep;
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
        border-top: 1PX solid @border-light;
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
          border-right: 1PX solid @border-deep;
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
          border-bottom: 1PX solid @border-light;
          flex: 1;
          p:nth-child(1) {
            margin-bottom: 4px;
          }
        }
      }
    }
  }
</style>

