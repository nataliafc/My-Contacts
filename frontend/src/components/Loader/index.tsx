import ReactDOM from "react-dom";

import { Overlay } from "./styles";
import { Spinner } from "../Spinner";

type LoaderType = {
    isLoading: boolean;
};

export const Loader = ({ isLoading }: LoaderType) => {
    if (!isLoading) {
        return null;
    }

    return ReactDOM.createPortal(
        <Overlay>
            <Spinner size={90} />
        </Overlay>,
        document.getElementById("loader-root")!
    );
};
