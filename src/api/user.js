import request from '@utils/request';

//登录授权  取jwt
export async function query() {
  return request('/api/auth/user/login', {
    method: 'get',
  });
}
