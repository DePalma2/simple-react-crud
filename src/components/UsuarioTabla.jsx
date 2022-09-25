import React from 'react'

const UsuarioTabla = (props) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Nombre de usuario</th>
        <th>Accion</th>
      </tr>
    </thead>
    <tbody>
      {
        props.usuarios.length > 0 ? 
        props.usuarios.map(usuario => {
        return (
          <tr key={usuario.id}>
          <td>{usuario.name}</td>
          <td>{usuario.username}</td>
          <td>
            <button className="button muted-button" onClick={() => { props.editUsuario(usuario) }}>Editar</button>
            <button className="button muted-button" onClick={() => { props.eliminarUsuario(usuario.id) } }>Borrar</button>
          </td>
        </tr>
        )
      }) : <p>No existen usuarios</p>
      }
    </tbody>
  </table>
  )
}

export default UsuarioTabla