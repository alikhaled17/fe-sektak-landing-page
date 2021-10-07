import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import feSektakLogo from '../assets/images/fe-sektak-logo.png'
import ourHero from '../assets/images/fe-sektak-traveller.png'
import makeMony from '../assets/images/make-mony.jpg'
import pricingImg from '../assets/images/pricing.jpg'
import selectingImg from '../assets/images/selecting.jpg'
import locatingImg from '../assets/images/locating.jpg'
import faqsImg from '../assets/images/faqs.jpg'
import ContactPage from './contact'
import { Carousel } from 'react-bootstrap'

export default function HomePage() {
    
    return (
        <>
           
           <div className="container m-auto home-page row">
                <div className="row">
                    <div className="welcome-text col-lg-6">
                        <h2> <span>Fe Sektak</span> <br /> Make shipping more easy</h2>
                        <p>
                            set your price and find the suitable traveller's trip ..
                        </p>   
                        
                        <Link href="/register">
                            <a><button className="btn btn-primary" value="Register Now" >Register Now</button> </a>
                        
                        </Link>
                        <span className="read-more">Connect with us on social media ..</span>
                        <div className="social-contact-icon">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-github-square"></i>
                            <i className="fab fa-twitter-square"></i>
                        </div>
                </div>
                <div className="fe-sktak-pic col-lg-6">
                        <div className="logo-pic">
                            <Image src={ourHero} width={500} height={364} alt="our-hero" />
                        </div>
                      
                    </div> 
                </div>
                
                <div className="features text-center row">
                    <h3 className="text-center col-12">Our features</h3>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <Image src={locatingImg} alt="locating" />
                        <h5>
                            Track your shipment.
                        </h5>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <Image src={selectingImg} alt="selecting" />
                        <h5>
                            Choose the right traveler.
                        </h5>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <Image src={makeMony} alt="make-money" />
                        <h5>
                            Make easy money.
                        </h5>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <Image src={pricingImg} alt="pricing" />
                        <h5>
                            Select the right price.
                        </h5>
                    </div>
                </div>

                <div className="faqs text-center">
                    <div className="faqs-header">
                        <h3>Frequently asked questions</h3>
                        <Image src={faqsImg} alt="faqs-img" width="200" height="200" />
                    </div>
                    <div>
                        <Carousel interval={2000}>
                            <Carousel.Item>
                                <h4>What is the fe-sektak service?</h4>
                                <p>It is a shipping service by connecting the owner of the
                                    shipment to the passenger wishing to deliver the shipment through his travel trip. <br />
                                    
                                    The owner sets the shipment price and shipment specifications,
                                    and receives offers from travelers.
                                    <br />
                                    After agreeing on the price and
                                    delivery date, the owner of
                                    the shipment can follow the shipment
                                    via GPS until the shipment arrives. To rate the service</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h4>How much does shipping cost?</h4>
                                <p>The owner of the shipment puts the appropriate amount for him until an agreement is reached with the passenger</p>
                            </Carousel.Item>

                            <Carousel.Item>
                                <h4>How is registration done?</h4>
                                <p>Registration is easily done through the site by adding personal data and a national ID card</p>
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>
                </div>
                
                <div className="get-touch">
                    <ContactPage />
                </div>
                </div>
           
            
        </>
    )
}
