<template>
  <div class="wrapper">
    <public-header title="10.1.4业务提醒查看"></public-header>
    <div class="panel">
      <div class="panel-title">不满足条件</div>
      <div class="content">
        <p>未退货：</p>
        <p>未签华瑞协议：</p>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">责任人偏差：</div>
      <div class="content">
        <p>第一责任人：</p>
        <p>第一责任人岗位：</p>
        <p>第一责任人所在服务中心：</p>
        <p>第一责任人所在分公司：</p>
        <p>第二责任人：</p>
        <p>第二责任人岗位：</p>
        <p>第二责任人所在服务中心：</p>
        <p>第二责任人所在分公司：</p>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">待申请告警（入住日期为始，超过告警设置天数未办理）</div>
      <div class="content">
        <p>客户入住日期：</p>
        <p>已超期天数：</p>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">待申请超时（入住日期为始，超过告警设置天数未办理）</div>
      <div class="content">
        <p>客户入住日期：</p>
        <p>已超期天数：</p>
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
        p {
          margin: 6px 0;
        }
      }
    }
  }
</style>
