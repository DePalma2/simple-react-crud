import { useState } from "react";
import UsuarioTabla from "./components/UsuarioTabla";
import { v4 as uuidv4 } from 'uuid';
import AgregarUsuario from "./components/AgregarUsuario";
import EditarUsuario from "./components/EditarUsuario";

function App() {

  const usuarioData = [
    { id: uuidv4(), name: 'Usuario 1', username: 'usuario1' },
    { id: uuidv4(), name: 'Usuario 2', username: 'usuario2' },
    { id: uuidv4(), name: 'Usuario 3', username: 'usuario3' },
  ]

  const [usuario, setUsuario] = useState(usuarioData)

  const addUsuario = (usr) => {
    usr.id = uuidv4()
    setUsuario([...usuario, usr])
  }

  const [formEdit, setFormEdit] = useState(false)
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({ id: null, username: "", name:"" })

  const editUsuario = (usuario) => {
    setUsuarioSeleccionado({
      id: usuario.id, username: usuario.username, name: usuario.name
    })
    setFormEdit(true)
  }

  const actualizarUsuario = (id, usuarioActualizado) => {
    setFormEdit(false)
    setUsuario(usuario.map(usuario => usuario.id === id ? usuarioActualizado : usuario))
  }


  const borrarUsuario = (id) => {
    const filtroArray = usuario.filter(u => u.id !== id)
    setUsuario(filtroArray)
  }

  return (
    <div className="container">
      <h1>CRUD</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            formEdit ? (
              <>
                <h2>Editar Usuario</h2>
                <EditarUsuario usuarioSeleccionado={usuarioSeleccionado} actualizarUsuario={actualizarUsuario}/>
              </>
            ) : (
              <>
                <h2>Agregar Usuario</h2>
                <AgregarUsuario agregarUsuario={addUsuario}/>
              </>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Usuarios</h2>
          <UsuarioTabla usuarios={usuario} editUsuario={editUsuario} eliminarUsuario={borrarUsuario}/>
        </div>
      </div>
    </div>
  );
}

export default App;
