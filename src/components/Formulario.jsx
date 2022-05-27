import {useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({vehiculos,setVehiculos,vehiculo,setVehiculo}) => {

    const [placa,setPlaca]=useState('');
    const [propietario,setPropietario]=useState('');
    const [email,setEmail]=useState('');
    const [alta,setAlta]=useState('');
    const [sintomas,setSintomas]=useState('');

    const[error,setError]=useState(false);

    useEffect( ()=>{
        if(Object.keys(vehiculo).length > 0){
            setPlaca(vehiculo.placa)
            setPropietario(vehiculo.propietario)
            setEmail(vehiculo.email)
            setAlta(vehiculo.alta)
            setSintomas(vehiculo.sintomas)
            
        }
    },[vehiculo])
    

    const generarId = () =>{
       const random = Math.random().toString(36).substr(2);
       const fecha  = Date.now().toString(36)
       return random + fecha
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      if([placa,propietario,email,alta,sintomas].includes('')){
        console.log('Hay al menos un campo vacio');
        setError(true)
        return
      }
     setError(false)

     const objetoVehiculo={
      placa,
      propietario,
      email,
      alta,
      sintomas
     
     }
     if(vehiculo.id){
      //  console.log('Editando')
      objetoVehiculo.id = vehiculo.id
      // console.log(objetoVehiculo)
      // console.log(vehiculo)

      const vehiculosActualizados = vehiculos.map(vehiculoState => vehiculoState.id === 
        vehiculo.id ? objetoVehiculo : vehiculoState)
      
      setVehiculos(vehiculosActualizados)
      setVehiculo({})

     }else{
      //  console.log('Nuevo Registro')
      objetoVehiculo.id = generarId()
      setVehiculos([...vehiculos,objetoVehiculo])
     }
     setPlaca('')
     setPropietario('')
     setEmail('')
     setAlta('')
     setSintomas('')

    }
    
  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className= "font-black text-3xl text-center">Seguimiento Pacientes </h2>
      <p className="text-lg mt-5 text-center">Añade Pacientes y{''}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className= "bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          {  error && <Error>Todos los campos son obligatorio</Error>
          }

        <div className="mt-5">
            <label htmlFor="placa" className="uppercase block text-gray-700 p-2 mt-2 font-bold">Placa</label>
            <input 
                id="placa"           
                type="text"
                placeholder = "Placa" 
                className="border-2 w-full p-2 mt-2"
                value={placa}
                onChange={ (e)=>setPlaca(e.target.value)}
             
            />
        </div>
        <div className="mt-5">
            <label  htmlFor="propietario" className="block text-gray-700 p-2 mt-2 font-bold">Nombre Propietario</label>
            <input 
                id="propietario"
                type="text"
                placeholder = "Propietario" 
                className="border-2 w-full p-2 mt-2"
                value={propietario}
                onChange={ (e)=>setPropietario(e.target.value)}
            />
        </div>
        <div className="mt-5">
            <label  htmlFor="email" className="block text-gray-700 p-2 mt-2 font-bold">Email</label>
            <input 
                id="email"
                type="email"
                placeholder = "Email" 
                className="border-2 w-full p-2 mt-2"
                value={email}
                onChange = { (e)=>setEmail(e.target.value)}
            />
        </div>
        <div className="mt-5">
            <label  htmlFor="alta" className="block text-gray-700 p-2 mt-2 font-bold">Alta</label>
            <input 
                id="alta"
                type="date"
                className="border-2 w-full p-2 mt-2"
                value={alta}
                onChange ={  (e)=>setAlta(e.target.value)}
            />
        </div>
        <div className="mt-5">
            <label  htmlFor="sintomas" className="block text-gray-700 p-2 mt-2 font-bold">Sintomas</label>
            <textarea       name="sintomas" id="sintomas" cols="30" rows="5"
                            className="border-2 w-full p-2 mt-2"
                            placeholder ="Describe los sintomas"
                            value ={sintomas}
                            onChange ={  (e)=>setSintomas(e.target.value) }
            ></textarea>
        </div>
        <input 
          type="submit" 
          className = "bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={ vehiculo.id ? 'Editar Vehiculo' : 'Agregar Vehiculo' }
          />
      </form>
    </div>
  )
}

export default Formulario