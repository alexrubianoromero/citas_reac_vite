import { useState,useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoVehiculos from "./components/ListadoVehiculos"

function App() {
 
const [vehiculos,setVehiculos] = useState([]);  
const [vehiculo, setVehiculo] = useState({})
useEffect(()=>{
   const obtenerLS=() =>{
   const vehiculosLS = JSON.parse(localStorage.getItem('vehiculos'))?? [];
   setVehiculos(vehiculosLS)
   console.log(vehiculosLS)
  }
  obtenerLS();

},[]);

useEffect(()=>{
  // console.log('componente listo o cambio pacientes ')
  localStorage.setItem('vehiculos',JSON.stringify(vehiculos));
},[vehiculos])

const eliminarVehiculo = id => {
  console.log(vehiculos);
  const vehiculosActualizados = vehiculos.filter(vehiculo1 => vehiculo1.id !== id);
  console.log('eliminando Vehiculo  '+ id);
  console.log(vehiculosActualizados);
  setVehiculo(vehiculosActualizados)
}
  return (
    <div className="container mx-auto mt-20">
       <Header/>
       <div className="mt-12 md:flex">
        <Formulario
          vehiculos = {vehiculos}
          setVehiculos = {setVehiculos}
          vehiculo= {vehiculo}
          setVehiculo={setVehiculo}
        />
        <ListadoVehiculos
          vehiculos = {vehiculos}
          setVehiculo = { setVehiculo}
          eliminarVehiculo = { eliminarVehiculo}
        />
       </div>
    </div>
  )
}

export default App
