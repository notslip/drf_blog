import React, {useState} from 'react';
import MyForm from "../UI/form/MyForm";
import {CommentService} from "../../API/CommentService";
import MyButton from "../UI/button/MyButton";
import MyTextarea from "../UI/textarea/MyTextarea";

const CommentForm = (props) => {
    const[commentText, setCommentText] = useState("");

    async function CommentHandler(e){
        e.preventDefault();
        const comment={
            text: commentText,
            post: props.post,
            parent_comment: props.parent_comment
        }
        props.create(comment);
    }

    return (
        <div className='commentForm'>
            {props.parent_comment!==null ? <div>В ответ на: {props.parent_comment.text}</div>:<div></div>}
            <MyForm onSubmit={CommentHandler}>
                <MyTextarea
                    placeholder="Напишите комментарий"
                    name='commentText'
                    type='text'
                    rows='4'
                    value={commentText}
                    required
                    onChange={e => setCommentText(e.target.value)}
                />
                <MyButton type="submit">Отправить</MyButton>
            </MyForm>
        </div>
    );
};

export default CommentForm;