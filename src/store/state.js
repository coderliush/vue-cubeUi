const state = {
  detailParams: window.fgyUser ? window.fgyUser.getDetailParams() : { //app提供信息
    loanId: '',
    cutName: '',
    cutPhone: '',
    cutId: '',
  },
  // test: console.log('a'),
}

export default state