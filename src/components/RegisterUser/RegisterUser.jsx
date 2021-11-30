import { useState } from "react"
import { useDispatch } from "react-redux"
import { handleRegisterAction } from "../../redux/actions/login.action"
import { GoogleOutlined, AppleFilled, FacebookFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
// <i class="fab fa-connectdevelop"></i>

const RegisterUser = () => {
    const [userInfo, setUserInfo] = useState({userName: "", email: "", password:""})
    const dispatch = useDispatch()

    const handleRegister = e => {
        e.preventDefault()
        dispatch(handleRegisterAction(userInfo))
    }
    // console.log(userInfo)
    return (
        <div className="flex justify-center items-center h-screen bg-primary">

            <form className="mx-auto w-4/5 text-center bg-black bg-opacity-90  h-screen" action="" onSubmit={handleRegister}>
                <div className="h-1/4 w-1/4 m-auto">
                    <FontAwesomeIcon icon={faMicrochip} className="text-fourth text-5xl my-10 " />            
                </div>
                <h2 className=" text-4xl font-semibold text-fourth">Hello Again!</h2>
                <h4 className="my-4 text-gray-500 text-third">Welcome back</h4>
                <input className="text-third" type="text" placeholder="nombre"  className="w-4/5 py-4 pl-2 border-t border-l border-r  border-b border-gray-400 rounded-t-lg bg-graybox bg-opacity-20" onChange={(e)=>setUserInfo({...userInfo, userName: e.target.value})}/>
                <input className="text-third" type="text" placeholder="ingrese tu correo"  className=" w-4/5 py-4 pl-2  border-b border-l border-r rounded-b-lg border-gray-400 bg-graybox bg-opacity-20" onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})}/>
                <div className="w-4/5 m-auto text-right">
                    <button  className="divide-yellow-500 my-3 text-third ">Recovery Password</button>
                </div>
                {/* <input type="password" placeholder="Contraseña" className="textfield w-4/5" onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}/> */}
                <Link to="/home"> <input type="submit" value="Login" className="w-4/5 p-3  rounded-xl bg-secound  mb-4"/> </Link>
                <h4 className="text-third">Or continue with</h4>
                <div className="flex w-4/5 m-auto justify-evenly  items-center my-4">
                    <div className="border border-2 rounded-xl w-1/3 h-full  p-2">
                        <GoogleOutlined className="text-2xl text-secound"/>
                    </div>
                    <div className="border border-2 rounded-xl w-1/3 h-full mx-4 p-2">
                        <AppleFilled className="text-2xl text-secound"/>
                    </div>
                    <div className="border border-2 rounded-xl w-1/3 h-full  p-2">
                        <FacebookFilled className="text-2xl text-secound"/>
                    </div>
                </div>
            </form>  
            <button></button>
        </div>
    )
}

export default RegisterUser
