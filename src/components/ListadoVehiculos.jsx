
import Vehiculo from "./Vehiculo"


const ListadoVehiculos = ({vehiculos,setVehiculo,eliminarVehiculo}) => {
 

  return (
    <div className= "md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {vehiculos && vehiculos.length ? 
      (
        <>
            <h2 className="font-black text-3xl text-center">Listado Vehiculos</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
              <span className="text-indigo-600 font-bold ">Vehiculos  y Mantenimientos </span>
            </p>
            { vehiculos.map( (vehi) =>(
              
                <Vehiculo 
                  key={vehi.id}
                  vehi = {vehi}
                  setVehiculo = {setVehiculo}
                  eliminarVehiculo={eliminarVehiculo}
                />
              
            ))}
        </>
         ) : (
           <>
              <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes  {''}
                <span className="text-indigo-600 font-bold ">y apareceran en este lugar </span>
              </p>
           </>
         )}
    </div>
  )
}

export default ListadoVehiculos