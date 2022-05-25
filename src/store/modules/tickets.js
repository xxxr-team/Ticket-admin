const tickets = {
    state: {
        brandOptions: {},
        brandList: {},
        hallOptions: {},
        hallList: {},
    },
    mutations: {
        Get_Brand_Options:(state,action)=> {
            state.brandOptions = action
        },
        Get_Brand_List:(state, action) => {
            state.brandList = action
        },
        Get_Hall_Options:(state,action)=> {
            state.hallOptions = action
        },
        Get_Hall_List:(state, action) => {
            state.hallList = action
        }
    },
    actions: {
        async Set_Brand_Options({ commit }, data) {
            let obj = {}
            for (let i of data) {
                obj[i['value']] = await i['label']
            }
            await commit('Get_Brand_Options', obj)
        },
        async Set_Hall_Options({ commit }, data) {
            let obj = {}
            for (let i of data) {
                obj[i['value']] = await i['label']
            }
            await commit('Get_Hall_Options', obj)
        },
    }
}
export default tickets;