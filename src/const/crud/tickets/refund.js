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
      label: '影院名',
      prop: 'cinemaName',
      align: 'center'
    }, {
      label: '核销人',
      prop: 'createBy',
      align: 'center'
    }, {
        label: '核销时间',
        prop: 'createTime',
        align: 'center'
    },{
      label: '档期',
      prop: 'day',
      align: 'center'
    }, {
      label: '影厅名',
      prop: 'hallName',
      align: 'center'
    }, {
      label: '电影名',
      prop: 'movieName',
      align: 'center'
    }, {
      label: '电影开始时间',
      prop: 'startTime',
      align: 'center'
    }, ]
  }
  