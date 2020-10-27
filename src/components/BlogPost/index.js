import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import blogPost from '../../data/Posts.json';
import './style.css';


/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    //console.log(props)

    const [post, setPost] = useState({
        id: "",
        title: "",
        author: "",
        date: "",
        image: "",
        content: "",
        upvote: 0,
        downvote: 0
    });
    const [postId, setPostId] = useState('');

    useEffect(() => {
        const postId = props.match.params.postId;
        console.log(blogPost);
        const post = blogPost.post.find(post => post.id == postId);
        setPost(post);
        setPostId(postId)
    }, [post, props.match.params.postId]);

    if (post.image == '') return null;

    return (

        <div className="blogPostContainer">
            <Card >
                <div className="blogHeader">
                    <span className="blogCategory">{post.category}</span>
                    <h1 className="postTitle">{post.title}</h1>
                    <span className="postedBy">posted on {post.date}  by {post.author} </span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogImages/' + post.image)} alt="Post Image" />
                </div>
                <div className="postContent">
                    <h3>{post.title} </h3>
                    <p>{post.content}</p>
                </div>
            </Card>
        </div>

    );

}

export default BlogPost;