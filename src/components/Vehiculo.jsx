

const Vehiculo = ({vehi,setVehiculo,eliminarVehiculo}) => {
    //  console.log('objeto vehiculoooooooooooooooooooooooooooo')
  

     const {placa,propietario,email,alta,sintomas,id}=vehi
     const handleEliminar = () => {
        //  console.log('Eliminando..',id)
        const respuesta = confirm('Deseas elminar vehiculo?');

        if(respuesta){
            eliminarVehiculo(id)
        }
     }
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">Placa:{''}
              <span className="font-normal normal-case">{ placa}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{''}
              <span className="font-normal normal-case">{ propietario}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Email:{''}
              <span className="font-normal normal-case">{ email}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Alta:{''}
              <span className="font-normal normal-case">{ alta}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{''}
              <span className="font-normal normal-case">{sintomas}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">key:{''}
              <span className="font-normal normal-case">{id}</span>
          </p>
          <div className= "flex justify-between mt-10">
              <button type="button"
                className = "py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white 
                            font-bold uppercase rounded-lg"
                onClick= { ()=>setVehiculo(vehi) }
              >Editar</button>
              <button type="button"
                className = "py-2 px-10 bg-red-600 hover:bg-red-700 text-white 
                font-bold uppercase rounded-lg"
                onClick={ handleEliminar}
              >Eliminar</button>
          </div>
      </div>
  )
}

export default Vehiculo