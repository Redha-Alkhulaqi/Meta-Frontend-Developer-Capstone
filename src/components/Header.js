import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return (
        <header className='header'>
            <section>
                {/* banner texts */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with amodern twist.</p>
                    <link to="/booking"><button aria-label='On Click'>Reserve Table</button></link>
                </div>

                {/* banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt=''/>
                </div>
            </section>
        </header>
    );
};

export default Header;