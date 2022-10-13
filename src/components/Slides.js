import React, { useState } from 'react';

function Slides({slides}) {
    const [page, setPage] = useState(0);

    const restartPage = () => {
        setPage(0);
    }

    const goPrevPage = () => {
        setPage(page-1);
    }

    const goNextPage = () => {
        setPage(page+1);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={restartPage} disabled={page === 0} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={goPrevPage} disabled={page === 0} data-testid="button-prev" className="small">Prev</button>
                <button onClick={goNextPage} disabled={page === slides.length-1} data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[page].title}</h1>
                <p data-testid="text">{slides[page].text}</p>
            </div>
        </div>
    );

}

export default Slides;
