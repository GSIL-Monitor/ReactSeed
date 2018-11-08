import axios from 'axios';

export const PostHttp = (url, data) => {
    return new Promise(function(resolve, reject) {
        axios.post(url, data).then((response) => {
            let data = response.status === 200
                ? response.data
                : [];
            resolve(data);
        }).catch((error) => {
            resolve([]);
            console.log("error", error);
        })
    });
}

export const GetHttp = (url) => {
    return new Promise(function(resolve, reject) {
        axios.get(url).then((response) => {
            let data = response.status === 200
                ? response.data
                : [];
            resolve(data);
        }).catch((error) => {
            resolve([]);
            console.log("error", error);
        })
    });
}
