import React from 'react';
import {Link} from "react-router-dom";

const ProfileListComment = (props) => {
    return (
        <div className={"profileListComment"}>
            <h3>Коментарии:</h3>
            <ul>
                {props.profile.comments ?
                    props.profile.comments.map((comment)=>
                        <li key={comment.id}>
                            <Link to={`/posts/${comment.post}`} >{comment.text}</Link>
                        </li> ):
                    <li>комментариев  нет</li>}
            </ul>
        </div>
    );
};

export default ProfileListComment;