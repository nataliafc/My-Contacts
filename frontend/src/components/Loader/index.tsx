import ReactDOM from "react-dom";

import { Overlay } from "./styles";

export const Loader = () => {
    return ReactDOM.createPortal(
        <Overlay>
            <div className="loader"></div>
        </Overlay>,
        document.getElementById("loader-root")!
    );
};
