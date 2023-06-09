import { helpHttp } from '../helpers/helpHttp';
import { base_url } from '../Config/config';

class DeviceService {
    api = helpHttp();
    url = base_url + "/devices"
    

    async getAllData(){
        try {
            console.log('requesting')
            const result = await this.api.get(this.url);
            return {response: result}
        } catch (error) {
            return {error}
        }
    }

    async createData(data){
        let options = {
          body: data,
          headers: { "content-type": "application/json" },
        };
    
        try {
            await this.api.post(this.url, options);
            return {response: data}
        } catch (error) {
            return {error}
        }
    }
    
    async updateData(data){
        let endpoint = `${this.url}/${data.id}`;
    
        let options = {
          body: data,
          headers: { "content-type": "application/json" },
        };
    
        try {
            await this.api.put(endpoint, options);
            return {response: data}
        } catch (error) {
            return {error}
        }
    }
    
    async deleteData(id){
        let endpoint = `${this.url}/${id}`;
        let options = {
        headers: { "content-type": "application/json" },
        };

        try {
            await this.api.del(endpoint, options);
            return {response: id}
        } catch (error) {
            return {error}
        } 
    }
}

export default DeviceService