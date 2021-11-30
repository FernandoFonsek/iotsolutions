import React from 'react'
import { Link } from 'react-router-dom'

const ConfigDevice = () => {
    return (

        <div className="flex justify-center items-center h-72 ">
            <form action="" >
                <input type="text" placeholder=" Enter device id" className="text-center w-full border-t border-l border-r rounded-t-lg py-1 bg-graybox bg-opacity-20"/>
                <Link to="/tracker"> <input type="submit" value="connect"className="w-full border-b border-l border-r rounded-b-lg py-1 bg-secound"/> </Link>
            </form>
        </div>
    )
}

export default ConfigDevice
