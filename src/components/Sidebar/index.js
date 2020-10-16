import React from 'react';
import Card from '../UI/Card';
import './style.css';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
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
                    <div className="recentPost">
                        <h3>Post Title</h3>
                        <span>October 16, 2020</span>
                    </div>
                    <div className="recentPost">
                        <h3>Post Title</h3>
                        <span>October 16, 2020</span>
                    </div>
                    <div className="recentPost">
                        <h3>Post Title</h3>
                        <span>October 16, 2020</span>
                    </div>
                </div>
            </Card>

        </div>

    );

}

export default Sidebar;