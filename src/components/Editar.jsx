import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';

const Editar=({modalEditar,medicoSel,handlechange,especialidades,
    distritos,abrircerrarModalEditar,ActualizarPUT,estados})=> {
    return (
        <div>
             <Modal isOpen={modalEditar}>
            <ModalHeader>Actualizar Datos del Medico</ModalHeader>
            <ModalBody>
                <div className="form-group">
                 <label>Codigo:</label><br/>                 
                 <input type="text" className="form-control" name="codmed" readOnly 
                      value={medicoSel.codmed} /><br/>
                 <label>Nombre:</label><br/>                 
                 <input type="text" className="form-control" name="nommed" onChange={handlechange}
                      value={medicoSel.nommed} /><br/>
                 <label>Especialidad:</label><br/>
                 <select name="codesp" className="form-control" onChange={handlechange}
                     defaultValue={[medicoSel.codesp]}>
                     {especialidades.map(item=>(
                         <option key={item.codesp} value={item.codesp}>
                             {item.nomesp}
                         </option>
                     ))}
                 </select>
                 <br/>
                 <label>Colegiatura:</label><br/>
                 <input type="text" className="form-control" name="anioColegio" 
                   value={medicoSel && medicoSel.anioColegio} onChange={handlechange}/><br/>
                 <label>Distrito:</label><br/>
                 <select name="coddis" className="form-control" onChange={handlechange}
                     defaultValue={[medicoSel.coddis]}>
                     {distritos.map(item=>(
                         <option key={item.coddis} value={item.coddis}>
                             {item.nomdis}
                         </option>
                     ))}
                 </select>
                 <br/>
                 <label>Estado:  </label>
                 <select name="estado" className="form-control" defaultValue={medicoSel.estado}
                  onChange={handlechange}>
                      {estados.map(item=>(
                          <option key={item.value} value={item.value}>
                              {item.label}
                          </option>
                      ))}
                  </select>                 
                 <br/>
                </div>                
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-info" onClick={ActualizarPUT}>Actualizar</button>{" | "}
                <button className="btn btn-danger" onClick={()=>abrircerrarModalEditar()}>Cancelar</button>
            </ModalFooter>
            </Modal>        
        </div>
    )
}

export default Editar
