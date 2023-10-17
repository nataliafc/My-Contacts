/* eslint-disable @typescript-eslint/no-unused-vars */

import { ContactsList } from "../../components/ContactsList";
import { Header } from "../../components/Header";
// import { Loader } from "../../components/Loader";
// import { FormModal } from "../../components/ModalForm";
// import { DeleteModal } from "../../components/ModalDelete";

export const Home = () => {


    return (
        <>
            {/* <Loader /> */}
            <Header />
            <ContactsList />

            {/* <FormModal /> */}
            {/* <DeleteModal/> */}
        </>
    );
};
