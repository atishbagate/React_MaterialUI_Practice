import axios from 'axios' 
export const tableData = (params) =>{
 
    let baseUrl = `https://api.instantwebtools.net/v1/passenger?page=0&size=10`

    return axios.get(baseUrl,{
        method:'GET',
        headers:{'Content-Type':'application/json'}
    });
}