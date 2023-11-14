import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './assets/img3.PNG';

const Discover = () => {
    return (
        <>
        <div className={"project-section p-4"}>
            <div className="row container d-flex p-4 justify-content-center align-items-center">
                <h1>Discover</h1>
                <div className="col mb-4 col-sm-5 col-md-5 col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum 1.20 Weth</Card.Title>
                            <Card.Text>
                                Ends in 01.34.45
                            </Card.Text>
                            <Button variant="dark">Bid</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col mb-4 col-sm-4 col-md-4 col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum 1.20 Weth</Card.Title>
                            <Card.Text>
                                Ends in 01.34.45
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col mb-4 col-sm-4 col-md-4 col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum 1.20 Weth</Card.Title>
                            <Card.Text>
                                Ends in 01.34.45
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                
            </div>
        </div>
        <div className={"project-section p-4"}>
            <div className="row container d-flex p-4 justify-content-center align-items-center">
                <h1>Discover</h1>
                <div className="col mb-4 col-sm-5 col-md-5 col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum 1.20 Weth</Card.Title>
                            <Card.Text>
                                Ends in 01.34.45
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col mb-4 col-sm-4 col-md-4 col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum 1.20 Weth</Card.Title>
                            <Card.Text>
                                Ends in 01.34.45
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col mb-4 col-sm-4 col-md-4 col-lg-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum 1.20 Weth</Card.Title>
                            <Card.Text>
                                Ends in 01.34.45
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                
            </div>
        </div>
   
        

        </>
        
    );
};

export default Discover;