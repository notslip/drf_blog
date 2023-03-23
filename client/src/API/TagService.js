import {host, authHost} from "./ConfigApi";

class TagService{
    static async getAllTag(){
        const response = await host.get("/api/tags/");
        return response.data;
    }
    static async getTag(id){
        const response = await host.get("/api/tags/"+id+"/");
        return response.data;
    }
    // static async regUser(user){
    //     const response = await host.post("/registration/",user);
    //     return response.data;
    // }
}

export default TagService;