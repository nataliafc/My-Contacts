/* eslint-disable @typescript-eslint/no-unused-vars */

import { ContactsList } from "../../components/ContactsList";
import { Header } from "../../components/Header";
// import { FormModal } from "../../components/ModalForm";
// import { DeleteModal } from "../../components/ModalDelete";

export const Home = () => {


    return (
        <>
            <Header />
            <ContactsList />

            {/* <FormModal /> */}
            {/* <DeleteModal/> */}
        </>
    );
};
