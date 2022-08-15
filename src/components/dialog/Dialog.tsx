import React from "react";
import "./dialog.css";

const Dialog: React.FC<{
    show: boolean;
    title: string;
    description: string;
    confirm: () => void;
    cancel: () => void;
}> = ({ show, title, description, confirm, cancel }) => {
    if (!show) {
        return <></>;
    }
    return (
        <div className="overlay-dialog">
            <div className="dialog">
                <div className="dialog__content">
                    <h2 className="dialog__title">{title}</h2>
                    <p className="dialog__description">{description}</p>
                </div>
                <hr></hr>
                <div className="dialog__footer">
                    <button className="dialog__cancel" onClick={cancel}>
                        Cancelar
                    </button>
                    <button className="dialog__confirm" onClick={confirm}>
                        Sí, elimínalo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
