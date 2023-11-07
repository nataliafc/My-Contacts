import { useCallback, useEffect, useState } from "react";

import { Form } from "./styles";
import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";

import { useErrors } from "../../hooks/useErrors";

import isEmailValid from "../../utils/isEmailValid";
import { formatPhone } from "../../utils/formatPhone";

import CategoriesService from "../../services/CategoriesService";

type CategoryType = {
    id: string;
    name: string;
};

type ContactsModalType = {
    onSubmit: any;
};

export const ContactsForm = ({ onSubmit }: ContactsModalType) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { setError, removeError, getErrorMessageByFieldName, errors } =
        useErrors();
    const isFormValid = name && errors.length === 0;

    const loadCategories = useCallback(async () => {
        try {
            const categoriesList = await CategoriesService.listCategories();
            setCategories(categoriesList);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoadingCategories(false);
        }
    }, []);

    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

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

    async function handleSubmit(e: React.FormEvent<any>) {
        e.preventDefault();

        setIsSubmitting(true);

        await onSubmit({
            name,
            email,
            phone: phone.replace(/\D/g, ""),
            categoryId,
        });

        setIsSubmitting(false);
    }

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <FormGroup error={getErrorMessageByFieldName("name")}>
                <Input
                    value={name}
                    placeholder="Nome"
                    autoComplete="off"
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    onChange={handleChangeEmail}
                    error={getErrorMessageByFieldName("email")}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    value={phone}
                    autoComplete="off"
                    placeholder="Telefone"
                    disabled={isSubmitting}
                    onChange={handleChangePhone}
                    maxLength={15}
                />
            </FormGroup>

            <FormGroup isLoading={isLoadingCategories}>
                <Select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    disabled={isLoadingCategories || isSubmitting}
                >
                    <option value="">Sem categoria</option>
                    {categories.map((category: CategoryType) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </Select>
            </FormGroup>

            <div>
                <Button
                    type="submit"
                    text="SALVAR"
                    loading={isSubmitting}
                    disabled={!isFormValid}
                />
            </div>
        </Form>
    );
};
