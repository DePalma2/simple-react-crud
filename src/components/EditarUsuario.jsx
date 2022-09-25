import React from 'react'
import { useForm } from 'react-hook-form'

const EditarUsuario = (props) => {
    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.usuarioSeleccionado
    });

    setValue("name", props.usuarioSeleccionado.name)
    setValue("username", props.usuarioSeleccionado.username)

    const onSubmit = (data, event) => {
        data.id = props.usuarioSeleccionado.id
        props.actualizarUsuario(props.usuarioSeleccionado.id, data)
        event.target.reset();
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input type="text" name="name" {...register("name", {required: true, message: "Ingresar nombre"})} />
      <p>{errors?.name?.message}</p>
      <label>Nombre de Usuario</label>
      <input type="text" name="username" {...register("username", {required: true, message: "Ingresar usuario"})}/>
      <p>{errors?.username?.message}</p>
      <button>Editar Usuario</button>
    </form>
  )
}

export default EditarUsuario