import {host, authHost} from "./ConfigApi";



class AuthService{
    static async getToken(userobj){
        const {data} = await host.post("login/", userobj);
        console.log(data);
        return {data};
    }

    static async removeToken(){
        const {data} = await authHost.post("logout/");
        return {data};
    }
    static async getCheck(){
        const response = await authHost.post("check/");
        return response;
    }
}

export default AuthService;