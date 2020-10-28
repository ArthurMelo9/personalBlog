import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

/**
* @author
* @function CreateBlogPost
**/

const CreateBlogPost = (props) => {
    return (
        <div><p>Welcome Arthur! What do you have for us today? Add a new post...</p>
            <NavLink to="/newpost">Create new post</NavLink>

        </div>
    )

}

export default CreateBlogPost;