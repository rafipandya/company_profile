import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className='home-container'>
            <div className='section-one'>
                {/* <img className='background-section-one' src='/background-home.png'></img> */}
                {/* <img className='background-section-two' src='/background-home-shape.png'></img> */}
            </div>

            <div className='section-two'>
                <span className='section-title'>Who we are</span>
            </div>

            <div className='section-three'>
                <div className='title-container-three'>
                    <span className='section-title text-align-center'>Our Core Values</span>
                    <span className='sub-title'>
                    Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. 
                    Aliquet odio et lectus etiam sit. <br /><br />
                    In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
                    </span>
                </div>
                <div className='section-three-value-container'>
                    <div className='value-three'>
                        <div className='title-point-value'>
                            <div className='line'></div>
                            <span className='value-title'>
                                Dedication
                            </span>
                        </div>
                       
                        <div className='value-subtitle-container'>
                            <span className='value-subtitle'>
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.
                            </span>
                        </div>
                    </div>
                    <div className='value-three'>
                        <div className='title-point-value'>
                            <div className='line'></div>
                            <span className='value-title'>
                                Intellectual Honesty
                            </span>
                        </div>
                       
                        <div className='value-subtitle-container'>
                            <span className='value-subtitle'>
                                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.
                            </span>
                        </div>
                    </div>
                    <div className='value-three'>
                        <div className='title-point-value'>
                            <div className='line'></div>
                            <span className='value-title'>
                                Curiosity
                            </span>
                        </div>
                       
                        <div className='value-subtitle-container'>
                            <span className='value-subtitle'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                            </span>
                        </div>
                    </div>
                </div>
                <div className='image-section-three'>
                    <img className='image-three' src='./image-section-three.png'></img>
                </div>
            </div>

            <div className='section-four'>
                <div className='section-four-item-container'>
                    <span className='section-four-title'>OUR SPECIALITY</span>
                    <span className='section-four-subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, 
                    in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                    </span>

                    <div className='section-four-carousel'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/section-4-1.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Accessoris</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, 
                                in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/section-4-2.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Speed Improvement</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor,
                                in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/section-4-3.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Exhaust</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, 
                                in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='footer-content'>
                    <div className='footer-logo-container'>
                        <img className='footer-logo' src='./logo-white.png'></img>
                    </div>
                    <div className='accordion-footer'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>TECHNOLOGY DEPARTMENT</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='menu-footer'>
                        <a>
                            <span>Who We Are</span>
                        </a>
                        <a>
                            <span>Our Values</span>
                        </a>
                        <a>
                            <span>The Perks</span>
                        </a>
                    </div>
                </div>
                
                <div className='image-footer-container'>
                    <img className='image-footer' src='./footer.png'></img>
                </div>
            </div>
        </div>
    )
   
}

export default Home;