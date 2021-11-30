import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-primary text-white ">
            <div className=" h-screen  w-full bg-cover bg-center">
                <div className=" flex justify-center items-center w-full z-30 bg-gray bg-opacity-20  h-screen">
                    <div className=" flex-col w-11/12 text-center">
                        <div className="w-full flex justify-center ">
                            <h2 className="w-3/4 text-3xl font-semibold mb-20 -mt-20 text-fourth">Select what you wish to track</h2>
                        </div>
                        <div className="w-full my-2 p-2 border rounded-lg border-black bg-graybox bg-opacity-30  hover:bg-opacity-60 "> 
                            <Link to="/config"><h2 className="text-white">People</h2></Link>
                        </div>
                        <div className="w-full my-2 p-2 border rounded-lg border-black bg-graybox bg-opacity-30 hover:bg-opacity-60">
                            <Link to="/config"><h2>Things</h2></Link>
                        </div>
                        <div className="w-full my-2 p-2 border rounded-lg border-black bg-graybox bg-opacity-30 hover:bg-opacity-60">
                            <Link to="/config"><h2>Animals</h2></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home
