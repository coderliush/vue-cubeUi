<template>
  <div class="wrapper">
    <public-header title="申请进度"></public-header>
    <div class="panel">
      <div class="panel-title">查看进度</div>
      <div class="content" v-for="(item, index) in res" :key="index">
        <div class="time">
          <p>{{item.statusTime}}</p>
        </div>

        <div class="status">
          <img :src="item.src" alt="">
        </div>

        <div class="text">
          <p>{{item.statusName}}</p>
          <p>责任人：{{item.statusManager}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import PublicHeader from 'components/header'
import api from 'services/api'
export default {
  name: '',
  data() {
    return {
      res: [],
    }
  },
  methods: {
  },
  async mounted() {
    this.params = window.fgyApp ? JSON.parse(window.fgyApp.getParams()) : {
      loanId: 245265,
    }
    this.res = await this.$http.post(api.progress, {loanId: this.params.loanId})
    this.res.forEach((item, index) => {
      if (!item.statusManager || item.statusManager === '-') {
        item.src = require('../common/image/doing-2x.png')
      } else {
        item.src = require('../common/image/done-2x.png')
      }
    })
  },
  components: {
    PublicHeader
  },
}
</script>

<style scoped lang="less">
@import '~common/style/variable';
  .panel .content:nth-child(2) {
    border-top: 1PX solid @border-light;
    padding-top: 10px;
  }

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
        font-weight: bold;
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
        margin-top: -1PX;
        div {
          display: flex;
          height: 60px;
        }
        .time {
          min-width: 100px;
          padding-right: 12px;
          font-size: @font-smaller;
          align-items: center;
          color: @color-sup;
          border-right: 1PX solid @border-deep;
          p {
            margin: 0 auto;
          }
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
            margin-bottom: 6px;
          }
        }
      }
    }
  }
</style>

