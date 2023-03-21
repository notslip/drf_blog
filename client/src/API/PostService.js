
import {host} from "./ConfigApi";



class PostService{
    static async getAll(){
        const response = await host.get("api/posts/");
        return response.data;
    };
    static async getSingle(id){
        const response = await host.get("api/posts/"+id+"/");
        return response.data;
    };

}


export default PostService