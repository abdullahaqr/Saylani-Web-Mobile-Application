import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

class Header extends React.Component {
    render() {
        const nav = [
            {ID: 1, URL:"mobile-phones", label:"Mobile Phones"},
            {ID: 2, URL:"cars", label:"Cars"},
            {ID: 3, URL:"motorcycles", label:"Motorcycles"},
            {ID: 4, URL:"houses", label:"Houses"},
            {ID: 5, URL:"tv-video-audio", label:"TV-Video-Audio"},
            {ID: 6, URL:"tablets", label:"Tablets"},
            {ID: 7, URL:"land-plots", label:"Land & Plots"},
        ]
        return (
            <React.Fragment>
                <nav className="header navbar navbar-expand-lg navbar-light bg-light">
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <div className='location'>
                        <i className="fa fa-search" />
                        <input className='label' placeholder='Your Location' value='Pakistan' />
                        <button className='fa fa-chevron-down' />
                    </div>
                    <div className='search'>
                        <input className='search-input' type="text" placeholder='Find Cars, Mobile Phones and more... ' />
                        <button className='fa fa-search' />
                    </div>
                    <div className='login-sell'>
                        <Link to="/account/login" className='login'>Login</Link>
                        <button className='sell'>
                            <div className='fa fa-plus' />
                            <div className='sell-div'>SELL</div>
                        </button>
                    </div>
                </nav>
                <nav className="header-bottom">
                    <button className='categories'>
                        <h2 className='categories-label'>ALL CATEGORIES</h2>
                        <button className='fa fa-chevron-down arro s24' />
                    </button>
                    {
                        nav.map(item => {
                            return (
                                <Link to={"/" + item.URL} className='labels'>{item.label}</Link>
                            )
                        })
                    }
                </nav>

            </React.Fragment>
        )
    }
}

export default Header;