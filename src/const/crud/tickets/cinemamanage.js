import store from '@/store'
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
        label: '影院 ID',
        prop: 'id',
        align: 'center',
        width:'100',
    }, {
        label: '影院名',
        prop: 'cinemaName',
        align: 'center',
        search: true,
        editDisabled: true,
        rules: [{
          required: true,
          message: '请输入影院名',
          trigger: 'blur'
        }]
    }, {
        label: '所属品牌',
        prop: 'brandName',
        align: 'center',
        formatter:(val,value,label)=>{
            return store.getters.brandOptions[val.brandId]
        }
    },{
        label: '详细地址',
        prop: 'addr',
        align: 'center'
    },{
        label: '是否支持退票',
        prop: 'supportRefund',
        align: 'center',
        formatter:(val,value,label)=>{
            return val.supportRefund ? '支持' : '不支持'
        }
    },]
  }