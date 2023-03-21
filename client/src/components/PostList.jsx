import React from 'react';
import PostCard from "./PostCard";
import '../styles/PostList.css'

const PostList = (props) => {
    return (
        <div className="post-list">
            <h1>{props.title}</h1>
            {props.posts.map(post=>
                <PostCard post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;