import React from "react";

const DeleteConfirmation = ({ handleDelete, handleCancel }) => {

    return (
        <div className="overlay-confirmation">
            <div className="delete-confirmation">
                <h1>¿Estás seguro de que quieres eliminar esta imagen?</h1>
                <div className="buttons">
                    <button onClick={handleDelete} className="icon-button" style={{ backgroundColor: "#CF2A2A", color: "white" }}>
                        Sí
                    </button>
                    <button onClick={handleCancel} className="icon-button" style={{ backgroundColor: "#2ACFCF", color: "white" }}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
