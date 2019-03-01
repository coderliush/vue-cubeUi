<template>
  <div class="wrapper">
    <public-header title="业务提醒查看"></public-header>
    <div class="panel">
      <div class="panel-title">不满足条件</div>
      <div class="content">
        <div class="item">
          <p>未退货</p>
          <p class="red">此房间上个客户未退贷</p>
        </div>
        <div class="item">
          <p>未签华瑞协议</p>
          <p class="red">华瑞协议未签</p>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">责任人偏差</div>
      <div class="content">
        <img src="../common/image/first-people-2x.png" alt="">
        <div class="item">
          <p>第一责任人</p>
          <p>{{managerInfo.firstManagerName}}</p>
        </div>
        <div class="item">
          <p>岗位</p>
          <p>{{managerInfo.firstManagerPosition}}</p>
        </div>
        <div class="item">
          <p>所在服务中心</p>
          <p>{{managerInfo.firstManagerServeCenterName}}</p>
        </div>
        <div class="item">
          <p>所在分公司</p>
          <p>{{managerInfo.firstManagerCompanyName}}</p>
        </div>
        <img src="../common/image/second-people-2x.png" alt="">
        <div class="item">
          <p>第二责任人</p>
          <p>{{managerInfo.secondManagerName}}</p>
        </div>
        <div class="item">
          <p>岗位</p>
          <p>{{managerInfo.secondManagerPosition}}</p>
        </div>
        <div class="item">
          <p>所在服务中心</p>
          <p>{{managerInfo.secondManagerServeCenterName}}</p>
        </div>
        <div class="item">
          <p>所在分公司</p>
          <p>{{managerInfo.secondManagerCompanyName}}</p>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">待申请告警
        <p>（入住日期为始，超过告警设置天数<span>X</span>未办理）</p>
      </div>
      <div class="content">
        <div class="item">
          <p>客户入住日期：</p>
          <p class="red">已超期天数</p>
        </div>
        <div class="item">
          <p>已超期天数：</p>
          <p class="red">5天</p>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">待申请超时
        <p>（入住日期为始，超过告警设置天数<span>X</span>未办理）</p>
      </div>
      <div class="content">
        <div class="item">
          <p>客户入住日期：</p>
          <p>2019-02-10</p>
        </div>
        <div class="item">
          <p>已超期天数：</p>
          <p class="red">1天</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PublicHeader from 'components/header'
import {detail, remind} from 'services/api'
export default {
  name: '',
  data() {
    return {}
  },
  mounted() {
    const res = await this.$http.post(detail, {loanId})
    const getSysCfgList = await this.$http.post(remind, {key: LOAN_WAIT_APPLY})
    this.managerInfo = res.managerInfo
    this.getSysCfgList = getSysCfgList
    
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
      border: 1PX solid @border-deep;
      background: #fff;
      .panel-title {
        display: flex;
        justify-content: space-between;
        margin: 13px 0 13px 8px;
        padding-left: 6px;
        border-left: 3PX solid @green;
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
        border-top: 1px solid @border-light;
        img {
          width: 100px;
          padding: 10px 16px 0 16px;
        }
        .item {
          padding: 13px 16px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1PX solid @border-light;
          .red {
            color: red;
          }
        }
      }
    }
  }
</style>
