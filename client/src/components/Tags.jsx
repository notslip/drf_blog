import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TagService from "../API/TagService";


const Tags = () => {
    const refEl = useRef(null);
    const [tags, setTags] = useState([]);
    const [tagsToogle, setTagsToogle] = useState(false);
    useEffect(() => {
        fetchTags();
        const onClick = e => refEl.current.contains(e.target) || setTagsToogle(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    async function fetchTags() {
        const data = await TagService.getAllTag();
        setTags(data.results);
    }
    function handleToogle() {
        if (tagsToogle) {
            setTagsToogle(false);
        } else {
            setTagsToogle(true);
        }
    }

    return (
        <div ref={refEl}>
            <span onClick={handleToogle}>Tags</span>
            {tagsToogle ? <div className='navTagList'>
                {tags.map(tag => <Link key={tag.id} to={`tag/${tag.id}`} onClick={handleToogle}>{tag.title}</Link>)}
            </div> : null}
        </div>
    )
};

export default Tags;