import React from 'react';
import identity from './identity.png'
import nonFiction from './non-fiction.webp'
import fiction from './fiction.png'
import podcast from './podcast.webp'

const Identity = () => {
    return (
        <div className='identity'>
            <div className='identity-header'>
                <div>
                    <h1>Identity Anthology</h1>
                    <p>Let's analyze how identity is illustrated in 5 different narratives.</p>
                    <a className='biography-link' href='/biography'>Annotated bibliography</a>
                </div>
                <div>
                    <img src={identity} alt='identity' className='identity-image'/>
                </div>
            </div>
            <div className='identity-body'>
                <div>
                    <img alt='not-fiction-image' src={nonFiction}></img>
                    <div className='non-fiction'>
                        <h4>Non-fiction</h4>
                        <a href='/story2'>“This I believe” by Julio</a>
                    </div>
                    <img alt='fiction-image' src={fiction}></img>
                    <div className='fiction'>
                        <h4>Fiction</h4>
                        <ul>
                            <li><a href='/story1'>“The Father” by Raymond Carver</a></li>
                            <li><a href='/story5'>“So what are you, anyway” by Lawrence Hill</a></li>
                        </ul>
                    </div>
                    <img alt='podcast-image' src={podcast}></img>
                    <div className='podcast'>
                        <h4>Podcast</h4>
                        <ul>
                            <li><a href='/story3'>“9 tips to change your identity” by Marley Harris</a></li>
                            <li><a href='/story4'>“Childhood Trauma, Lost Identity and RAGE” by Anna Runkle</a></li>
                        </ul>
                    </div>
                </div>
                <div className='quote'>
                    <p className='quote-text'>“It is better to be hated for what you are than loved for what you are not.”</p>
                    <p className='quote-author'>Andre Guide</p>
                </div>
            </div>
        </div>
    );
};

export default Identity;
