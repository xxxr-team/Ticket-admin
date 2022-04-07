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
    label: '排片 ID',
    prop: 'id',
    align: 'center'
  }, {
    label: '电影名',
    prop: 'movieNm',
    align: 'center'
  }, {
    label: '影院名',
    prop: 'cinemaNm',
    align: 'center'
  }, {
    label: '放映大厅',
    prop: 'cinemaNm',
    align: 'center'
  }, {
    label: '放映日期',
    prop: 'days.day',
    align: 'center'
  }, {
    label: '放映时间',
    prop: 'time',
    align: 'center'
  }, {
    label: '售价（元）',
    prop: 'price',
    align: 'center'
  }, ]
}
