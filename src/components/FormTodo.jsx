import React, { useState } from "react"; //importación del use State

const FormTodo = props => {
  const { handleAddItem } = props; // acá se indica el nombre de la propiedad
  const [description, setDescription] = useState(""); // en este hook se determina el estado de la descripción 
    const handleSubmit = e => {
    e.preventDefault(); // esto es algo que ayuda genericamente a prevenir fallas
    // acá se define el parámetro tipo objeto de la función handleAddItem
    // que consta de 3 atributos: done, id y description
    handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description
    });
    setDescription(""); // es un método dentro de esta función. 
};
return (
    <form onSubmit={handleSubmit}> {/* Inicio de un formulario con un evento y una propiedad dentro del elemento
    foom */}
    <div className="todo-list"> {/*se define el nombre de este elemento*/}
        <div className="file-input"> {/*se define el nombre de este elemento*/}
        {/*Se determina el lugar para las acciones de description y del evento e*/}
        <input
            
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        {/*Definición del botón añadir que está desabilitado cuando no se ha escrito nada en 
        descripción)*/}
            <button
                className="button pink"
                disabled={description ? "" : "disabled"}
                >
                Add
            </button>
        </div>
    </div>
    </form>
);
};

export default FormTodo;