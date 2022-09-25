import React from 'react'
import { useForm } from 'react-hook-form'

const AgregarUsuario = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, event) => {
        props.agregarUsuario(data)
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
      <button>Agregar nuevo usuario</button>
    </form>
  )

}

export default AgregarUsuario