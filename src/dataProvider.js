import axios from 'axios'

// const APIAddress = 'https://arize-backend-development-ikrcogluxq-uc.a.run.app'
const APIAddress = 'http://localhost:8080'

const dataProvider = {
    getOne : async (resource, params) => {
        const url = `${APIAddress}/${resource}/${params.id}`
        const res = await axios.get(url)
        
        return {data:res.data.data}
    },
    getList : async (resource, params) => {
        let url = `${APIAddress}/${resource}`

        if(params.pagination) {
            const limit = params.pagination.perPage
            const offset = (params.pagination.page - 1) *params.pagination.perPage 
            const searchText = params.filter && params.filter.searchText?params.filter.searchText:''
            url = `${url}?limit=${limit}&offset=${offset}&searchText=${searchText}`
        }
        
        const res = await axios.get(url)
        
        return {data:res.data.data, total : 100}
    },
    getManyReference : async (resource, params) => {
        let url = `${APIAddress}/${resource}?`
        
        if(params.id && params.target) {
            const id = params.id
            url = `${url}${params.target}=${id}&`
        }
        
        if(params.pagination) {
            const limit = params.pagination.perPage
            const offset = (params.pagination.page - 1) *params.pagination.perPage 
            const searchText = params.filter && params.filter.searchText?params.filter.searchText:''
            url = `${url}limit=${limit}&offset=${offset}&searchText=${searchText}`
        }

        const res = await axios.get(url)

        return {data:res.data.data, total : 9}
    },
    getMany : () => Promise.resolve(),
    delete : () => Promise.resolve(),
    create : () => Promise.resolve(),
    update : () => Promise.resolve(),
    updateMany : () => Promise.resolve(),
    deleteMany : () => Promise.resolve(),
}

export default dataProvider