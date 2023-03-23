import React, {useState, useEffect} from 'react';
import TagService from "../API/TagService";
import "../styles/tag.css"

const Tags = () => {
    const [tags, setTags]=useState([]);
    const [tagsToogle, setTagsToogle]=useState(false);
    useEffect(()=>{fetchTags()},[]);
    async function fetchTags(){
        const data = await TagService.getAllTag();
        setTags(data.results);
    }
    function handleToogle(){
        if(tagsToogle){
            setTagsToogle(false);
        } else{
            setTagsToogle(true);
        }
    }

    return (
        <div>
            <span onClick={handleToogle}>Tags</span>
            {tagsToogle ? <div className='tagList'>
                            {tags.map(tag => <h3>tag</h3>)}
                        </div> : null}    
        </div>
    )
};

export default Tags;