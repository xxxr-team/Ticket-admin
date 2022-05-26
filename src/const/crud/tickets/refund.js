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
      label: '订单ID',
      prop: 'orderId',
      align: 'center'
    }, {
        label: '商家退款单号',
        prop: 'refundNo',
        align: 'center'
    },  {
        label: '退款类型',
        prop: 'type',
        align: 'center'
      }, {
      label: '退款金额',
      prop: 'amount',
      align: 'center'
    }, {
      label: '手续费',
      prop: 'fee',
      align: 'center'
    }, {
        label: '申请用户id',
        prop: 'applicant',
        align: 'center'
    },{
        label: '微信退款编号',
        prop: 'outRefundNo',
        align: 'center'
    },  {
        label: '退款状态',
        prop: 'status',
        align: 'center'
      }, {
        label: '退款原因',
        prop: 'reason',
        align: 'center'
    },  {
        label: '退款时间',
        prop: 'refundTime',
        align: 'center'
    },{
        label: '审核人id',
        prop: 'auditor',
        align: 'center'
      },{
        label: '退款结果',
        prop: 'result',
        align: 'center'
    },  ]
  }
  