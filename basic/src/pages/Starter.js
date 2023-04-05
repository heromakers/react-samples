import React from 'react';
import SEO from '../common/SEO';
import { Link } from 'react-router-dom';

const Starter = () => {
    return (
        <>
            <SEO title="Coming Soon" />

            <main className="main-wrapper">
                <div className="coming-soon-area onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12">
                                <div className="site-logo">
                                    <Link to={process.env.PUBLIC_URL + "/"} className="logo-light"><img src={process.env.PUBLIC_URL + "/images/logo-2.svg"} alt="Logo" /></Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="logo-dark"><img src={process.env.PUBLIC_URL + "/images/logo-3.svg"} alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="content">
                                    <h2 className="title">로그인</h2>
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Account" />
                                        </div>
                                        <div className="input-group">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="input-group">
                                            <button className="subscribe-btn" type="submit">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-2">
                            <img src={process.env.PUBLIC_URL + "/images/others/bubble-28.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-3">
                            <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Starter;