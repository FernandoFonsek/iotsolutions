import React, { useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

    const [burguer, setBurguer] = useState(false)

    return (
        <div className="flex items-center justify-between w-full h-12 bg-fourth bg-opacity-40 fixed top-0">

            <div className="mx-2">
                <FontAwesomeIcon icon={faMicrochip} className="text-primary text-3xl  " />            
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-primary">
                    Iot Solutions
                </h2>
            </div>
            <button onClick={()=>setBurguer(!burguer)} className={`hamburger hamburger--emphatic ${burguer ? "is-active":""}` }  type="button">
            <span className="hamburger-box ">
                <span className="hamburger-inner "></span>
            </span>
            </button>
        </div>
    )
}

export default Header
