import React from 'react';
import { Link } from 'react-router-dom';

import { FaAngleRight } from "react-icons/fa";

import { slugify } from '../utils';
import SEO from '../common/SEO';
import Logo from '../elements/Logo';

const CountData = [
    {
        id: 1,
        title: "Demo Website (More Coming)",
        count_num: "5"
    },
    {
        id: 2,
        title: "Inner Page",
        count_num: "30"
    },
    {
        id: 3,
        title: "Elements",
        count_num: "30"
    }
]

var slideSettings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    dots: true,
    swipeToSlide: false,
    draggable: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          }
        }
    ]
}

const DemoData = [
    {
        "id": 1,
        "width_img": "/images/others/demo-slide-1.png",
        "height_img": "/images/others/demo-1.png",
        "title": "Digital Agency"
    },
    {
        "id": 2,
        "width_img": "/images/others/demo-slide-2.png",
        "height_img": "/images/others/demo-2.png",
        "title": "Creative Agency"
    },
    {
        "id": 3,
        "width_img": "/images/others/demo-slide-3.png",
        "height_img": "/images/others/demo-3.png",
        "title": "Personal Portfolio"
    },
    {
        "id": 4,
        "width_img": "/images/others/demo-slide-4.png",
        "height_img": "/images/others/demo-4.png",
        "title": "Home Startup"
    },
    {
        "id": 5,
        "width_img": "/images/others/demo-slide-5.png",
        "height_img": "/images/others/demo-5.png",
        "title": "Corporate Agency"
    },
    {
        "id": 6,
        "width_img": "",
        "height_img": "/images/others/demo-coming.png",
        "title": ""
    }
]

const FeatureData = [
    {
        "id": 1,
        "icon": "/images/icon/react.png",
        "title": "Powered by <br> React",
        "para": "Our Template is Perfect for all devices. It is made by React Structure. React JS was designed to provide high performance in mind."
    },
    {
        "id": 2,
        "icon": "/images/icon/code-2.png",
        "title": "Reusable <br> Components",
        "para": "All the Components of this template are reusable. We made abstrak using functional components. You can reuse any components"
    },
    {
        "id": 3,
        "icon": "/images/icon/sass.png",
        "title": "Sass <br> Available",
        "para": "Sass is more stable, powerful, and elegant because it is an extension of CSS. So, it is easy for designers and developers to work more efficiently and quickly."
    },
   
    {
        "id": 4,
        "icon": "/images/icon/loading.png",
        "title": "Fast Loading <br> Speed",
        "para": "The website speed is very important. Hence we’ve created Abstrak in a way that your website will load fast, and you will get better performance."
    },
    {
        "id": 5,
        "icon": "/images/icon/responsive.png",
        "title": "Fully <br> Responsive <br>Layout",
        "para": "All the pages of this template are responsive. We used the Bootstrap framework to build the website. It’s the best in class."
    },
    {
        "id": 6,
        "icon": "/images/icon/icon-13.png",
        "title": "Modern <br> Design",
        "para": "Abstrak is a modern creative design for Creative, Digital, Corporate agencies, etc. Abstrak is a perfect solution for your digital agency"
    },
    {
        "id": 7,
        "icon": "/images/icon/code.png",
        "title": "Well Organized  <br> Codes",
        "para": "The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed."
    },
    {
        "id": 8,
        "icon": "/images/icon/icon-20.png",
        "title": "Lifetime <br> Update",
        "para": "Purchase our template only once and get lifetime updates. We keep updating our products to stay up to date with the latest trends and technology."
    },
    {
        "id": 9,
        "icon": "/images/icon/icon-21.png",
        "title": "Mobile <br> Optimized",
        "para": "All the pages of this template are optimized. We used the Bootstrap framework to build the website. It’s the best in class."
    }
]

