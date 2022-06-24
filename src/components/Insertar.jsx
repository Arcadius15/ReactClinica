import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';

const Insertar=({modalInsertar,especialidades,distritos,abrircerrarModal,handlechange,registrarPOST})=> {
    return (
        <div>
            <Modal isOpen={modalInsertar}>
            <ModalHeader>Nuevo Medico</ModalHeader>
            <ModalBody>
                <div className="form-group">
                 <label>Codigo:</label><br/>                 
                 <input type="text" className="form-control" name="codmed" onChange={handlechange}/><br/>
                 <label>Nombre:</label><br/>                 
                 <input type="text" className="form-control" name="nommed" onChange={handlechange}/><br/>
                 <label>Especialidad:</label><br/>
                 <select name="codesp" className="form-control" onChange={handlechange}>
                     {especialidades.map(item=>(
                         <option key={item.codesp} value={item.codesp}>
                             {item.nomesp}
                         </option>
                     ))}
                 </select>
                 <br/>
                 <label>Colegiatura:</label><br/>
                 <input type="text" className="form-control" name="anioColegio" onChange={handlechange}/><br/>
                 <label>Distrito:</label><br/>
                 <select name="coddis" className="form-control" onChange={handlechange}>
                     {distritos.map(item=>(
                         <option key={item.coddis} value={item.coddis}>
                             {item.nomdis}
                         </option>
                     ))}
                 </select>
                 <br/>
                 <label>Estado:  </label>
                 <input type="checkbox" name="estado" onChange={handlechange}/>
                 <br/>
                </div>                
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-info" onClick={registrarPOST}>Registrar</button>{" | "}
                <button className="btn btn-danger" onClick={()=>abrircerrarModal()}>Cancelar</button>
            </ModalFooter>
            </Modal>
        </div>
    )
}

export default Insertar
