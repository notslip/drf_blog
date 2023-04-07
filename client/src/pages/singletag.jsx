import React,{ useState,  useEffect} from 'react';
import TagService from "../API/TagService";
import MyButton from "../components/UI/button/MyButton";
import {useParams, useNavigate, Link} from "react-router-dom";
import "../styles/tag.css"

const Singletag = () => {
    const {id} = useParams();
    const [tag, setTag] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        fetchTag(id);
    }, [id]);
    async function fetchTag(num){
        const data= await TagService.getTag(num);
        setTag(data);
    };

    return (
        <div className='tagList'>
            {tag.posts ? tag.posts.map(
                (post) => <Link key={post.id} to={`/posts/${post.id}`}>{post.title}</Link>): <div>Загрузка...</div>}
            <MyButton onClick={()=>navigate(-1)}>Назад</MyButton>
        </div>
    );
};

export default Singletag;