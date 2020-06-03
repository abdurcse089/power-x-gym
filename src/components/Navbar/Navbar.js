import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="jumbotron jumbotron-height">
            <nav className="navbar navbar-expand-lg navbar-dark bg-color">
                <div className="container">
                    <a className="navbar-brand text-white" href="/">POWER <span className="logoX">X</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/home">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/ourClasses">Our Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/aboutUs">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contactUs">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6 text-white intro-Style">
                        <h1> <span className="fitness">THE BEST FITNESS</span> <br/> STUDIO IN TOWN</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis corporis eveniet omnis nemo optio dignissimos. Nisi, laboriosam ratione? Nesciunt doloribus soluta architecto. Amet, iusto eos. Aliquid aliquam...</p>

                        <Link to={"/Membership"}><button type="button" className="btn btn-warning">JOIN US</button></Link>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;