import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Listado from './components/Listado';
import Insertar from './components/Insertar';
import Editar from './components/Editar';
import Eliminar from './components/Eliminar';

function App() {
   const[data,setData]= useState([]);
   const ruta_base="https://localhost:44328/api/";

   const[modalInsertar, setmodalnsertar]=useState(false);
   const[modalEditar,setmodalEditar]=useState(false);
   const[modalEliminar,setmodalEliminar]=useState(false);

   const abrircerrarModal = () =>{
    setmodalnsertar(!modalInsertar);
   }
   const abrircerrarModalEditar =()=>{
     setmodalEditar(!modalEditar);     
   }
   const abrircerrarModalEliminar =()=>{
     setmodalEliminar(!modalEliminar);
   }

   const seleccionarMedico =(medico,caso)=>{
     setmedicoSel(medico);
     (caso==="Editar")? abrircerrarModalEditar(): abrircerrarModalEliminar();
   }

   const[medicoSel,setmedicoSel]=useState({
     codmed:'',
     nommed:'',
     codesp:'',
     aniocolegio:'',
     coddis:'',
     estado:''
   })
   const medicosGET= async()=>{
     await axios.get(ruta_base+"Medicos/Listado")
     .then(response =>{
       setData(response.data);
     }).catch(error=>{
       console.log(error);
     })
   }
   useEffect(()=>{
     medicosGET();
     EspecialidadesGET();
     DistritosGET();
   },[]
   )
 
  //Metodo para cargar las especialidades y los distritos
  const[especialidades,setespecialidades]=useState([]);
  const[distritos,setdistritos]=useState([]);
  const EspecialidadesGET= async()=>{
    await axios.get(ruta_base+"Especialidads/Listado")
    .then(response=>{
      setespecialidades(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }
  const DistritosGET= async()=>{
    await axios.get(ruta_base+"Distritoes/Listado")
    .then(response=>{
      setdistritos(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }
  //metodo para capturar desde teclado, lo que se ingresa en las etiquetas de html
  const handlechange=(e)=>{
    const{name,value}=e.target;
    setmedicoSel({
      ...medicoSel,[name]:value
    });
    console.log(medicoSel);
  }
  //------Metodo Post--------
  const registrarPOST= async()=>{
    medicoSel.aniocolegio=parseInt(medicoSel.aniocolegio);
    medicoSel.nommed=medicoSel.nommed.toUpperCase();
    if(medicoSel.estado==='on')
        medicoSel.estado=1;
    else
        medicoSel.estado=0;
    
    await axios.post(ruta_base+"Medicos/Registrar",medicoSel)
    .then(response =>{
      setData(data.concat(response.data));
      abrircerrarModal();
      medicosGET(); 
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }
  //--------------Metodos para edicion---------------
  const estados=[
    {value:"1",label:"Activo"},
    {value:"0",label:"Inactivo"}
  ];
  const ActualizarPUT = async()=>{
    await axios.put(ruta_base+"Medicos/Actualizar/"+medicoSel.codmed,medicoSel)
    .then(response =>{
      //console.log(medicoSel);
      medicosGET();
    }).catch(error =>{
      console.log(error);
    })
    //medicosGET();
    abrircerrarModalEditar();
    //medicosGET();
  }
  //---Metodo para eliminar---
  const solicitudDELETE= async()=>{
    await axios.delete(ruta_base+"Medicos/Eliminar/"+medicoSel.codmed)
    .then(response =>{
      setData(data.filter(item.codmed!==response.data));
      abrircerrarModalEliminar();
      medicosGET();
    }).catch(error =>{
      console.log(error);
    })
  }
  return (
    <div className="App">
      <Listado
          data={data}
          abrircerrarModal={abrircerrarModal}
          seleccionarMedico={seleccionarMedico}
      />
      <Insertar
        modalInsertar={modalInsertar}
        especialidades={especialidades}
        distritos={distritos}
        abrircerrarModal={abrircerrarModal}
        handlechange={handlechange}
        registrarPOST={registrarPOST}
      /> 
      <Editar
        modalEditar={modalEditar}
        medicoSel={medicoSel}
        handlechange={handlechange}
        especialidades={especialidades}
        distritos={distritos}
        abrircerrarModalEditar={abrircerrarModalEditar}
        ActualizarPUT={ActualizarPUT}
        estados={estados}
      />
      <Eliminar
        modalEliminar={modalEliminar}
        medicoSel={medicoSel}
        abrircerrarModalEliminar={abrircerrarModalEliminar}
        solicitudDELETE={solicitudDELETE}
      />
    </div>
  );
}

export default App;
