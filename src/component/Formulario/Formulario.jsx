import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from "./Formulario.module.css"
import  Button  from '../Button';

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
                    telefono:""
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}
                    // Validacion telefono
					if(!valores.telefono){
						errores.telefono = 'Por favor ingresa un telefono'
                    }

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form >
                        <div className="container-fluid bg-primary ">
                            <div className={s.contenedor}>
						<div >
                            <div className="col ">
							    <label htmlFor="nombre">Nombre</label>
                            </div>
                            <div className="col">
							    <Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Tu Nombre..."
						    	/>
                            </div>
							<ErrorMessage name="nombre" component={() => (<div className={s.warning}>{errors.nombre}</div>)} />
						</div>
                        <div >
                            <div className="col">
							    <label htmlFor="telefono">telefono</label>
                            </div>
                            <div className="col">
							    <Field
								type="text" 
								id="telefono" 
								name="telefono" 
								placeholder="Telefono..."
						    	/>
                            </div>
							<ErrorMessage name="telefono" component={() => (<div className={s.warning}>{errors.telefono}</div>)} />
						</div>
                        
						<div>
                            <div className="col">
							    <label htmlFor="correo">Correo</label>
                            </div>
                            <div className="col">
							    <Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
						    	/>
                            </div>
							<ErrorMessage name="correo" component={() => (<div className={s.warning}>{errors.correo}</div>)} />
						</div>
						<div className='my-4'>
							<Field name="mensaje" as="textarea" placeholder="Mensaje" />
						</div>
                        <div className="col pb-2">
						{/* <button className='btn btn-default btn-block btn-secondary  ' type="submit">Enviar</button> */}
                        <Button/>
                        </div>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                        </div>
                     </div>
					</Form>
				)}


				{/* {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
					<form className="formulario" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input 
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe" 
								value={values.nombre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>

							{touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<input 
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
								value={values.correo}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
						</div>
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</form>
				)} */}
			</Formik>
		</>
	);
}
 
export default Formulario;