import { StyledSpinner } from "./styles";

type SpinnerType = {
    size: number;
};

export function Spinner({ size }: SpinnerType) {
    return <StyledSpinner size={size} />;
}
