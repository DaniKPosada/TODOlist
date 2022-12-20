import React from 'react'; //importación de los paquetes de react
import './App.scss';//importación de estilos
import Container from './components/Container'; //Importación del componente mayor

//esta función es la que renderiza en el return nuestro componente
function App() {
  return (
    <div className="App"> 
      <Container /> 
    </div>
  );
}
//exportación de la función App con la estructura de exportación esmodules. 
export default App;
