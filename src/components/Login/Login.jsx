import React from "react"
import { useDispatch } from "react-redux"

//actions
import {handleGoogleloginAction} from "../../redux/actions/login.action"

const Login = () => {

    const dispatch = useDispatch()
    const handleGoogleLogin = e => {
        e.preventDefault()
        dispatch(handleGoogleloginAction())
    }
    return (
        <div className="flex justify-center items-center bg-black h-screen">
            <form className="flex-col bg-white justify-center mx-auto items-center w-1/2 border border-black text-center" action="" onSubmit={handleGoogleLogin}>
                <h4>Login</h4>
                <input clasName="text-white" type="text" placeholder="ingrese tu correo"  className="w-3/4"/>
                <input type="password" placeholder="Contraseña" className="textfield w-3/4"/>
                <input type="submit" value="ingresar con tu Google" className="w-1/3"/>
            </form>  
        </div>
    )
}

export default Login
