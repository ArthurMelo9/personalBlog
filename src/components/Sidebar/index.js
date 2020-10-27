import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './style.css';

import blogPost from '../../data/Posts.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        //console.log(blogPost);
        const posts = blogPost.post
        setPosts(posts);
    }, posts);

    return (
        <div className="sidebarContainer">
            <Card style={{ marginBottom: '20px' }}>
                <div className="cardHeader">
                    <span>About Me</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../blogImages/me.jpg')} alt="Me" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Nana Kwame Arthur. I am a Medical Web Developer. Welcome to my world!</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>

            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3> {post.title} </h3>
                                        <span> {post.date} </span>
                                    </div>
                                </NavLink>

                            )
                        })
                    }


                </div>
            </Card>

        </div>

    );

}

export default Sidebar;