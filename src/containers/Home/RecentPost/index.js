import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {
    return (
        <div style={{ width: '70%' }}>
            <Card style={{ marginBottom: '20px' }}>
                <div className="postImageWrapper">
                    <img src={require('../../../blogImages/luck.jpg')} alt='side image' />
                </div>
                <div style={{ textAlign: 'center' }}>

                    <span>Featured</span>
                    <h2>blog title</h2>
                    <span>Posted on date</span>
                    <p>Excerpts of the blog...</p>
                    <button>Read more</button>
                </div>

            </Card>


        </div>
    )

}

export default RecentPost;