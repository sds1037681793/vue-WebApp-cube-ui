import axios from 'axios'
import apiConfig from './apiConfig/index.js'
import auth from './auth.js'
import Qs from 'qs'

let instance = axios.create({
  method: 'post',
  withCredentials: true,
  timeout: 60000,
  headers: {
    'Accept': '*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

const normalHandler = (resolve, res) => {
  let r = res.data
  if (r && typeof r === 'string') { // 处理安卓4.4.4以下 返回数据
    r = JSON.parse(r)
  }
  if (r) {
    if (r.status === 1) {
      r && resolve(r.data)
    } else {
      // 错误处理
      let code = r.code
      if (code === 3090320000) {
        // Toast({
        //   message: r.message,
        //   duration: 1000
        // })
      } else if (code === 3090320001 || code === 3090310006) {
        auth.login()
      }
      res && resolve(false)
    }
  } else {
    // 未知错误
    res && resolve(false)
  }
}

const errorHandler = (reject, err) => {
  console.error(err)
  reject({
    status: 0,
    code: 500,
    error: err.message || err
  })
}

export default async (url = '', data = {}, option = {}) => {
  let method = option.method || 'post'
  let prefixName = option.prefixName || 'api'
  if (url.indexOf('http') !== 0) {
    let prefix = apiConfig[prefixName]
    url = prefix + url
  }
  let config = {
    url,
    ...option,
    method
  }
  if (method.toLocaleLowerCase() === 'get') {
    config['params'] = data
  } else {
    config['data'] = data
  }
  if (option.headers && option.headers['Content-Type'] === 'multipart/form-data') {
    instance.defaults.transformRequest = [function (data) {
      return data
    }]
  } else if (option.headers && option.headers['Content-Type'] === 'application/json') {
    instance.defaults.transformRequest = [function (data) {
      return JSON.stringify(data)
    }]
  } else {
    instance.defaults.transformRequest = [function (data) {
      data = Qs.stringify(data)
      return data
    }]
  }
  return new Promise((resolve, reject) => {
    instance.request(config).then(res => {
      normalHandler(resolve, res)
    }).catch(err => {
      errorHandler(reject, err)
    })
  })
}
