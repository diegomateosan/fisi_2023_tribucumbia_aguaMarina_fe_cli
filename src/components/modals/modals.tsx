import React from "react";
import { FormAddBook } from "../form/addBook/AddBookForm";
import { FormLogin, FormRegister } from "../form/form";

import "./modals.css";

export const ModalLogin: React.FC<{
    state: boolean;
    handleChange: (text: boolean) => void;
    registerState: boolean;
    handleRegister: (text: boolean) => void;
    userState: boolean;
    setUserState: (txt: boolean) => void;
    emailValue: string;
    setEmail: (txt: string) => void;
    setUserValue: (txt: string) => void;
}> = ({
    state,
    handleChange,
    registerState,
    handleRegister,
    userState,
    setUserState,
    setEmail,
    emailValue,
    setUserValue,
}) => {
    return (
        <>
            {state && (
                <div className="app-container-overlay">
                    <FormLogin
                        state={state}
                        handleChange={(txt: boolean) => handleChange(txt)}
                        registerState={registerState}
                        handleRegister={(txt: boolean) => handleRegister(txt)}
                        userState={userState}
                        setUserState={(txt: boolean) => setUserState(txt)}
                        emailValue={emailValue}
                        setEmail={(txt: string) => setEmail(txt)}
                        setUserValue={(txt: string) => setUserValue(txt)}
                    />
                </div>
            )}
        </>
    );
};

export const ModalRegister: React.FC<{
    state: boolean;
    handleChange: (text: boolean) => void;
    registerState: boolean;
    handleRegister: (text: boolean) => void;
}> = ({ state, handleChange, registerState, handleRegister }) => {
    return (
        <>
            {registerState && (
                <div className="app-container-overlay">
                    <FormRegister
                        state={state}
                        handleChange={(txt: boolean) => handleChange(txt)}
                        registerState={registerState}
                        handleRegister={(txt: boolean) => handleRegister(txt)}
                    />
                </div>
            )}
        </>
    );
};

/* export const ModalAddBook: React.FC<{
    state: boolean;
    handleChange: (text: boolean) => void;
}> = ({ state, handleChange }) => {
    return (
        <>
            {state && (
                <div className="app-container-overlay">
                    <FormAddBook
                        state={state}
                        handleChange={(txt: boolean) => handleChange(txt)}
                    />
                </div>
            )}
        </>
    );
}; */
