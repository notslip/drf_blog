import {authHost} from "./ConfigApi";


export class CommentService{

    static async createComment(comment){
        const response = await authHost.post("api/comment/",comment);
        return response.data;
    };

    static async deleteComment(id){
        const response = await authHost.delete("api/comment/"+id+"/",);
        return response.data;
    }

}