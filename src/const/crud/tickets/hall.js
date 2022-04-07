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
      label: '影厅ID',
      prop: 'id',
      align: 'center'
    }, {
      label: '影厅名',
      prop: 'hallType',
      align: 'center'
    }, {
      label: '影厅座位',
      prop: 'itemType',
      slot: true,
      align: 'center'
    },]
  }
  