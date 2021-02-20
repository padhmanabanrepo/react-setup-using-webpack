import React from "react";
import {render} from "react-dom";

export const App = () => {
    const firstName = "Padmanaban";
    return(
        <p>{firstName}</p>
    );
};

render(<App />, document.getElementById("root"));