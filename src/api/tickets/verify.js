import request from '@/router/axios'

export function fetcVhList(params) {
  return request({
    url: 'movie/admin/verify/list',
    method: 'get',
    params
  })
}

export function addVList(data) {
  return request({
    url: `movie/admin/verify/verify`,
    method: 'post',
    data
  })
}