import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';

class Carousel1 extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={500}>
                    <img src="/img/phone.png" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src="/img/phone.png" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src="/img/phone.png" alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src="/img/phone.png" alt="Fourth slide" />
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default Carousel1;
