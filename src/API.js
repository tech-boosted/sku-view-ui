import  axios  from "axios";


export const post =  (url, data, headers,callback) => {
    axios.post(url, data, { headers: headers }).then((res) => {
        callback(res);
    }).catch((e) => {
        console.log("Error occured : ", e);
        callback(e);

    });
}

export const get = (url,headers,callback) => {
    axios.get(url,{headers:headers} ).then((res)=>{
       
        callback(res);
    }).catch((e)=>{
       
        console.log("Error Occured : ",e);
        callback(e);
    });
}