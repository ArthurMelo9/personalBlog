import React from 'react';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import RecentPost from './RecentPost';
import './style.css';

const Home = props => {

    const galleryHeight = 450;
    const galleryWidth = 100;
    const galleryStyle = {
        height: galleryHeight + 'px',
        width: galleryWidth + '%',
        overflow: 'hidden'
    }

    const sideImage = galleryHeight / 3;

    return (
        <div>
            <Card>
                <div className="galleryPost" /*style={galleryStyle}*/ >
                    <section style={{ width: '70%', overflow: 'hidden', height: '450px' }} >
                        <div>
                            <img src={require('../../blogImages/hedge.jpg')} alt='homePage' />
                        </div>

                    </section>
                    <section className="sideImageWrapper" style={{ width: '27%', overflow: 'hidden', }} >
                        <div style={{ height: `${sideImage}px`, }}>
                            <img src={require('../../blogImages/luck.jpg')} alt='side image' />
                        </div>

                        <div style={{ height: `${sideImage}px` }}>
                            <img src={require('../../blogImages/virus and money.jpg')} alt='side image' />
                        </div>

                        <div style={{ height: `${sideImage}px` }}>
                            <img src={require('../../blogImages/water.jpg')} alt='side image' />
                        </div>
                    </section>
                </div>
            </Card>
            <section className="HomeContainer">
                <RecentPost />

                <Sidebar />
            </section>

        </div>
    );
}

export default Home;