import React, {useState} from 'react';
import CommentCard from "./CommentCard";
import "../../styles/singlepost.css"
import CommentForm from "./CommentForm";
import {useAuth} from "../../hook/useAuth";
import {CommentService} from "../../API/CommentService";

const CommentList = (props) => {
    const [parent_comment, setParentComment]=useState(null)

    function removeComment(comment){
        async function _deleteCommentHandler(id){
            id = Number(id);
            const response = await CommentService.deleteComment(id);
            console.log(response);
        }
        _deleteCommentHandler(comment.id);
        props.setCommentList(props.commentList.filter(c => c.id !== comment.id));
    }
    async function addNewComment(comment){
        const data = await CommentService.createComment(comment);
        console.log(data);
        props.setCommentList([...props.commentList, data])
    }
    return (
        <div className={"commentList"}>
            <h3>Комментарии:</h3>
            {props.commentList?
                props.commentList.map((comment) => <CommentCard
                                                        comment={comment}
                                                        key={comment.id}
                                                        user={props.user}
                                                        remove={removeComment}
                                                        setParentComment={setParentComment}
                />):
                <div>Комментариев нет</div>
            }
            {props.isAuth ?
                <CommentForm
                    create={addNewComment}
                    post={props.post}
                    user={props.user}
                    parent_comment={parent_comment}
                /> :
                <div>Только пользователи могут оставлять комментарии, войдите или зарегестрируйтесь</div>
            }
        </div>
    );
};

export default CommentList;