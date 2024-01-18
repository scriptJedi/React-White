import React, {useEffect, useState} from 'react';
import "../assets/Testimonials.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('src/testimonials.json');
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (testimonials.length > 0) {
            const swiper = new SwiperCore('.testimonials__slider', {
                slidesPerView: 1,
                spaceBetween: 300,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
            });

            return () => {
                if (swiper && swiper.destroy) {
                    swiper.destroy();
                }
            };
        }
    }, [testimonials]);

    const renderStars = (starCount) => {
        const stars = [];
        for (let i = 0; i < starCount; i++) {
            stars.push(<FontAwesomeIcon key={i} style={{color: "#ffca03", fontSize: '25px'}} icon={faStar}/>);
        }
        return stars;
    };

    return (
        <section className="testimonials">
            <div className="testimonials__container">
                <div className="testimonials__slider">
                    <div className="swiper-wrapper">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="testimonials__item item-testimonials">
                                    <div className="item-testimonials__stars">
                                        {renderStars(testimonial.stars)}
                                    </div>
                                    <div className="item-testimonials__content">
                                        <h4>{testimonial.content}</h4>
                                    </div>
                                    <div className="item-testimonials__user">
                                        <img src={testimonial.user.image} alt={testimonial.user.name}/>
                                        <h4>{testimonial.user.name}</h4>
                                        <span>{testimonial.user.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                    <div className="swiper-button-prev">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
