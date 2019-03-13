<template>
  <div class="wrapper">
    <public-header title="业务提醒查看"></public-header>
    <div class="panel" v-if="showUnsatisfied">
      <div class="panel-title">不满足条件</div>
      <div class="content">
        <div v-for="(key, value) in this.params.unsatisfiedCondition" :key="value">
          <div class="item">
            <p>{{value}}</p>
            <p class="red">{{key.join()}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" v-if="showPeople">
      <div class="panel-title">责任人偏差</div>
      <div class="content">
        <img src="../common/image/first-people-2x.png" alt="">
        <div class="item">
          <p>第一责任人</p>
          <p>{{params.firstManager}}</p>
        </div>
        <div class="item">
          <p>岗位</p>
          <p>{{params.firstManagerPosition}}</p>
        </div>
        <div class="item">
          <p>所在服务中心</p>
          <p>{{params.firstManagerServeCenter}}</p>
        </div>
        <div class="item">
          <p>所在分公司</p>
          <p>{{params.firstManagerCompany}}</p>
        </div>
        <img src="../common/image/second-people-2x.png" alt="">
        <div class="item">
          <p>第二责任人</p>
          <p>{{params.secendManager}}</p>
        </div>
        <div class="item">
          <p>岗位</p>
          <p>{{params.secendManagerPosition}}</p>
        </div>
        <div class="item">
          <p>所在服务中心</p>
          <p>{{params.secendManagerServeCenter}}</p>
        </div>
        <div class="item">
          <p>所在分公司</p>
          <p>{{params.secendManagerCompany}}</p>
        </div>
      </div>
    </div>

    <div class="panel" v-if="showWarn">
      <div class="panel-title">待申请告警
        <p>（入住日期为始，超过告警设置天数<span>{{this.warnDate}}</span>未办理）</p>
      </div>
      <div class="content">
        <div class="item">
          <p>客户入住日期：</p>
          <p>{{this.params.checkInDate}}</p>
        </div>
        <div class="item">
          <p>已超期天数：</p>
          <p class="red">{{warnDelay}}</p>
        </div>
      </div>
    </div>

    <div class="panel" v-if="showTimeOut">
      <div class="panel-title">待申请超时
        <p>(入住日期为始，超过告警设置天数<span>{{this.timeoutDate}}</span>未办理)</p>
      </div>
      <div class="content">
        <div class="item">
          <p>客户入住日期：</p>
          <p>{{this.params.checkInDate}}</p>
        </div>
        <div class="item">
          <p>已超期天数：</p>
          <p class="red">{{timeoutDelay}}天</p>
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
      params: {},
      showUnsatisfied: false,
      showPeople: false,
      showWarn: false,
      showTimeOut: false,

      warnDate: '',   // 设置多少天数未办理
      timeoutDate: '',
      warnDelay: '',  // 超时天数
      timeoutDelay: null,

    }
  },
  methods: {
    delayDay(date, dayNum) {
      const oneDayStamp = 86400000
      date = date.replace(/-/g, '/')
      let startStamp = new Date(date).getTime()
      let nowStamp = new Date().getTime()
      let dayRes = (nowStamp - startStamp - oneDayStamp * dayNum) / oneDayStamp
      return Math.floor(dayRes) 
    }
  },
  async mounted() {
    this.params = window.fgyApp ? JSON.parse(window.fgyApp.getParams()) :{
			"unsatisfiedCondition": {
        '视频一': ['录制一'],
        '视频二': ['录制二', '第二项']
      },
			"firstManagerPosition": "销售",
			"loanType": "浦发银行",
			"bizRemindType": ["待申请超期", "不满足条件", "责任人偏差", "待申请告警"],
			"cutNo": "220103198801308841",
			"firstManager": "王威",
			"checkInDate": "2019-02-20",
			"firstManagerServeCenter": "第一服务中心（徐汇1组）",
			"roomId": "15810",
			"secendManagerPosition": "服务中心经理",
			"cutSex": "女",
			"secendManagerServeCenter": "第一服务中心（徐汇1组）",
			"roomAddress": "上海市上海市闵行区颛兴路748弄109号202室C室2N",
			"loanTimes": "24",
			"cutId": "82323",
			"secendManager": "钟辉辉",
			"loanStatus": {
				"name": "已拒绝",
				"id": 20
			},
			"cutName": "严辨枫",
			"firstManagerCompany": "徐汇分公司",
			"cutPhone": "13330306009",
			"secendManagerCompany": "徐汇分公司",
			"loanId": "245265"
    }

    this.params.bizRemindType.forEach((item) => {
      if (item === '不满足条件') { this.showUnsatisfied = true }
      if (item === '责任人偏差') { this.showPeople = true }
      if (item === '待申请超期') { this.showTimeOut = true }
      if (item === '待申请告警') { this.showWarn = true }
    })

    const warnRes = await this.$http.post(api.remind, {key: 'WAIT_APPLY_WARNIN'}) 
    const timeoutRes = await this.$http.post(api.remind, {key: 'WAIT_APPLY_TIMEOUT'}) 
    if (warnRes.length !== 0) {
      this.warnDate = warnRes[0].value
      this.warnDelay = this.delayDay(this.params.checkInDate, this.warnDate)
    }
    if (timeoutRes.length !== 0) {
      this.timeoutDate = timeoutRes[0].value 
      this.timeoutDelay = this.delayDay(this.params.checkInDate, this.timeoutDate)
    }
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
          right: 6px;
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
