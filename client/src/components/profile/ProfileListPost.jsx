import React from 'react';
import {Link} from "react-router-dom";

const ProfileListPost = (props) => {
    return (
        <div className={"profileListPost"}>
            <h3>Посты:</h3>
            <ul>{props.profile.posts ?
                props.profile.posts.map((post)=>
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li> ):
                <li>Постов нет</li>}
            </ul>
        </div>
    );
};

export default ProfileListPost;