import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import "../styles/singlepost.css"
import MyButton from "../components/UI/button/MyButton";
import PostService from "../API/PostService";
import CommentList from "../components/singlepost/CommentList";
import {useAuth} from "../hook/useAuth";

const Singlepost = () => {
    const {isAuth,user} = useAuth();
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [commentList, setCommentList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetchPost(id)
    }, [id]);
    async function fetchPost(num){
        const data= await PostService.getSingle(num);
        setPost(data);
        setCommentList(data.comments);
    }
    return (
        <div className='post'>
            <div className='post__title'>{post.title}</div>
            <div className='post__meta'>{post.id}</div>
            <div className='post__content'>{post.body}</div>
            <MyButton onClick={()=>navigate(-1)}>Назад</MyButton>

            <CommentList
                commentList={commentList}
                setCommentList={setCommentList}
                post={post.id}
                user={user}
                isAuth={isAuth}
            />



        </div>
    );
};

export default Singlepost;