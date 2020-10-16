import React from 'react';
import Card from '../UI/Card';
import './style.css';


/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
    return (

        <div className="blogPostContainer">
            <Card >
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Trauma; Learning React from scratch!</h1>
                    <span className="postedBy">posted on October 16, 2020  by Arthur </span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogImages/reactLogo.png')} alt="Post Image" />
                </div>
                <div className="postContent">
                    <h3>Post Title</h3>
                    <p>I remember when I first started to react...</p>
                </div>
            </Card>
        </div>

    );

}

export default BlogPost;