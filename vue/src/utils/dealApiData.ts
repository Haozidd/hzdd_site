import {reqApiData} from "src/apis";
import {axiosConfig} from "@/interface/api";
import {ElMessage} from "element-plus";

class DealData {
    method = {
        get: 'get',
        post: 'post',
        put: 'put',
        delete: 'delete'
    }

    async receiveApiReturnData({url, data, method, id, params}: axiosConfig) {
        try {
            let result = await reqApiData({url, data, method, id, params})
            if (result && result.status === 200) {
                ElMessage({
                    message: result.statusText,
                    type: 'success',
                    duration: 2000
                })
            } else {
                ElMessage({
                    message: result!.statusText,
                    type: 'error',
                    duration: 2000
                })
            }
            return result
        } catch (error) {
            console.log(error)
        }
    }
}

export class DealTakeoutMember extends DealData {
    readonly baseUrl = '/takeoutMembers';

    async createTakeoutMember(data: any) {
        let url = this.baseUrl + '/create'
        return await super.receiveApiReturnData({data, url, method: this.method.post})
    }
    async deleteTakeoutMember(data: any) {
        let url = this.baseUrl + '/delete'
        return await super.receiveApiReturnData({data, url, method: this.method.post})
    }
    async updateTakeoutMember(data: any) {
        let url = this.baseUrl + '/update'
        return await super.receiveApiReturnData({data, url, method: this.method.post})
    }

    async getTakeoutMemberList() {
        let url = this.baseUrl
        return await super.receiveApiReturnData({url, method: this.method.get})
    }
}
export class DealUploadFiles extends DealData{
    readonly baseUrl = 'upload';

    async uploadFiles(data:any){
        let url = this.baseUrl
        return await super.receiveApiReturnData({data, url, method: this.method.post})
    }
}

