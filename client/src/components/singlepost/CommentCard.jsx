import React from 'react';
import "../../styles/singlepost.css";
import {Link as RouterLink} from "react-router-dom";
import {Link, animateScroll} from "react-scroll";
import MyButton from "../UI/button/MyButton";

const CommentCard = (props) => {
    function isThereParentComment(parrent_comment){
            if(parrent_comment !== null) {
                return <div className="commentParentCard">
                           <Link to={String(parrent_comment.id)} smooth={true} offset={-100}>В ответ: {parrent_comment.text} </Link>
                       </div>;
            }
    }
    function removeTheirComment(comment, user){
        if(user!==null && comment.author.id === user.id){
            return <div className="deleteComment" onClick={()=>props.remove(comment)}>X</div>
        }
    }

    function answerToComment() {
        props.setParentComment(props.comment);
        console.log(typeof props.comment.id)
        animateScroll.scrollToBottom({smooth:'true', offset:-100})
    }
    return (
        <div className={"commentCard"} id={props.comment.id}>
            <div className={"authorDateComment"}>
                <RouterLink to={`/profile/${props.comment.author.id}`}>{props.comment.author.username}</RouterLink> 
                    <span> оставлен {props.comment.date}</span>
                    {removeTheirComment(props.comment, props.user)}
            </div>
            
            {isThereParentComment(props.comment.parent_comment)}
            <div className='commentCardText'>{props.comment.text}</div>
            
            <div className='answerButton'>{props.user!==null ? <MyButton onClick={answerToComment}>Ответить</MyButton>:<div></div>}</div>
            
        </div>
    );
};

export default CommentCard;