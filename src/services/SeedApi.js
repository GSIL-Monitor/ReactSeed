import {PostHttp, GetHttp} from './http.js';

class SeerApi {
    constructor() {
        console.log(window.location);
        if (window.location.host.startsWith("localhost") || window.location.port !== "") {
            // dev
            this.basicUrl = "http://yapi.ops.ctripcorp.com/mock/22/api";
            // 可以使用生产API进行测试
            // this.basicUrl = "http://webinfo7.ops.ctripcorp.com/api";
        } else {
            // prod  正常情况下，线上应用basicUrl应为空
            // this.basicUrl = "";
            this.basicUrl = "http://yapi.ops.ctripcorp.com/mock/22/api";
        }
    }

    getPrincipal() {
        const url = this.basicUrl + "/principal";
        return GetHttp(url);
    }
}

export default SeerApi;
