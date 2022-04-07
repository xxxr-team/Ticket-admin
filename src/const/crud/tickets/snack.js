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
 * Author: test
 */

/**
 *
 * @param {校验数据源名} rule
 * @param {*} value
 * @param {*} callback
 */

 export const tableOption = {
    selection: true,
    border: true,
    stripe: true,
    menuAlign: 'center',
    align: 'center',
    addBtn: false,
    editBtn: false,
    delBtn: false,
    searchMenuSpan: 6,
    column: [{
      label: '小吃 ID',
      prop: 'id',
      align: 'center'
    }, {
      label: '套餐名称',
      prop: 'firstTitle',
      align: 'center'
    }, {
      label: '详细信息',
      prop: 'secondTitle',
      align: 'center'
    }, {
      label: '价格',
      prop: 'cinemaNm',
      align: 'price'
    }, {
      label: '已购数量',
      prop: 'curNumber',
      align: 'center'
    }, {
      label: '剩余数量',
      prop: 'totalNumber',
      align: 'center'
    }, ]
  }
  