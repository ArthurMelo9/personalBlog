import React from 'react';
import Card from '../../components/UI/Card'
import './style.css';

/**
* @author
* @function AboutMe
**/

const AboutMe = (props) => {
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
        </div>
    )

}

export default AboutMe;