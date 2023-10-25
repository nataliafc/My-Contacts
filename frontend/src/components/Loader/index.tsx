import ReactDOM from "react-dom";

import { Overlay } from "./styles";

type LoaderType = {
    isLoading: boolean;
};

export const Loader = ({ isLoading }: LoaderType) => {
    if (!isLoading) {
        return null;
    }

    return ReactDOM.createPortal(
        <Overlay>
            <div className="loader"></div>
        </Overlay>,
        document.getElementById("loader-root")!
    );
};
