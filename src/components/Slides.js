import React, { useState } from "react";

function Slides({ slides }) {
    console.log(slides);
    const [pos, setPos] = useState(0);

    const btnRestartHandler = (index) => {
        console.log("Restart Called " + index);
        setPos(index);
    };

    const btnNextHandler = (index) => {
        console.log("Next Called " + index);
        if (index < slides.length - 1) setPos(index + 1);
    };

    const btnPrevHandler = (index) => {
        console.log("Prev Called " + index);
        if (index > 0) setPos(index - 1);
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small outlined"
                    onClick={() => btnRestartHandler(0)}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    disabled={pos === 0}
                    className="small"
                    onClick={() => btnPrevHandler(pos)}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    disabled={pos + 1 === slides.length}
                    className="small"
                    onClick={() => btnNextHandler(pos)}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[pos].title}</h1>
                <p data-testid="text">{slides[pos].text}</p>
            </div>
        </div>
    );
}

export default Slides;
