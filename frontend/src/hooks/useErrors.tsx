import { useState } from "react";

type props = {
    fieldname: string;
    message: string;
};

export const useErrors = () => {
    const [errors, setErrors] = useState<any>([]);

    const setError = ({ fieldname, message }: props) => {
        const errorExists = errors.find(
            (error: any) => error.fieldname === fieldname
        );

        if (errorExists) {
            return;
        }

        setErrors((prevState: string) => [
            ...prevState,
            { fieldname, message },
        ]);

        return errors;
    };

    const removeError = (fieldname: string) => {
        setErrors((prevState: any) =>
            prevState.filter((error: any) => error.fieldname !== fieldname)
        );
    };

    const getErrorMessageByFieldName = (fieldname: string) => {
        return errors.find((error: any) => error.fieldname === fieldname)?.message;
    };

    console.log(errors);
    return { setError, removeError, getErrorMessageByFieldName, errors };
};
