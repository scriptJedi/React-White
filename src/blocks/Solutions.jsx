import React, {useEffect} from "react";
import "../assets/styles/Solutions.css";
import {Button} from "../components/Button.jsx";
import CircleIcon from "../components/CircleIcon.jsx";

const Solutions = ({ scrollToForm, id }) => {
    const animationSpeed = 1000; // Default animation speed

    useEffect(() => {
        startCountingWhenVisible();
    }, []);

    function startCountingWhenVisible() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetNumber = parseInt(target.textContent);
                    const speed = parseInt(target.getAttribute("data-speed")) || animationSpeed;
                    countToTarget(targetNumber, speed, target);
                    observer.unobserve(target);
                }
            });
        });

        const numberElements = document.querySelectorAll(".item-solutions__digit");
        numberElements.forEach((element) => {
            observer.observe(element);
        });
    }

    function countToTarget(targetNumber, speed, targetElement) {
        let currentNumber = 0;
        const step = Math.ceil(targetNumber / (speed / 100));
        const countInterval = setInterval(() => {
            currentNumber += step;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(countInterval);
            }
            targetElement.textContent = currentNumber;
        }, 100);
    }

    return (
        <section id={id} className="solutions">
            <div className="container">
                <div className="solutions__wrapper">
                    <div className="solutions__label">
                        <h2 className="title">
                            Solutions Today for Tomorrow’s Success
                        </h2>
                        <div style={{display: 'flex'}}>
                            <Button label={'Contact Us'} onClick={scrollToForm}/>
                        </div>
                    </div>
                    <div className="solutions__text">
                        <p className="solutions__descr">
                            Welcome to our financial consultancy firm! With over 25 years of experience in the industry,
                            we pride ourselves on providing expert financial guidance to our clients. Our mission is to
                            help individuals and businesses navigate the complexities of finance with confidence and
                            clarity.
                        </p>
                        <p className="solutions__descr">
                            Over the years, we've facilitated more than $40 million in profits for our clients,
                            leveraging our expertise and insights to optimize their financial strategies. Whether you're
                            planning for retirement, investing for the future, or managing corporate finances, our team
                            is dedicated to delivering tailored solutions that meet your unique needs and goals.
                        </p>
                    </div>
                </div>
                <div className="solutions__items">
                    <div className="solutions__item item-solutions">
                        <div className="item-solutions__num" data-speed="500">
                            <span className="item-solutions__digit">25</span> <span
                            className="item-solutions__additives">+</span>
                        </div>
                        <div className="item-solutions__text">
                            Years experience in consulting
                        </div>
                    </div>
                    <div className="solutions__item item-solutions">
                        <div className="item-solutions__num" data-speed="100">
                            $<span className="item-solutions__digit">40</span> m <span className="item-solutions__additives">+</span>
                        </div>
                        <div className="item-solutions__text">
                            In pure profits for our clients
                        </div>
                    </div>
                    <div className="solutions__item item-solutions">
                        <div className="item-solutions__num" data-speed="2500">
                            <span className="item-solutions__digit">870</span> <span
                            className="item-solutions__additives">+</span>
                        </div>
                        <div className="item-solutions__text">
                            Completed projects this year
                        </div>
                    </div>
                    <div className="solutions__item item-solutions">
                        <div className="item-solutions__num" data-speed="100">
                            <span className="item-solutions__digit">99.9</span> <span
                            className="item-solutions__additives">%</span>
                        </div>
                        <div className="item-solutions__text">
                            Positive reviews from our clients
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
