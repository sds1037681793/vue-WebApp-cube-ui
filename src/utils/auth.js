import { TESTAPPID, APPID } from './constants'

export default {
  isWx: (/MicroMessenger/i).test(window.navigator.userAgent.toLowerCase()),
  isApp: navigator.userAgent.toLowerCase().indexOf('zebra') > -1,
  /**
   * 微信授权
   * @return {[type]} [description]
   */
  wxLogin () {
    const appid = location.hostname.startsWith('waptest') ? TESTAPPID : APPID
    localStorage.setItem('HQBSREDIRECT', JSON.stringify(location.href))
    const url = encodeURIComponent(`${location.origin}/wxauth`)
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  },
  /**
   * 登录
   * @return {[type]} [description]
   */
  login () {
    if (this.isWx) {
     // window.location.href = '/login/middlePage?redirect_url=' + encodeURIComponent(redirectUrl) || ''
    } 
  }
}
