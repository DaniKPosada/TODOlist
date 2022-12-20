import React from "react";
import Checkbox from "./Checkbox"; //siempre se importa el componente que va dentro del componente grande

const TaskList = props => {
// se determinan cuales serán las propiedades a recibir. 
const { list, setList } = props;
// se determina un evento que nos permitirá establecer la funcionalidad. . 
const onChangeStatus = e => {
const { name, checked } = e.target;

// la función map nos permite recorrer un arreglo
const updateList = list.map(item => ({
...item,
//se cambia el atributo checked de un objeto item con su guncionalidad de chequear
done: item.id === name ? checked : item.done
}));
setList(updateList);
};

// se determina la funcionalidad de el botón eliminar
const onClickRemoveItem = e => {
const updateList = list.filter(item => !item.done);
setList(updateList);
};

// aca se despliega cada checkbox
const chk = list.map(item => (
<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
));
return (
<div className="todo-list">
{/* del tamaño de la lista dependerá si se muestra un mensaje de 'No task'
esto se hace con la aplicación del ternary operator*/}
{list.length ? chk : "No tasks"}
{/*en caso contrario se mostrará ''delete all done' */}
{list.length ? (
<p>
<button className="button blue" onClick={onClickRemoveItem}>
Delete all done
</button>
</p>
) : null}
</div>
);
};

export default TaskList;