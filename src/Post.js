import React, { useEffect, useState } from 'react'
import { Markup } from 'interweave'

export default function Post({post}){

    

    return(
        <div className="post">
            <h2>{post.title}</h2>
            <Markup content={post.excerpt}/>
        </div>
    )
}