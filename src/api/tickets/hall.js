/*
 *    Copyright (c) 2018-2025, test All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng
 */

import request from '@/router/axios'

export function fetchList(data) {
  return request({
    url: 'movie/admin/hall/page',
    method: 'post',
    data
  })
}

//获取座位
export function getSeats(params) {
  return request({
    url: `movie/admin/hall/getSeatByHallId/${params.hallId}`,
    method: 'get',
    params
  })
}

//提交座位
export function commitSeats(data) {
  return request({
    url: `movie/admin/hall/commitSeat`,
    method: 'post',
    data
  })
}

//添加影厅
export function addHall(data) {
  return request({
    url: `movie/admin/hall/addHall`,
    method: 'post',
    data
  })
}
//编辑影厅
export function editHall(data) {
  return request({
    url: `movie/admin/hall/updateHall`,
    method: 'post',
    data
  })
}