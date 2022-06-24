import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado=({data,abrircerrarModal,seleccionarMedico}) =>{
    return (
        <div>
        <br/>
        <button onClick={()=>abrircerrarModal()}
            className="btn btn-success">Nuevo Medico</button>
            <br/>
            <br/>
         <table className="table  table-bordered table-striped">
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Especialidad</th>
                     <th>Nombre del Medico</th>
                     <th>Colegiatura</th>
                     <th>Distrito</th>
                     <th>Estado</th>
                     <th>Acciones</th>
                 </tr>
             </thead>
             <tbody className="text-start">
                 {data.map(item =>(
                     <tr key={item.codmed}>
                         <td>{item.codmed}</td>
                         <td>{item.especialidad}</td>
                         <td>{item.nommed}</td>
                         <td>{item.anioColegio}</td>
                         <td>{item.distrito}</td>
                         <td><input type="checkbox" value={item.estado}
                            checked={item.estado}></input>
                         </td>
                         <td>
                         <button className="btn btn-primary"
                         onClick={()=>seleccionarMedico(item,"Editar")}>Editar</button>{" | "}
                         <button className="btn btn-danger"
                         onClick={()=>seleccionarMedico(item,"Eliminar")}>Eliminar</button>
                         </td>
                     </tr>
                 ))}
             </tbody>
         </table>
        </div>
    )
}

export default Listado
