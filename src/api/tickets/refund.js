import request from '@/router/axios'

export function fetcRhList(data) {
  return request({
    url: 'movie/admin/refund/pageRefunds',
    method: 'post',
    data
  })
}

//同意退款
export function agreeRefund(data) {
  return request({
    url: `movie/admin/refund/agreeRefund`,
    method: 'post',
    data
  })
}
//拒绝退款
export function refuseRefund(data) {
    return request({
      url: `movie/admin/refund/refuseRefund`,
      method: 'post',
      data
    })
  }