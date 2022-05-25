import request from '@/router/axios'

export function fetchCList(data) {
  return request({
    url: 'movie/cinema/page',
    method: 'post',
    data
  })
}
//添加影院
export function addCinemaList(data) {
    return request({
        url: 'movie/cinema/addCinema',
        method: 'post',
        data
    })
}
//编辑影院
export function editCinemaList(data) {
  return request({
      url: 'movie/cinema/updateCinema',
      method: 'post',
      data
  })
}
//删除影院
export function deleteList(data) {
  return request({
    url: `movie/cinema/delCinema/${data.id}`,
    method: 'delete',
    data
  })
}