import React, { useState } from 'react';

function Slides({ slides }) {
    // Initialize state to keep track of the currently displayed slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Function to restart the slides from the beginning
    const restartSlides = () => {
        setCurrentSlide(0);
    };

    // Retrieve the currently displayed slide from the slides array
    const currentSlideData = slides[currentSlide];

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small outlined"
                    onClick={restartSlides}
                    disabled={currentSlide === 0}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className="small"
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className="small"
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlideData.title}</h1>
                <p data-testid="text">{currentSlideData.text}</p>
            </div>
        </div>
    );
}

export default Slides;
