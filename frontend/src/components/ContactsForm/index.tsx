import { useState } from "react";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { Select } from "../Select";
import { Form } from "./styles";

import { useErrors } from "../../hooks/useErrors";

import isEmailValid from "../../utils/isEmailValid";
import { formatPhone } from "../../utils/formatPhone";

export const ContactsForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");

    const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

    const isFormValid = (name && errors.length === 0);

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
            category,
        });
    };

    console.log(errors)

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <FormGroup error={getErrorMessageByFieldName("name")} >
                <Input
                    name="name"
                    value={name}
                    placeholder="Nome"
                    autoComplete="off"
                    onChange={handleChangeName}
                    error={getErrorMessageByFieldName("name")}
                />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName("email")}>
                <Input
                    name="email"
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
                    name="phone"
                    value={phone}
                    autoComplete="off"
                    placeholder="Telefone"
                    onChange={handleChangePhone}
                    maxLength={15}
                />
            </FormGroup>

            <FormGroup>
                <Select
                    name="categories"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Categoria</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="orkut">Orkut</option>
                </Select>
            </FormGroup>

            <div>
                <Button type="submit" text="SALVAR ALTERAÇÕES" disabled={!isFormValid}/>
            </div>
        </Form>
    );
};