const Splash = () => {
    return (
        <>
            <SEO title="Digital Creative Agency, Corporate and Portfolio React JS Template" />
        
            <main className="main-wrapper">
                <header className="header axil-header header-style-1 splash-header-style">
                    <div className="axil-mainmenu">
                        <div className="container">
                            <div className="header-navbar">
                                <div className="header-logo">
                                    <Logo limage="/images/logo.svg"
                                        dimage="/images/logo-3.svg"
                                        simage="/images/logo-2.svg"
                                    />
                                </div>
                                <div className="header-main-nav">
                                {/* Start Mainmanu Nav */}
                                <nav className="mainmenu-nav">
                                    <ul className="mainmenu">
                                        <li><a href="#splash-demo">Demo</a></li>
                                        <li><a href="#splsh-features">Features</a></li>
                                        <li><a href="#splash-why-choose">Why Us</a></li>
                                    </ul>
                                </nav>
                                {/* End Mainmanu Nav */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="section main-demo-area bg-color-light" id="splash-demo">
                    <div className="container">
                        <div className="section-heading heading-left">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-7">
                                <h2 className="title">Our templates are just ready to use</h2>
                                </div>
                                <div className="col-xl-4 col-lg-5 offset-xl-2">
                                <p>You will love all of the features in our Template. 100% guaranteed satisfaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                DemoData.map((data) => (
                                <div className="col-md-6" key={data.id}>
                                    <div className="single-demo">
                                        <Link to={`${process.env.PUBLIC_URL}/${slugify(data.title)}`}>
                                            <span className="thumb">
                                                <img src={`${process.env.PUBLIC_URL}${data.height_img}`} alt={data.title} />
                                            </span>
                                            <h4 className="title">{data.title}</h4>
                                        </Link>
                                        
                                    </div>
                                </div>
                                ))
                            }

                        </div>
                    </div>
                    <ul className="shape-group list-unstyled">
                        <li className="shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-35.png"} alt="Shape" /></li>
                        <li className="shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Shape" /></li>
                    </ul>
                </div>

                <div className="section section-padding bg-color-dark splash-features" id="splsh-features">
                    <div className="container">
                        <div className="section-heading heading-light-left">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                <h2 className="title">We have Impressive Features</h2>
                                </div>
                                <div className="col-lg-5 col-md-8">
                                <p>You will love all of the features in our template. 100% guaranteed satisfaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                FeatureData.slice(0, 9).map((data) => (
                                    <div className="col-xl-4 col-md-6" key={data.id}>
                                        <div className="services-grid">
                                            <div className="thumbnail">
                                                <img src={process.env.PUBLIC_URL + data.icon} alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h5>
                                                <p>{data.para}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <ul className="list-unstyled shape-group-10">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
                    </ul>
                </div>

                <div className="section section-padding bg-color-light spalsh-why-choose" id="splash-why-choose">
                    <div className="container">
                        <div className="section-heading heading-left">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-7">
                                    <h2 className="title">Why buy the template from us?</h2>
                                </div>
                                <div className="col-xl-4 col-lg-5 offset-xl-2">
                                    <p>Every template is built with such efforts that they are ready to meet all of our clients’ expectations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                FeatureData.slice(9, 12).map((data) => (
                                    <div className="col-xl-4 col-lg-6" key={data.id}>
                                        <div className="why-buy-box">
                                            <div className="heading">
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + data.icon} alt="Thumb" />
                                                </div>
                                                <h5 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h5>
                                            </div>
                                            <p>{data.para}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6">
                                <div className="support-box online-docuentation splash-hover-control">
                                    <a href="https://new.axilthemes.com/docs/abstrak-react/">
                                        <div className="inner">
                                            <div className="content">
                                                <div className="heading">
                                                <h4 className="title">Online<br /> Documentation</h4>
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + "/images/icon/icon-25.png"} alt="Thumb" />
                                                </div>
                                                </div>
                                                <p>Well organized and up to date</p>
                                            </div>
                                            <div className="btn-area">
                                                <span className="item-btn"><FaAngleRight /></span>
                                            </div>
                                        </div>
                                        <ul className="shape-group list-unstyled">
                                            <li className="shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-34.png"} alt="Shape" /></li>
                                            <li className="shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-8.png"} alt="Shape" /></li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="support-box support-ticket splash-hover-control">
                                    <a href="https://support.axilthemes.com/support/">
                                        <div className="inner">
                                        <div className="content">
                                            <div className="heading">
                                            <h4 className="title">Submit A <br /> Support Ticket</h4>
                                            <div className="icon">
                                                <img src={process.env.PUBLIC_URL + "/images/icon/icon-26.png"} alt="Thumb" />
                                            </div>
                                            </div>
                                            <p>We response within 1 Business day. weekends excluded.</p>
                                        </div>
                                        <div className="btn-area">
                                            <span className="item-btn"><FaAngleRight /></span>
                                        </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-shape">
                        <img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="Line" />
                    </div>
                </div>
                <div className="section call-to-action-area splash-call-to-action">
                    <div className="container">
                        <div className="call-to-action">
                        <div className="section-heading heading-light">
                            <h2 className="title">Let’s Start <br /> Your Business Today!</h2>
                            <p>Missing something? Just tell us what you need by <a href="https://support.axilthemes.com/support/">requesting us here.</a> </p>
                            <a target="_blank" rel="noopener noreferrer" href="https://themeforest.net/cart/configure_before_adding/37917149" className="axil-btn btn-fill-white">Buy Now</a>
                        </div>
                        </div>
                    </div>
                    <ul className="list-unstyled shape-group-9">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-12.png"} alt="Comments" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"} alt="Comments" /></li>
                        <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Comments" /></li>
                        <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                        <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"} alt="Comments" /></li>
                        <li className="shape shape-7"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                    </ul>
                </div>
                <footer className="footer-area splash-footer">
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                <div className="footer-copyright">
                                    <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">Axilthemes</a>.</span>
                                </div>
                                </div>
                                <div className="col-lg-2">
                                </div>
                                <div className="col-lg-5">
                                <div className="footer-bottom-link">
                                    <ul className="list-unstyled">
                                        <li><a href="https://themeforest.net/user/axilthemes/portfolio">More Themes</a></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
};

export default Splash;
