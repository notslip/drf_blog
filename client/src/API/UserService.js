import {host, authHost} from "./ConfigApi";

class UserService{
    static async getAllUser(){
        const response = await host.get("/api/users/");
        return response.data;
    }
    static async getUser(id){
        const response = await authHost.get("/api/users/"+id+"/");
        return response.data;
    }
    static async regUser(user){
        const response = await host.post("/registration/",user);
        return response.data;
    }
}

export default UserService;