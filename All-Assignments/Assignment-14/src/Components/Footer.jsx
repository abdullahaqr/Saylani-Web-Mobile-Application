import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='footer'>
                    <div className='block'>
                        <h2 className='title'>Popular Categories</h2>
                        <Link to='/' className='noul noulh font s14 color links'>Cars</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Flat for rent</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Jobs</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Mobile Phones</Link>
                    </div>
                    <div className='block flex flex-col'>
                        <h2 className='title s16 fontb color'>Trending Searches</h2>
                        <Link to='/' className='noul noulh font s14 color links'>Cars</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Flat for rent</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Jobs</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Mobile Phones</Link>
                    </div>
                    <div className='block flex flex-col'>
                        <h2 className='title s16 fontb color'>About Us</h2>
                        <Link to='/' className='noul noulh font s14 color links'>Cars</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Flat for rent</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Jobs</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Mobile Phones</Link>
                    </div>
                    <div className='block flex flex-col'>
                        <h2 className='title s16 fontb color'>OLX</h2>
                        <Link to='/' className='noul noulh font s14 color links'>Cars</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Flat for rent</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Jobs</Link>
                        <Link to='/' className='noul noulh font s14 color links'>Mobile Phones</Link>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <h2 className='heading1'><b>Other Countries</b> India - South Africa - Indonesia</h2>
                    <h2 className='heading2'><b>Free Classifieds in Pakistan.</b> © 2006-2020 OLX</h2>
                </div>
            </React.Fragment>

        )
    }    
}

export default Footer;