<template>
    <div class="wrapper">
      <public-header title="10.1.1 详细查看"></public-header>
      <div class="panel">
        <div class="panel-title">客户及签约信息</div>
        <div class="content">
          <p>客户姓名：</p>
          <p>手机号：</p>
          <p>证件类型：</p>
          <p>证件信息：</p>
          <p>证件有效期：</p>
          <p>签约日期：</p>
          <p>入住日期：</p>
          <p>签约服务中心：</p>
          <p>签约地址：</p>
          <p>房租单价（普通）：</p>
          <p>房租单价（VIP）：</p>
          <p>调价劵：</p>
          <p>押金单价：</p>
          <p>VIP补贴单价：</p>
          <p>合同编号：</p>
          <p>签约房管员：</p>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">贷款信息</div>
        <div class="content">
          <p>分期类型：</p>
          <p>分期期限：</p>
          <p>申请金额：</p>
          <p>可申请分期金额：</p>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">责任人信息</div>
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




