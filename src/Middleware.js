import { get, post } from "./API";

export const postMiddleware =  (url, data, callback,auth) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    let completeurl = baseURL + url;
    
    let headers;

    let middlewareCallback = (res)=>{
        if(auth){
            if(res.response!= undefined){
                if(res.response.status != undefined){
                    if(res.response.status === 401){
                        localStorage.removeItem("token");
                        window.location.replace("/auth/sign-in");
                        
                    }
                    else{
                        callback(res);
                    }
                }
            }
            else if(res.status != undefined){
                if(res.status === 401){
                    localStorage.removeItem("token");
                    window.location.replace("/auth/sign-in");
                }
                else{
                    callback(res);
                }
            }
            else{
                callback(res);
            }
        }
        else{
            callback(res);
        }
       
    };
    
    if(auth){
        let token = localStorage.getItem("token");
            headers = {
            Authorization: 'Bearer '+token
        }
    }
    else{
        headers = {
            'Content-Type': 'application/json',
            "Accept":"application/json, text/plain, /",
        }
    }
   
    post(completeurl,data,headers,middlewareCallback);
    

}

export const getMiddleware =  (url, callback,auth) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    let Completeurl = baseURL + url;

    let headers;
    let middlewareCallback = (res)=>{
        if(auth){
            if(res.response!= undefined){
                if(res.response.status != undefined){
                    if(res.response.status === 401){
                        localStorage.removeItem("token");
                        window.location.replace("/auth/sign-in");
                    }
                    else{
                        callback(res);
                    }
                }
            }
            else if(res.status != undefined){
                if(res.status === 401){
                    localStorage.removeItem("token");
                    window.location.replace("/auth/sign-in");
                }
                else{
                    callback(res);
                }
            }
            else{
                callback(res);
            }
        }
        else{
            callback(res);
        }
    };

    if(auth){
        let token = localStorage.getItem("token");
        headers = {
        Authorization: 'Bearer '+token
    }
    }
    else{
        headers = {
            'Content-Type': 'application/json',
        }
    }
    get(Completeurl,headers,middlewareCallback);

}