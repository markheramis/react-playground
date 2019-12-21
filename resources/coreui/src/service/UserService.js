import axios from 'axios'

class UserService {
    /**
     * [register description]
     *
     * @param   {[type]}  data  [data description]
     *
     * @return  {[type]}        [return description]
     */
    register(data){
        return axios.post('http://localhost:8000/api/register', data);
    }

    /**
     * [all description]
     *
     * @param   {object}  param  [param description]
     *
     * @return  {axios}         [return description]
     */
    all(header){
        return axios.get('http://localhost:8000/api/user')
    }

   
    /**
     * 
     * @param {*} id 
     * @param {*} header
     */
    get(id, header){
        return axios.get('http://localhost:8000/api/user/' + id);
    }

    /**
     * 
     * @param {*} id 
     * @param {*} data 
     * @param {*} header
     */
    update(id, data, header){
        return axios.put('http://localhost:8000/api/user/' + id, data, header);
    }


}

export default new UserService()