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

                    <h2>Luck or Chance</h2>
                    <span>April 10, 2020</span>
                    <p>How else would you describe certain events in yor life...</p>
                    <button>Read more</button>
                </div>

            </Card>
            <Card style={{ marginBottom: '20px' }}>
                <div className="postImageWrapper">
                    <img src={require('../../../blogImages/virus and money.jpg')} alt='side image' />
                </div>
                <div style={{ textAlign: 'center' }}>

                    <span>Featured</span>

                    <h2>The Virus and Money</h2>
                    <span>December 12, 2019</span>
                    <p>Has this virus really come to stay.How are economies trying to cope with this? What are the experts saying? To begin with...</p>
                    <button>Read more</button>
                </div>

            </Card>


        </div>
    )

}

export default RecentPost;