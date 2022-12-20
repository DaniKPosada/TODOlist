//este componente contiene todos los componentes
//que conforman nuestra app

import React, { useState } from "react";
import TaskList from "./Tasklist"; //importación de la lista de tareas
import FormTodo from "./FormTodo"; //importación del formulario que recibe las tareas
//esta arrow function anonima Container es la estructura para el componente: arriba del retur funcionalidades
//dentro del return es el código jsx que implementará las funcionalidades dentro de los componenentes
const Container = () => {
    //este useState es un hook que nos permite inicializar una lista
    //lista que cambiará a medida que el usuario agregue tareas, por eso el valor predeterminado es vacío
    const [list, setList] = useState([]); 
    
    //esta función anonima con arow function permitirá añadir a la lista, la lista anterior más el nuevo 
    //item de la lista
    const handleAddItem = addItem => {
        setList([...list, addItem]); 
    };
    return (
        <div>
            <FormTodo handleAddItem={handleAddItem} /> {/* El handleAddItem es una prop de FormTodo */}
            <TaskList list={list} setList={setList} /> {/* El list y setList son props de TaskList */}
        </div>
    );
};

export default Container;