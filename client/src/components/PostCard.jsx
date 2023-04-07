import React from 'react';
import '../styles/PostCard.css'
import MyButton from "./UI/button/MyButton";
import {Link} from "react-router-dom";

const PostCard = (props) => {
    return (
        <div className="PostCard">
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
            <div className="post_btns">
                <MyButton ><Link to = {`posts/${props.post.id}`}>Читать</Link></MyButton>
            </div>

            <div className="info">
                <div className='tags'>
                    {props.post.tags.map(tag =>
                        <a key={tag.id} href={`/tag/${tag.id}`}>{tag.title} </a>,
                    )}
                </div>
                <div className='author'>
                    <a href = {`/profile/${props.post.author.id}`}>{props.post.author.username}</a>
                </div>
                <div className='post_date'>
                    <span>{props.post.pub_date}</span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;