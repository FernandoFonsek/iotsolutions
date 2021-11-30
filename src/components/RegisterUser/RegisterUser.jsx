import { useState } from "react"
import { useDispatch } from "react-redux"
import { handleRegisterAction } from "../../redux/actions/login.action"
import { GoogleOutlined, AppleFilled, FacebookFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
// <i class="fab fa-connectdevelop"></i>

const RegisterUser = () => {
    const [userInfo, setUserInfo] = useState({userName: "", email: "", password:""})
    const dispatch = useDispatch()

    const handleRegister = e => {
        e.preventDefault()
        dispatch(handleRegisterAction(userInfo))
    }
    console.log(userInfo)
    return (
        <div className="flex justify-center items-center h-screen text-gray-400 bg-black">

            <form className="mx-auto w-4/5 border border-black text-center bg-black bg-opacity-90  h-screen" action="" onSubmit={handleRegister}>
                <div className="h-1/4 w-1/4 m-auto">
                    <FontAwesomeIcon icon={faMicrochip} className="text-white text-5xl my-10 " />            
                </div>
                <h2 className=" text-4xl font-semibold text-white">Hello Again!</h2>
                <h4 className="my-4 text-gray-500">Welcome back</h4>
                <input clasName="text-white" type="text" placeholder="nombre"  className="w-4/5 py-4 pl-2 border-t border-l border-r  border-b border-gray-400 rounded-t-lg bg-gray-200 bg-opacity-30" onChange={(e)=>setUserInfo({...userInfo, userName: e.target.value})}/>
                <input clasName="text-white" type="text" placeholder="ingrese tu correo"  className="w-4/5 py-4 pl-2  border-b border-l border-r rounded-b-lg border-gray-400 bg-gray-200 bg-opacity-30" onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})}/>
                <div className="w-4/5 m-auto text-right">
                    <button onClick="" className="divide-yellow-500 my-3 ">Recovery Password</button>
                </div>
                {/* <input type="password" placeholder="Contraseña" className="textfield w-4/5" onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}/> */}
                <input type="submit" value="Login" className="w-4/5 p-3  rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-4"/>
                <h4>Or continue with</h4>
                <div className="flex w-4/5 m-auto justify-evenly  items-center my-4">
                    <div className="border border-2 rounded-xl w-1/3 h-full  p-2">
                        <GoogleOutlined className="text-2xl"/>
                    </div>
                    <div className="border border-2 rounded-xl w-1/3 h-full mx-4 p-2">
                        <AppleFilled className="text-2xl"/>
                    </div>
                    <div className="border border-2 rounded-xl w-1/3 h-full  p-2">
                        <FacebookFilled className="text-2xl"/>
                    </div>
                </div>
            </form>  
            <button></button>
        </div>
    )
}

export default RegisterUser
