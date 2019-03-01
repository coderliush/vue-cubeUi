<template>
    <div class="wrapper">
      <public-header title="10.1.1 详细查看"></public-header>
      <div class="panel">
        <div class="panel-title">客户及签约信息</div>
        <div class="content">
          <div class="item">
            <p>客户姓名：</p>
            <p>{{cutSignInfo.cutName}}({{cutSignInfo.cutSex}})</p>
          </div>
          <div class="item">
            <p>手机号：</p>
            <p class="phone"><img src="../common/image/phone-2x.png" alt=""><span>拨打电话</span></p>
          </div>
          <div class="item">
            <p>证件类型：</p>
            <p>{{cutSignInfo.cutNoType}}</p>
          </div>
          <div class="item">
            <p>证件信息：</p>
            <p>{{cutSignInfo.cutNo}}</p>
          </div>
          <div class="item">
            <p>证件有效期：</p>
            <p>{{cutSignInfo.cutNoTypeValidity}}</p>
          </div>
          <div class="item">
            <p>签约日期：</p>
            <p>{{cutSignInfo.signDate}}</p>
          </div>
          <div class="item">
            <p>入住日期：</p>
            <p>{{cutSignInfo.checkInDate}}</p>
          </div>
          <div class="item">
            <p>签约服务中心：</p>
            <p>{{cutSignInfo.signServeCenter}}</p>
          </div>
          <div class="item">
            <p>签约地址：</p> 
            <p>{{cutSignInfo.signAddress}}</p>
          </div>
          <div class="item">
            <p>房租单价（普通）：</p>
            <p>{{cutSignInfo.signRentPrice}}</p>
          </div>
          <div class="item">
            <p>房租单价（VIP）：</p>  
            <p>{{cutSignInfo.signRentPriceVIP}}</p>
          </div>
          <div class="item">
            <p>调价劵：</p>
            <p>{{cutSignInfo.djustPriceTicket}}</p>
          </div>
          <div class="item">
            <p>押金单价：</p>
            <p>{{cutSignInfo.pledgePrice}}</p>
          </div>
          <div class="item">
            <p>VIP补贴单价：</p>
            <p>{{cutSignInfo.allowanceVIP}}</p>
          </div>
          <div class="item">
            <p>合同编号：</p>
            <p>{{cutSignInfo.contractNo}}</p>
          </div>
          <div class="item">
            <p>签约房管员：</p>
            <p>{{cutSignInfo.signFGY}}</p>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">贷款信息</div>
        <div class="content">
          <div class="item">
            <p>分期类型：</p>
            <p>{{loanInfo.loanType}}</p>
          </div>
          <div class="item">
            <p>分期期限：</p>
            <p>{{loanInfo.loanTimes}}</p>
          </div>
          <div class="item">
            <p>申请金额：</p>
            <p>{{loanInfo.applyPrice}}</p>
          </div>
          <div class="item">
            <p>可申请分期金额：</p>
            <p>{{loanInfo.applyPassPrice}}</p>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">责任人信息</div>
        <div class="content">
          <div class="item">
            <p>第一责任人：</p>
            <p>{{managerInfo.firstManagerName}}</p>
          </div>
          <div class="item">
            <p>岗位：</p>
            <p>{{managerInfo.firstManagerPosition}}</p>
          </div>
          <div class="item">
            <p>所在服务中心：</p>
            <p>{{managerInfo.firstManagerServeCenterName}}</p>
          </div>
          <div class="item">
            <p>所在分公司：</p>
            <p>{{managerInfo.firstManagerCompanyName}}</p>
          </div>
          <div class="item">
            <p>第二责任人：</p>
            <p>{{managerInfo.secondManagerName}}</p>
          </div>
          <div class="item">
            <p>岗位：</p>
            <p>{{managerInfo.secondManagerPosition}}</p>
          </div>
          <div class="item">
            <p>所在服务中心：</p>
            <p>{{managerInfo.secondManagerServeCenterName}}</p>
          </div>
          <div class="item">
            <p>所在分公司：</p>
            <p>{{managerInfo.secondManagerCompanyName}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import PublicHeader from 'components/header'
import { detail } from 'services/api'
export default {
  name: '',
  data() {
    return {
      cutSignInfo: {},
      loanInfo: {},
      managerInfo: {},
    }
  },
  components: {
    PublicHeader
  },
  async mounted() {
    const res = await this.$http.post(detail, {loanId})
    this.cutSignInfo = res.cutSignInfo
    this.loanInfo = res.loanInfo
    this.managerInfo = res.managerInfo
  }
}
</script>

<style scoped lang="less">
@import '~common/style/variable';
  .wrapper {
    font-size: @font-normal;
    .panel {
      margin: 0 10px 12px 10px;
      border: 1PX solid @border-light;
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
        padding: 10px 16px;
        border-top: 1px solid @border-light;
        .item {
          display: flex;
          p:nth-child(1) {
            color: @color-sup;
            min-width: 160px;
          }
          .phone {
            display: flex;
            align-items: center;
            color: @yellow;
            text-decoration: underline;
            img {
              width: 16px;
              margin-right: 4px;
            }
          }
          .red {
            color: red;
          }
        }
        p {
          padding: 6px 0;
        }
      }
    }
  }
</style>



