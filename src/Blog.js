import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Post from './Post';

export default function Blog(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        Axios.get("http://public-api.wordpress.com/rest/v1.1/sites/cooperjonesdesign.wordpress.com/posts")
      .then(res => {
        setPosts(res.data.posts)
        console.log(res);
      })
      .catch(error => console.log(error));
    },[]);

    return(
        <div className="blog">
            {posts.map((post, id)=>
            <Post post={post} key={id}/>
            )}
        </div>
    )
}