import React, {useEffect, useState} from 'react';
import PostList from "../components/PostList";
import PostService from "../API/PostService";

const Blog = () => {
    const [posts, setPosts]=useState([])
    useEffect(()=>{fetchPosts()},[])
    async function fetchPosts(){
        const data = await PostService.getAll();
        setPosts(data.results)
    }
    return (
        <PostList posts={posts} title={"Список постов"}/>
    );
};

export default Blog;