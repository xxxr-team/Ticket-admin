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
    url: 'movie/admin/order/page',
    method: 'post',
    data
  })
}

export function deleteList(data) {
  return request({
    url: `movie/admin/order/delete/${data.id}`,
    method: 'delete',
    data
  })
}

export function downBill(params) {
  return request({
    url: `movie/admin/wx/pay/downTradeBill`,
    method: 'get',
    params
  })
}