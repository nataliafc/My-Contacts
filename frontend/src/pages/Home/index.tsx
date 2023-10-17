/* eslint-disable @typescript-eslint/no-unused-vars */
import { ContactsList } from "../../components/ContactsList";
// import { Loader } from "../../components/Loader";
// import { FormModal } from "../../components/ModalForm";
// import { DeleteModal } from "../../components/DeleteModal";

export const Home = () => {
    return (
        <>
            {/* <Loader /> */}
            <ContactsList />

            {/* <FormModal /> */}
            {/* <DeleteModal/> */}
        </>
    );
};

fetch('http://localhost:3002/contacts')
.then(response => console.log(response))
.catch(error => console.log(error))