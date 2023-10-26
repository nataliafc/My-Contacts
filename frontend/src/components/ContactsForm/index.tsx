import { useCallback, useEffect, useState } from "react";

import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { Select } from "../Select";
import { Form } from "./styles";

import { useErrors } from "../../hooks/useErrors";

import isEmailValid from "../../utils/isEmailValid";
import { formatPhone } from "../../utils/formatPhone";

import CategoriesService from "../../services/CategoriesService";

type CategoryType = {
    id: string;
    name: string
}


export const ContactsForm = ( ) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true)

    const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();
    const isFormValid = (name && errors.length === 0);


    const loadCategories = useCallback(async () => {

        try {
            const categoriesList = await CategoriesService.listCategories();
            setCategories(categoriesList)
            console.log(categoriesList)
        }
        catch(error) {
            console.log(error)
        } finally {
            setIsLoadingCategories(false)
        }
    }, [])

    useEffect(() => {
        loadCategories()
    }, [loadCategories])

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);

        if (!e.target.value) {
            setError({ fieldname: "name", message: "Nome inválido." });
        } else {
            removeError("name");
        }
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        if (e.target.value && !isEmailValid(e.target.value)) {
            setError({ fieldname: "email", message: "E-mail inválido." });
        } else {
            removeError("email");
        }
    };

    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(formatPhone(e.target.value));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log({
            name,
            email,
            phone: phone.replace(/\D/g, ''),
            categoryId,
        });
    };

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <FormGroup error={getErrorMessageByFieldName("name")} >
                <Input
                    value={name}
                    placeholder="Nome"
                    autoComplete="off"
                    onChange={handleChangeName}
                    error={getErrorMessageByFieldName("name")}
                />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName("email")}>
                <Input
                    type="email"
                    value={email}
                    autoComplete="off"
                    placeholder="E-mail"
                    onChange={handleChangeEmail}
                    error={getErrorMessageByFieldName("email")}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    value={phone}
                    autoComplete="off"
                    placeholder="Telefone"
                    onChange={handleChangePhone}
                    maxLength={15}
                />
            </FormGroup>

            <FormGroup isLoading={isLoadingCategories}>
                <Select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    disabled={isLoadingCategories}
                >
                    <option value="">Sem categoria</option>
                    { categories.map((category: CategoryType) => (
                        <option
                            key={category.id}
                            value={category.id}>
                                {category.name}
                        </option>
                    ))}
                </Select>
            </FormGroup>

            <div>
                <Button type="submit" text="SALVAR ALTERAÇÕES" disabled={!isFormValid}/>
            </div>
        </Form>
    );
};
