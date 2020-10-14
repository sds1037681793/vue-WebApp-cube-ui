const env = process.env.VUE_APP_ENV
let c = {}
if (env === 'production') {
  c = {
    api: 'https://apigw.myzebravip.com/user-customer-web',
  }
} else {
  c = {
    api: '',
  }
}
export default c
